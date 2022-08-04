import { useMemo } from 'react';
import { DataEntry } from 'react-minimal-pie-chart/types/commonTypes';
import { useNetwork } from 'wagmi';
import { parseAmount } from '@utils/helper';

import { getPoolAddress } from '@utils/networksConfig';
import { usePoolDataQuery } from './graphql/pool-data-provider/hooks';

export function usePoolDetails(): {
  totalLiquidity: string;
  availableLiquidity: string;
  lockedAmount: string;
  utilizationRate: number;
  sharesTotalSupply: string;
  poolData: DataEntry[];
} {
  const { chain } = useNetwork();

  const { data } = usePoolDataQuery({
    variables: { riskPool: getPoolAddress(chain) },
    pollInterval: 2000,
    fetchPolicy: 'network-only',
  });

  const totalLiquidity = parseAmount(data?.pool?.totalAssets);
  const availableLiquidity = parseAmount(data?.pool?.availableAssets);
  const lockedAmount = parseAmount(data?.pool?.lockedAssets);
  const utilizationRate = parseFloat((Number(parseAmount(data?.pool?.utilizationRate)) * 100).toFixed(2));
  const sharesTotalSupply = parseAmount(data?.pool?.sharesTotalSupply);

  const poolData: DataEntry[] = useMemo(
    () => [
      {
        title: 'Available Liquidity',
        value: Number(availableLiquidity),
        color: '#5cca69',
      },
      { title: 'Total Cover', value: Number(lockedAmount), color: '#df4a4a' },
    ],
    [availableLiquidity, lockedAmount]
  );

  return useMemo(() => {
    return {
      totalLiquidity,
      availableLiquidity,
      lockedAmount,
      utilizationRate,
      sharesTotalSupply,
      poolData,
    };
  }, [availableLiquidity, lockedAmount, poolData, sharesTotalSupply, totalLiquidity, utilizationRate]);
}
