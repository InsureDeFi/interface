import { Tab } from '@headlessui/react';
import { NextPage } from 'next';
import React from 'react';
import Deposit from '@components/Deposit/Deposit';
import PoolDetails from '@components/PoolDetails/PoolDetails';
import Withdraw from '@components/Withdraw/Withdraw';
import Faucet from '@components/Faucet/Faucet';
import UserLiquidity from '@components/UserLiquidity/UserLiquidity';
import PageLayout from '@components/PageLayout/PageLayout';

const tabs = ['Deposit', 'Withdraw'];

const Pool: NextPage = () => {
  return (
    <PageLayout title="Underwrite | Insure">
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
                <UserLiquidity />
                <Deposit />
                <Withdraw />
              </Tab.Panels>
            </Tab.Group>
          </div>
        </div>
        <Faucet />
      </div>
    </PageLayout>
  );
};

export default Pool;
