import { usePoolDetails } from '@hooks/usePoolDetails';
import { BigNumber } from '@ethersproject/bignumber';
import React from 'react';
import { formatUnits } from '@ethersproject/units';
import { formatCurrency } from '@utils/helper';

type Props = {
  premium: BigNumber | undefined;
};

export default function PoolCapacity({ premium }: Props) {
  const { availableAssets } = usePoolDetails();

  return (
    <div className="w-full rounded-2xl bg-zinc-900 text-lg text-zinc-200">
      <div className="px-4">
        <div className="flex items-center justify-between">
          <span>Remaining capacity</span>
          <span className="text-xl">
            {formatCurrency(availableAssets, { style: 'decimal' })}{' '}
            <span className="text-base font-normal text-zinc-400">USDC</span>
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span>Premium</span>
          <span>
            <span className="text-xl">
              {premium ? Number(formatUnits(premium, 6)).toLocaleString() : '-'}{' '}
              <span className="text-base font-normal text-zinc-400">USDC</span>
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}
