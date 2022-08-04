import { Token } from '@constants/tokens';
import { useMemo } from 'react';
import { erc20ABI, useAccount, useContractRead } from 'wagmi';

export function useTokenAllowance(token: Token, spender: string) {
  const { address } = useAccount();

  const { data: allowance } = useContractRead({
    addressOrName: token.address,
    contractInterface: erc20ABI,
    functionName: 'allowance',
    args: [address, spender],
    enabled: !!address,
    watch: true,
  });

  return useMemo(() => allowance, [allowance]);
}
