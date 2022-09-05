import { AddressZero } from '@ethersproject/constants';
import { useAccount, useContractRead, useNetwork } from 'wagmi';
import { useMemo } from 'react';
import { useLiquidityPositionQuery, useSnapshotsQuery, useEventsQuery } from './graphql/user-data-provider/hooks';
import { getReturns } from '@utils/returns';
import { usePoolDetails } from './usePoolDetails';
import { getPoolAddress } from '@utils/networksConfig';
import { formatBignumber, stringToBignumber } from '@utils/helper';
import riskPoolAbi from 'assets/abi/RiskPool.json';

export function useLiquidityData() {
  const { address } = useAccount();
  const { totalLiquidity, sharesTotalSupply } = usePoolDetails();
  const { chain } = useNetwork();

  const { data: position } = useLiquidityPositionQuery({
    variables: {
      account: address?.toLowerCase() || AddressZero,
    },
    pollInterval: 4000,
    fetchPolicy: 'network-only',
  });

  const shares = position?.liquidityPosition?.shares;

  //TODO
  const { data: snapshots } = useSnapshotsQuery({
    variables: {
      account: address?.toLowerCase() || AddressZero,
    },
    pollInterval: 4000,
    fetchPolicy: 'network-only',
  });

  const { data: events } = useEventsQuery({
    variables: { account: address?.toLowerCase() || AddressZero },
    pollInterval: 4000,
    fetchPolicy: 'network-only',
  });

  const { data: assets } = useContractRead({
    addressOrName: getPoolAddress(chain),
    contractInterface: riskPoolAbi,
    functionName: 'convertToAssets',
    args: stringToBignumber(shares, 6),
    enabled: !!shares,
    watch: true,
  });

  return useMemo(() => {
    if (shares && snapshots && events && address) {
      const returnData = getReturns(snapshots, events, sharesTotalSupply, totalLiquidity);
      return {
        shares: shares,
        assets: formatBignumber(assets, 6),
        principal: returnData.principal,
        fees: returnData.fees,
      };
    } else {
      return {
        shares: undefined,
        assets: formatBignumber(assets, 6),
        principal: '0',
        fees: '0',
      };
    }
  }, [address, assets, events, shares, sharesTotalSupply, snapshots, totalLiquidity]);
}
