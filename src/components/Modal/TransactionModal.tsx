import { Dialog, Transition } from '@headlessui/react';
import { useAddRecentTransaction } from '@rainbow-me/rainbowkit';
import React, { Fragment, useEffect, useRef, useState } from 'react';
import { AlertTriangle, X } from 'react-feather';
import { Oval } from 'react-loader-spinner';
import { useContractWrite, useNetwork, usePrepareContractWrite, useWaitForTransaction } from 'wagmi';

import RiskPoolABI from 'assets/abi/RiskPool.json';
import { chainToExplorerUrl, getPoolAddress } from '@utils/networksConfig';
import { notifyError, notifySuccess } from '@components/Toast/Toast';
import AnimatedCheckmark from './AnimatedCheckmark';
import Button from '@components/Button/Button';
import ConnectWalletButton from '@components/Button/ConnectWalletButton';

interface Props {
  data: {
    title: string;
    desc: string;
    label: string;
    approvalNeeded: boolean;
    approve?: () => void;
    isValid: boolean;
    calldata: { function: string; args: Array<unknown> };
    resetInput: React.Dispatch<React.SetStateAction<string>>;
  };
}

export default function TransactionModal({
  data: { title, desc, label, approvalNeeded, approve, isValid, calldata, resetInput },
}: Props) {
  const [showModal, setShowModal] = useState(false);

  const { chain } = useNetwork();
  const divRef = useRef(null);
  const addRecentTransaction = useAddRecentTransaction();

  const { config } = usePrepareContractWrite({
    addressOrName: getPoolAddress(chain),
    contractInterface: RiskPoolABI,
    functionName: calldata.function,
    args: calldata.args,
    enabled: isValid && !approvalNeeded,
  });

  const {
    data: txnResponse,
    write,
    error: txnError,
    isLoading,
    isSuccess,
  } = useContractWrite({
    ...config,
    onSuccess(txResponse) {
      addRecentTransaction({ hash: txResponse.hash, description: desc, confirmations: 2 });
    },
  });

  useWaitForTransaction({
    hash: txnResponse?.hash,
    confirmations: 2,
    onSuccess(txReceipt) {
      notifySuccess(title, txReceipt.transactionHash, chain);
    },
    onError(err) {
      notifyError(err.message);
    },
  });

  function closeModal() {
    setShowModal(false);
  }

  function transact() {
    setShowModal(true);
    write?.();
  }

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (!showModal && !txnError) {
      timeout = setTimeout(() => {
        resetInput('');
      }, 200);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [resetInput, showModal, txnError]);

  return (
    <>
      <ConnectWalletButton>
        <div className="flex items-center justify-center gap-4">
          {isValid && approvalNeeded && <Button onClick={approve}>Approve</Button>}
          <Button disabled={!isValid || approvalNeeded} onClick={transact}>
            {label}
          </Button>
        </div>
      </ConnectWalletButton>
      <Transition appear show={showModal} as={Fragment}>
        <Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto" onClose={closeModal} initialFocus={divRef}>
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-60 transition-opacity" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span className="inline-block h-screen align-middle" aria-hidden="true">
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="my-8 inline-block w-full max-w-sm transform select-none overflow-hidden rounded-2xl border border-zinc-700 bg-zinc-900 p-4 text-left align-middle shadow-xl transition-all">
                <div className="flex items-center justify-between" ref={divRef}>
                  <Dialog.Title as="h3" className="text-xl font-medium text-zinc-200">
                    {title}
                  </Dialog.Title>
                  <X className="h-5 cursor-pointer text-zinc-100" onClick={closeModal} />
                </div>
                <div className="flex flex-col items-center pt-10">
                  {isLoading ? (
                    <Oval
                      ariaLabel="loading-indicator"
                      height={90}
                      width={90}
                      strokeWidth={0}
                      strokeWidthSecondary={2}
                      color="#2563eb"
                    />
                  ) : isSuccess ? (
                    <AnimatedCheckmark size={90} color="#34D298" />
                  ) : (
                    <AlertTriangle strokeWidth={2} size="90px" color="#ef4444" />
                  )}
                  <span className="mt-6 text-center text-xl font-medium text-zinc-200">
                    {isLoading
                      ? 'Confirm transaction in wallet'
                      : isSuccess
                      ? 'Transaction submitted'
                      : 'User denied transaction signature'}
                  </span>
                  <span className="mt-1 text-center text-lg text-zinc-300">{desc}</span>
                  {txnResponse?.hash ? (
                    <a
                      href={`${chainToExplorerUrl(chain)}/tx/${txnResponse?.hash}`}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-1 text-base font-medium"
                      style={{ color: 'rgb(33, 114, 229)' }}
                    >
                      <span>View on explorer</span>
                    </a>
                  ) : (
                    <div style={{ height: '24px' }} />
                  )}
                </div>
                <div className="mt-4">
                  <Button onClick={closeModal}>Dismiss</Button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
