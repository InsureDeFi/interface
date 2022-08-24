import { notifyError, notifySuccess } from '@components/Toast/Toast';
import { useAddRecentTransaction } from '@rainbow-me/rainbowkit';
import { getUSDC, STAGING_ENV } from '@utils/networksConfig';
import React from 'react';
import {
  erc20ABI,
  useAccount,
  useContractWrite,
  useNetwork,
  usePrepareContractWrite,
  useWaitForTransaction,
} from 'wagmi';

export default function Faucet() {
  const { address } = useAccount();
  const { chain } = useNetwork();
  const addRecentTransaction = useAddRecentTransaction();

  const USDC = getUSDC(chain);

  const { config } = usePrepareContractWrite({
    addressOrName: USDC.address,
    contractInterface: erc20ABI,
    functionName: 'mint',
    args: [address, 5e6],
    enabled: !!address && STAGING_ENV,
  });

  const { data: txnResponse, write } = useContractWrite({
    ...config,
    onSuccess(data) {
      addRecentTransaction({
        hash: data.hash,
        description: 'Claim Test Token',
      });
    },
    onError(err) {
      notifyError(err.message);
    },
  });

  useWaitForTransaction({
    hash: txnResponse?.hash,
    onSuccess(txReceipt) {
      notifySuccess('Claim Test Token', txReceipt.transactionHash, chain);
    },
    onError(err) {
      notifyError(err.message);
    },
  });

  return (
    <>
      {address && !chain?.unsupported && STAGING_ENV && (
        <div className="mx-auto mt-2 w-full max-w-6xl">
          <button className="float-right text-lg font-medium text-blue-600" onClick={() => write?.()}>
            Get Test Tokens
          </button>
        </div>
      )}
    </>
  );
}
