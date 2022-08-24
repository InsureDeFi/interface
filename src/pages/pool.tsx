import { Tab } from '@headlessui/react';
import { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import { useContractRead, useNetwork } from 'wagmi';

import Deposit from '@components/Deposit/Deposit';
import PoolDetails from '@components/PoolDetails/PoolDetails';
import Withdraw from '@components/Withdraw/Withdraw';
import { useLiquidityData } from '@hooks/useLiquidityData';
import { getPoolAddress } from '@utils/networksConfig';
import riskPoolAbi from '../assets/abi/RiskPool.json';
import { formatBignumber, stringToBignumber } from '@utils/helper';
import { formatCurrency } from '@coingecko/cryptoformat';
import Faucet from '@components/Faucet/Faucet';

const tabs = ['Deposit', 'Withdraw'];

const Pool: NextPage = () => {
  const { shares, fees } = useLiquidityData();
  const { chain } = useNetwork();

  const { data: userAssets } = useContractRead({
    addressOrName: getPoolAddress(chain),
    contractInterface: riskPoolAbi,
    functionName: 'convertToAssets',
    args: stringToBignumber(shares, 6),
    enabled: !!shares,
    watch: true,
  });

  return (
    <>
      <Head>
        <title>Underwrite | Insure</title>
      </Head>
      <div className="w-full">
        <div className="mx-auto flex w-full max-w-6xl select-none flex-col gap-6 rounded-2xl bg-zinc-900/20 p-4 lg:flex-row">
          <PoolDetails />
          <div className="lg:w-[40%]">
            <Tab.Group>
              <Tab.List className="flex space-x-1 rounded-2xl bg-zinc-900/30 p-1">
                {tabs.map((tab) => (
                  <Tab
                    key={tab}
                    className={({ selected }) =>
                      `w-full rounded-xl py-2.5 text-zinc-200 ${
                        selected ? 'bg-zinc-900 shadow' : 'text-zinc-100 hover:bg-zinc-900/[0.32] hover:text-zinc-200'
                      }`
                    }
                  >
                    {tab}
                  </Tab>
                ))}
              </Tab.List>
              <Tab.Panels className="mt-2">
                <div className="mt-4 w-full rounded-2xl bg-zinc-900 p-4 text-lg text-zinc-200">
                  <div className="flex items-center justify-between">
                    <div>Liquidity (Including Fees)</div>
                    <div>{formatCurrency(Number(formatBignumber(userAssets, 6)), 'USD', 'en')}</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>Fees Earned</div>
                    <div>{formatCurrency(Number(fees), 'USD', 'en')}</div>
                  </div>
                </div>
                <Deposit />
                <Withdraw />
              </Tab.Panels>
            </Tab.Group>
          </div>
        </div>
        <Faucet />
      </div>
    </>
  );
};

export default Pool;
