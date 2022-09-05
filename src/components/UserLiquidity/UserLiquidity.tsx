import React from 'react';
import { useLiquidityData } from '@hooks/useLiquidityData';
import { formatCurrency } from '@coingecko/cryptoformat';

export default function UserLiquidity() {
  const { assets, fees } = useLiquidityData();

  return (
    <div className="mt-4 w-full rounded-2xl bg-zinc-900 p-4 text-lg text-zinc-200">
      <div className="flex items-center justify-between">
        <div>Liquidity (Including Fees)</div>
        <div>{formatCurrency(Number(assets), 'USD', 'en')}</div>
      </div>
      <div className="flex items-center justify-between">
        <div>Fees Earned</div>
        <div>{formatCurrency(Number(fees), 'USD', 'en')}</div>
      </div>
    </div>
  );
}
