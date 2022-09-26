import { AddressZero } from '@ethersproject/constants';
import { useAccount, useBalance, useContractRead, useNetwork } from 'wagmi';
import { useMemo } from 'react';
import { useSnapshotsQuery, useEventsQuery } from './graphql/user-data-provider/hooks';
import { getReturns } from '@utils/returns';
import { usePoolDetails } from './usePoolDetails';
import { getPoolAddress } from '@utils/networksConfig';
import { formatBignumber } from '@utils/helper';
import riskPoolAbi from 'assets/abi/RiskPool.json';

export function useLiquidityData() {
  const { address } = useAccount();
  const { totalLiquidity, sharesTotalSupply } = usePoolDetails();
  const { chain } = useNetwork();

  //TODO
  const { data: snapshots } = useSnapshotsQuery({
    variables: {
      account: address?.toLowerCase() || AddressZero,
    },
    pollInterval: 4000,
  });

  const { data: events } = useEventsQuery({
    variables: { account: address?.toLowerCase() || AddressZero },
    pollInterval: 4000,
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
      const returnData = getReturns(snapshots, events, sharesTotalSupply, totalLiquidity);
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
  }, [address, assets, events, shares, sharesTotalSupply, snapshots, totalLiquidity]);
}
