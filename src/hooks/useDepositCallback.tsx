import { BigNumber } from '@ethersproject/bignumber';
import { useMemo } from 'react';
import { useAccount, useBalance, useNetwork } from 'wagmi';
import { stringToBignumber } from '@utils/helper';
import { getUSDC } from '@utils/networksConfig';

export enum UseDepositCallbackState {
  INVALID,
  VALID,
}

interface UseDepositReturns {
  state: UseDepositCallbackState;
  label: string;
  calldata: { function: string; args: (string | BigNumber | undefined)[] };
}

export function useDepositCallback(supplyAmount: string): UseDepositReturns {
  const { address } = useAccount();
  const { chain } = useNetwork();

  const USDC = getUSDC(chain);
  const { data: balanceUSDC } = useBalance({
    addressOrName: address,
    token: USDC.address,
    formatUnits: USDC.decimals,
    watch: true,
    enabled: !!address,
  });

  const supplyAmountBign = stringToBignumber(supplyAmount, USDC.decimals);

  return useMemo(() => {
    const calldata = {
      function: 'deposit',
      args: [supplyAmountBign, address],
    };

    if (supplyAmountBign.isZero()) {
      return { state: UseDepositCallbackState.INVALID, label: 'Enter an amount', calldata };
    } else if (balanceUSDC && supplyAmountBign.gt(balanceUSDC.value)) {
      return { state: UseDepositCallbackState.INVALID, label: 'Insufficient balance', calldata };
    } else {
      return { state: UseDepositCallbackState.VALID, label: 'Add', calldata };
    }
  }, [address, balanceUSDC, supplyAmountBign]);
}
