import { NextPage } from 'next';
import React, { useState } from 'react';
import { useNetwork } from 'wagmi';

import CurrencyInput from '@components/CurrencyInput/CurrencyInput';
import Duration from '@components/Duration/Duration';
import CurrencyModal from '@components/Modal/CurrencyModal';
import TransactionModal from '@components/Modal/TransactionModal';
import PriceChart from '@components/PriceChart/PriceChart';
import { useApproval } from '@hooks/useApproval';
import { BuyCallbackState, useBuyCallback } from '@hooks/useBuyCallback';
import { getPoolAddress, getUSDC } from '@utils/networksConfig';
import PageLayout from '@components/PageLayout/PageLayout';
import PoolCapacity from '@components/PoolCapacity/PoolCapacity';

const Home: NextPage = () => {
  const [asset, setAsset] = useState<string>('BTC');
  const [coverAmount, setCoverAmount] = useState<string>('');
  const [duration, setDuration] = useState<number>(365);

  const { chain } = useNetwork();
  const USDC = getUSDC(chain);
  const { state, label, premium, calldata } = useBuyCallback(asset, coverAmount, duration);
  const { approvalNeeded, approve } = useApproval(USDC, getPoolAddress(chain), premium);

  return (
    <PageLayout title="Purchase | Insure">
      <div className="w-full max-w-lg select-none rounded-3xl bg-zinc-900/20 p-2 md:p-4">
        <div className="mb-4 w-full rounded-2xl bg-zinc-900 py-4 text-zinc-200">
          <CurrencyModal selectedAsset={asset} setAsset={setAsset} />
          <PriceChart asset={asset} />
          <PoolCapacity premium={premium} />
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
    </PageLayout>
  );
};

export default Home;
