import React from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import { useLiquidityData } from '@hooks/useLiquidityData';

import { usePoolDetails } from '@hooks/usePoolDetails';
import { formatCurrency } from '@utils/helper';

export default function PoolDetails() {
  const { totalLiquidity, availableLiquidity, lockedAmount, utilizationRate, sharesTotalSupply, poolData } =
    usePoolDetails();
  const { shares } = useLiquidityData();

  function formatPercentage(amount: number) {
    return new Intl.NumberFormat('en-US', { style: 'percent', maximumFractionDigits: 2 }).format(amount);
  }

  function getPoolShare() {
    if (shares) {
      const userShare = Number(shares) / Number(sharesTotalSupply);
      if (userShare < 0.0001) return '< 0.01%';
      return formatPercentage(userShare);
    } else {
      return '-';
    }
  }

  return (
    <div className="flex flex-col rounded-2xl bg-zinc-900 p-4 text-lg text-zinc-200 lg:w-[60%]">
      <div className="my-auto">
        <div className="flex flex-col items-center justify-center py-4 lg:flex-row">
          <div>
            <div className="text-center text-zinc-400 lg:text-right">Locked Liquidity</div>
            <div className="text-center text-xl font-medium lg:text-right">{formatCurrency(lockedAmount)}</div>
          </div>
          <PieChart
            className="my-4 w-40 lg:my-0 lg:mx-4"
            data={poolData}
            totalValue={Number(totalLiquidity)}
            startAngle={270}
            animate
            lineWidth={16}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-8 -8 48 48">
              <g fill="none">
                <circle cx="16" cy="16" r="16" fill="#2775C9" />
                <path
                  fill="#FFF"
                  d="M15.75 27.5A11.75 11.75 0 1 1 27.5 15.75 11.75 11.75 0 0 1 15.75 27.5zm-.7-16.11a2.58 2.58 0 0 0-2.45 2.47c0 1.21.74 2 2.31 2.33l1.1.26c1.07.25 1.51.61 1.51 1.22s-.77 1.21-1.77 1.21a1.9 1.9 0 0 1-1.8-.91.68.68 0 0 0-.61-.39h-.59a.35.35 0 0 0-.28.41 2.73 2.73 0 0 0 2.61 2.08v.84a.7.7 0 0 0 1.41 0v-.85a2.62 2.62 0 0 0 2.59-2.58c0-1.27-.73-2-2.46-2.37l-1-.22c-1-.25-1.47-.58-1.47-1.14 0-.56.6-1.18 1.6-1.18a1.64 1.64 0 0 1 1.59.81.8.8 0 0 0 .72.46h.47a.42.42 0 0 0 .31-.5 2.65 2.65 0 0 0-2.38-2v-.69a.7.7 0 0 0-1.41 0v.74zm-8.11 4.36a8.79 8.79 0 0 0 6 8.33h.14a.45.45 0 0 0 .45-.45v-.21a.94.94 0 0 0-.58-.87 7.36 7.36 0 0 1 0-13.65.93.93 0 0 0 .58-.86v-.23a.42.42 0 0 0-.56-.4 8.79 8.79 0 0 0-6.03 8.34zm17.62 0a8.79 8.79 0 0 0-6-8.32h-.15a.47.47 0 0 0-.47.47v.15a1 1 0 0 0 .61.9 7.36 7.36 0 0 1 0 13.64 1 1 0 0 0-.6.89v.17a.47.47 0 0 0 .62.44 8.79 8.79 0 0 0 5.99-8.34z"
                />
              </g>
            </svg>
          </PieChart>
          <div>
            <div className="text-center text-zinc-400 lg:text-left">Available Liquidity</div>
            <div className="text-center text-xl font-medium lg:text-left">{formatCurrency(availableLiquidity)}</div>
          </div>
        </div>
        <div className="mt-4 flex flex-wrap items-center gap-4 px-2 md:mt-8 md:gap-8 md:px-6">
          <div className="mx-auto">
            <div className="text-zinc-400">Reserve Size</div>
            <div className="text-center text-xl font-medium">{formatCurrency(totalLiquidity)}</div>
          </div>
          <div className="mx-auto">
            <div className="text-zinc-400">Utilization Rate</div>
            <div className="text-center text-xl font-medium">{formatPercentage(utilizationRate)}</div>
          </div>
          <div className="mx-auto">
            <div className="text-zinc-400">Your Share</div>
            <div className="text-center text-xl font-medium">{getPoolShare()}</div>
          </div>
          <div className="mx-auto">
            <div className="text-zinc-400">USDC Price</div>
            <div className="text-center text-xl font-medium">$1</div>
          </div>
        </div>
      </div>
    </div>
  );
}
