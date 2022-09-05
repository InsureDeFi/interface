import { usePoolDetails } from '@hooks/usePoolDetails';
import { BigNumber } from '@ethersproject/bignumber';
import React from 'react';
import { formatUnits } from '@ethersproject/units';
import { formatCurrency } from '@utils/helper';

type Props = {
  premium: BigNumber | undefined;
};

export default function PoolCapacity({ premium }: Props) {
  const { availableLiquidity } = usePoolDetails();

  return (
    <div className="my-4 w-full rounded-2xl bg-zinc-900 py-2 text-lg text-zinc-200">
      <div className="px-4 py-2">
        <div className="flex items-center justify-between">
          <span>Remaining capacity</span>
          <span className="text-xl">
            {formatCurrency(availableLiquidity, { style: 'decimal' })}{' '}
            <span className="text-base font-normal text-zinc-400">USDC</span>
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span>Premium</span>
          <span>
            {premium && (
              <span className="text-xl">
                {Number(formatUnits(premium, 6)).toLocaleString()}{' '}
                <span className="text-base font-normal text-zinc-400">USDC</span>
              </span>
            )}
          </span>
        </div>
      </div>
    </div>
  );
}
