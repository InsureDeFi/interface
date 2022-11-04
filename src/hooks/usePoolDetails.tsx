import { DataEntry } from 'react-minimal-pie-chart/types/commonTypes';
import { useNetwork } from 'wagmi';
import { getBuiltGraphSDK } from '../../.graphclient';
import { getPoolAddress } from '@utils/networksConfig';
import { useQuery } from '@tanstack/react-query';

const sdk = getBuiltGraphSDK();

export function usePoolDetails() {
  const { chain } = useNetwork();
  const initialData = {
    pool: { availableAssets: '0', lockedAssets: '0', sharesTotalSupply: '0', totalAssets: '0', utilizationRate: '0' },
  };

  const { data } = useQuery(['pool-data'], async () => sdk.poolData({ riskPool: getPoolAddress(chain) }), {
    keepPreviousData: true,
    select(data) {
      return data.pool;
    },
    initialData,
    refetchInterval: 4000,
  });

  const poolData: DataEntry[] = [
    {
      title: 'Available Liquidity',
      value: Number(data?.availableAssets),
      color: '#5cca69',
    },
    { title: 'Total Cover', value: Number(data?.lockedAssets), color: '#df4a4a' },
  ];

  return data ? { ...data, poolData } : { ...initialData.pool, poolData };
}
