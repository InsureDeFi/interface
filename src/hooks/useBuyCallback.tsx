import { BigNumber } from '@ethersproject/bignumber';
import { parseUnits } from '@ethersproject/units';
import { useMemo } from 'react';
import { useAccount, useBalance, useNetwork } from 'wagmi';
import { stringToBignumber } from '@utils/helper';

import { getUSDC } from '@utils/networksConfig';
import { calculatePremium } from '@utils/premium';
import { usePoolDetails } from './usePoolDetails';

const MIN_COVER_AMOUNT = 1000 * 1e6;

export enum BuyCallbackState {
  INVALID,
  VALID,
}

export function useBuyCallback(
  asset: string,
  coverAmount: string,
  duration: number
): {
  state: BuyCallbackState;
  label: string;
  premium?: BigNumber;
  calldata: { function: string; args: (string | number | BigNumber | undefined)[] };
} {
  const { address } = useAccount();
  const { chain } = useNetwork();
  const USDC = getUSDC(chain);
  const coverAmountBign = stringToBignumber(coverAmount, USDC.decimals);

  const { data: balanceUSDC } = useBalance({
    addressOrName: address,
    token: USDC.address,
    formatUnits: USDC.decimals,
    watch: true,
    enabled: !!address,
  });
  const { availableAssets, totalAssets, lockedAssets } = usePoolDetails();

  const premium = calculatePremium(
    coverAmountBign,
    duration,
    parseUnits(totalAssets, USDC.decimals),
    parseUnits(lockedAssets, USDC.decimals)
  );

  return useMemo(() => {
    const calldata = {
      function: 'insure',
      args: [asset, coverAmountBign, duration * 86400, address],
    };

    if (duration < 30 || duration > 365) {
      return { state: BuyCallbackState.INVALID, label: 'Invalid duration', calldata };
    } else if (coverAmountBign.isZero()) {
      return { state: BuyCallbackState.INVALID, label: 'Enter an amount', calldata };
    } else if (coverAmountBign.lt(MIN_COVER_AMOUNT)) {
      return { state: BuyCallbackState.INVALID, label: 'Min cover amount is 1000 USDC', calldata };
    } else if (balanceUSDC && premium.gt(balanceUSDC.value)) {
      return { state: BuyCallbackState.INVALID, label: 'Insufficient balance', calldata };
    } else if (coverAmountBign.gt(parseUnits(availableAssets, USDC.decimals))) {
      return { state: BuyCallbackState.INVALID, label: 'Insufficient capacity', calldata };
    } else {
      return {
        state: BuyCallbackState.VALID,
        label: 'Buy',
        premium,
        calldata,
      };
    }
  }, [asset, coverAmountBign, duration, address, balanceUSDC, premium, availableAssets, USDC.decimals]);
}
