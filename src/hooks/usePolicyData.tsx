import { useQuery } from '@tanstack/react-query';
import { useAccount } from 'wagmi';
import { getBuiltGraphSDK } from '../../.graphclient';

const sdk = getBuiltGraphSDK();

export function usePolicyData() {
  const { address } = useAccount();

  return useQuery(['policy-data'], async () => sdk.policyData({ account: address?.toLowerCase() }), {
    enabled: !!address,
    select(data) {
      return data.policies;
    },
  });
}
