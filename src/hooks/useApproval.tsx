import { useAddRecentTransaction } from '@rainbow-me/rainbowkit';
import { BigNumber } from '@ethersproject/bignumber';
import { useMemo } from 'react';
import { erc20ABI, useContractWrite, useNetwork, usePrepareContractWrite, useWaitForTransaction } from 'wagmi';

import { Token } from '@constants/tokens';
import { notifyError, notifySuccess } from '@components/Toast/Toast';
import { useTokenAllowance } from './useTokenAllowance';

export function useApproval(
  token: Token,
  spender: string,
  amount?: BigNumber
): {
  approvalNeeded: boolean;
  approve?: () => void;
} {
  const { chain } = useNetwork();
  const allowance = useTokenAllowance(token, spender);
  const addRecentTransaction = useAddRecentTransaction();

  const { config } = usePrepareContractWrite({
    addressOrName: token.address,
    contractInterface: erc20ABI,
    functionName: 'approve',
    args: [spender, amount],
    enabled: !!amount,
  });

  const { data: txnResponse, write } = useContractWrite({
    ...config,
    onSuccess(data) {
      addRecentTransaction({
        hash: data.hash,
        description: `Approve ${token.symbol}`,
      });
    },
    onError(err) {
      notifyError(err.message);
    },
  });

  useWaitForTransaction({
    hash: txnResponse?.hash,
    onSuccess(txReceipt) {
      notifySuccess(`Approve ${token.symbol}`, txReceipt.transactionHash, chain);
    },
    onError(err) {
      notifyError(err.message);
    },
  });

  return useMemo(() => {
    if (!allowance || !amount) return { approvalNeeded: false };
    return allowance.lt(amount)
      ? {
          approvalNeeded: true,
          approve: () => write?.(),
        }
      : { approvalNeeded: false };
  }, [allowance, amount, write]);
}
