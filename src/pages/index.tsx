import { formatUnits } from '@ethersproject/units';
import { NextPage } from 'next';
import Head from 'next/head';
import React, { useState } from 'react';
import { useNetwork } from 'wagmi';

import CurrencyInput from '@components/CurrencyInput/CurrencyInput';
import Duration from '@components/Duration/Duration';
import CurrencyModal from '@components/Modal/CurrencyModal';
import TransactionModal from '@components/Modal/TransactionModal';
import PriceChart from '@components/PriceChart/PriceChart';
import { useApproval } from '@hooks/useApproval';
import { BuyCallbackState, useBuyCallback } from '@hooks/useBuyCallback';
import { usePoolDetails } from '@hooks/usePoolDetails';
import { getPoolAddress, getUSDC } from '@utils/networksConfig';

const Home: NextPage = () => {
  const [asset, setAsset] = useState<string>('BTC');
  const [coverAmount, setCoverAmount] = useState<string>('');
  const [duration, setDuration] = useState<number>(365);

  const { chain } = useNetwork();
  const USDC = getUSDC(chain);
  const { availableLiquidity } = usePoolDetails();
  const { state, label, premium, calldata } = useBuyCallback(asset, coverAmount, duration);
  const { approvalNeeded, approve } = useApproval(USDC, getPoolAddress(chain), premium);

  return (
    <>
      <Head>
        <title>Purchase | Insure</title>
      </Head>
      <div className="w-full max-w-lg select-none rounded-3xl bg-zinc-900/20 p-2 md:p-4">
        <div className="w-full rounded-2xl bg-zinc-900 py-4 text-zinc-200">
          <CurrencyModal selectedAsset={asset} setAsset={setAsset} />
          <PriceChart asset={asset} />
          <CurrencyInput
            label="Cover Amount"
            currency={USDC}
            showBalance={false}
            value={coverAmount}
            onUserInput={setCoverAmount}
            showMax={false}
          />
          <div className="px-4 pb-2">
            <Duration value={duration} onUserClick={setDuration} />
          </div>
        </div>
        <div className="my-4 w-full rounded-2xl bg-zinc-900 py-2 text-lg text-zinc-200">
          <div className="px-4 py-2">
            <div className="flex items-center justify-between">
              <span>Remaining capacity</span>
              <span className="text-xl">
                {Number(availableLiquidity).toLocaleString()}{' '}
                <span className="text-base font-normal text-zinc-400">USDC</span>
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span>Premium</span>
              <span>
                {premium ? (
                  <span className="text-xl">
                    {Number(formatUnits(premium, USDC.decimals)).toLocaleString()}{' '}
                    <span className="text-base font-normal text-zinc-400">USDC</span>
                  </span>
                ) : (
                  '-'
                )}
              </span>
            </div>
          </div>
        </div>

        <TransactionModal
          data={{
            title: 'Buy insurance',
            desc: `Buy ${coverAmount} USDC ${asset} Insurance`,
            label,
            approvalNeeded,
            approve,
            isValid: state === BuyCallbackState.VALID,
            calldata,
            resetInput: setCoverAmount,
          }}
        />
      </div>
    </>
  );
};

export default Home;
