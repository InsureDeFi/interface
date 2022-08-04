import { AddressZero } from '@ethersproject/constants';
import { useAccount } from 'wagmi';

import { useMemo } from 'react';
import { useLiquidityPositionQuery, useSnapshotsQuery, useEventsQuery } from './graphql/user-data-provider/hooks';
import { getReturns } from '@utils/returns';
import { usePoolDetails } from './usePoolDetails';

export function useLiquidityData() {
  const { address } = useAccount();
  const { totalLiquidity, sharesTotalSupply } = usePoolDetails();

  const { data: positions } = useLiquidityPositionQuery({
    variables: {
      account: address?.toLowerCase() || AddressZero,
    },
    pollInterval: 2000,
    fetchPolicy: 'network-only',
  });

  //TODO
  const { data: snapshots } = useSnapshotsQuery({
    variables: {
      account: address?.toLowerCase() || AddressZero,
    },
    pollInterval: 2000,
    fetchPolicy: 'network-only',
  });

  const { data: events } = useEventsQuery({
    variables: { account: address?.toLowerCase() || AddressZero },
    pollInterval: 2000,
    fetchPolicy: 'network-only',
  });

  return useMemo(() => {
    if (positions && snapshots && events && address) {
      const returnData = getReturns(snapshots, events, sharesTotalSupply, totalLiquidity);
      return {
        shares: positions.liquidityPosition?.shares,
        principal: returnData.principal,
        fees: returnData.fees,
      };
    } else {
      return {
        shares: undefined,
        principal: '0',
        fees: '0',
      };
    }
  }, [address, events, positions, sharesTotalSupply, snapshots, totalLiquidity]);
}
