import { useAccount, useBalance, useContractRead, useNetwork } from 'wagmi';
import { useMemo } from 'react';
import { getReturns } from '@utils/returns';
import { usePoolDetails } from './usePoolDetails';
import { getPoolAddress } from '@utils/networksConfig';
import { formatBignumber } from '@utils/helper';
import riskPoolAbi from 'assets/abi/RiskPool.json';
import { getBuiltGraphSDK } from '../../.graphclient';
import { useQuery } from '@tanstack/react-query';

const sdk = getBuiltGraphSDK();

export function useLiquidityData() {
  const { address } = useAccount();
  const { totalAssets, sharesTotalSupply } = usePoolDetails();
  const { chain } = useNetwork();

  const { data: snapshots } = useQuery(['snapshots'], async () => sdk.snapshots({ account: address?.toLowerCase() }), {
    keepPreviousData: true,
    enabled: !!address,
    refetchInterval: 4000,
  });

  const { data: events } = useQuery(['events'], async () => sdk.events({ account: address?.toLowerCase() }), {
    keepPreviousData: true,
    enabled: !!address,
    refetchInterval: 4000,
  });

  const { data: shares } = useBalance({
    addressOrName: address,
    token: getPoolAddress(chain),
    enabled: !!address,
    watch: true,
  });

  const { data: assets } = useContractRead({
    addressOrName: getPoolAddress(chain),
    contractInterface: riskPoolAbi,
    functionName: 'convertToAssets',
    args: shares?.value,
    enabled: !!shares,
    watch: true,
  });

  return useMemo(() => {
    if (shares && snapshots && events && address) {
      const returnData = getReturns(snapshots, events, sharesTotalSupply, totalAssets);
      return {
        shares: shares.formatted,
        assets: formatBignumber(assets, 6),
        principal: returnData.principal,
        fees: returnData.fees.toString(),
      };
    } else {
      return {
        shares: undefined,
        assets: undefined,
        principal: undefined,
        fees: undefined,
      };
    }
  }, [address, assets, events, shares, sharesTotalSupply, snapshots, totalAssets]);
}
