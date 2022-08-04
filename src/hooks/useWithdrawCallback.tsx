import { BigNumber } from '@ethersproject/bignumber';
import { parseUnits } from '@ethersproject/units';
import { useMemo } from 'react';
import { useAccount, useNetwork } from 'wagmi';
import { stringToBignumber } from '@utils/helper';
import { getUSDC } from '@utils/networksConfig';

import { useLiquidityData } from './useLiquidityData';
import { usePoolDetails } from './usePoolDetails';

export enum UseWithdrawCallbackState {
  INVALID,
  VALID,
}

interface UseWithdrawReturns {
  state: UseWithdrawCallbackState;
  label: string;
  calldata: { function: string; args: (string | BigNumber | undefined)[] };
}

export function useWithdrawCallback(removeAmount: string): UseWithdrawReturns {
  const { address } = useAccount();
  const { shares } = useLiquidityData();
  const { availableLiquidity } = usePoolDetails();
  const { chain } = useNetwork();
  const USDC = getUSDC(chain);
  const removeAmountBign = stringToBignumber(removeAmount, USDC.decimals);

  return useMemo(() => {
    const calldata = { function: 'redeem', args: [removeAmountBign, address, address] };
    //TODO
    if (removeAmountBign.isZero()) {
      return { state: UseWithdrawCallbackState.INVALID, label: 'Enter an amount', calldata };
    } else if (removeAmountBign.gt(stringToBignumber(shares, 6))) {
      return { state: UseWithdrawCallbackState.INVALID, label: 'Insufficient balance', calldata };
    } else if (removeAmountBign.gt(parseUnits(availableLiquidity, 6))) {
      return {
        state: UseWithdrawCallbackState.INVALID,
        label: 'Insufficient liquidity',
        calldata,
      };
    } else {
      return {
        state: UseWithdrawCallbackState.VALID,
        label: 'Remove',
        calldata,
      };
    }
  }, [removeAmountBign, address, shares, availableLiquidity]);
}
