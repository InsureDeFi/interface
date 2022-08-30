import React from 'react';
import { useLiquidityData } from '@hooks/useLiquidityData';
import { getPoolAddress } from '@utils/networksConfig';
import riskPoolAbi from 'assets/abi/RiskPool.json';
import { formatBignumber, stringToBignumber } from '@utils/helper';
import { formatCurrency } from '@coingecko/cryptoformat';
import { useContractRead, useNetwork } from 'wagmi';

export default function UserLiquidity() {
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
  );
}
