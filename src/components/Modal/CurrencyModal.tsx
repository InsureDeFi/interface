import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useRef, useState } from 'react';
import { ChevronDown, X } from 'react-feather';

import { SupportedAssets } from '@constants/tokens';

export const supportedAssets = ['BTC', 'ETH', 'CKB'];

type Props = {
  selectedAsset: string;
  setAsset: React.Dispatch<React.SetStateAction<string>>;
};

export default function CurrencyModal({ selectedAsset, setAsset }: Props) {
  const [showModal, setShowModal] = useState<boolean>(false);
  const divRef = useRef(null);

  function closeModal() {
    setShowModal(false);
  }

  return (
    <>
      <div className="flex items-center justify-between px-4 pt-2 text-lg">
        {/* <span>Asset</span> */}
        <button className="flex h-8 items-center" onClick={() => setShowModal(true)}>
          <img
            src={SupportedAssets[selectedAsset].logo}
            height={28}
            width={28}
            alt={SupportedAssets[selectedAsset].name}
            loading="eager"
          />
          <span className="mx-2 text-2xl font-medium">{SupportedAssets[selectedAsset].name}</span>
          <ChevronDown strokeWidth={2} className="h-6" />
        </button>
      </div>

      <Transition appear show={showModal} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto text-lg"
          onClose={closeModal}
          initialFocus={divRef}
        >
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
              <div className="my-8 inline-block w-full max-w-sm transform overflow-hidden rounded-2xl border border-zinc-700 bg-zinc-900 text-left align-middle shadow-xl transition-all">
                <div className="flex items-center justify-between border-b border-zinc-700 px-4 py-4" ref={divRef}>
                  <Dialog.Title as="h3" className="text-xl font-medium text-zinc-200">
                    Select asset
                  </Dialog.Title>
                  <X className="h-5 cursor-pointer text-zinc-100" onClick={closeModal} />
                </div>
                <div className="py-2">
                  {supportedAssets?.map((asset: string) => (
                    <div
                      key={asset}
                      className={`flex items-center px-5 py-2 text-zinc-200 ${
                        SupportedAssets[selectedAsset].symbol === asset
                          ? 'cursor-default opacity-50'
                          : 'cursor-pointer hover:bg-zinc-700'
                      }`}
                      onClick={() => {
                        if (SupportedAssets[selectedAsset].symbol !== asset) {
                          setAsset(asset);
                          closeModal();
                        }
                      }}
                    >
                      <img
                        src={SupportedAssets[asset].logo}
                        height={24}
                        width={24}
                        alt={SupportedAssets[asset].name}
                        loading="eager"
                      />
                      <div className="mx-3">
                        <div className="font-bold">{SupportedAssets[asset].name}</div>
                        <div className="text-sm font-thin">{asset}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
