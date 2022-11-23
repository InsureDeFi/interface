import { BigNumber } from '@ethersproject/bignumber';

const BASE = BigNumber.from(1e6);

const BASE_RATE = BigNumber.from(0.04 * 1e6);
const RATE_SLOPE_1 = BigNumber.from(0.03 * 1e6);
const RATE_SLOPE_2 = BigNumber.from(0.7 * 1e6);
const OPTIMAL_UTILIZATION_RATE = BigNumber.from(0.85 * 1e6);
const EXCESS_UTILIZATION_RATE = BigNumber.from(0.15 * 1e6);

const calculatePremiumRate = (amount: BigNumber, totalLiquidity: BigNumber, lockedAmount: BigNumber) => {
  const utilizationRateBefore = lockedAmount.mul(BASE).div(totalLiquidity);
  const utilizationRateAfter = lockedAmount.add(amount).mul(BASE).div(totalLiquidity);

  let premiumRate = BigNumber.from(0);

  if (utilizationRateAfter.lte(OPTIMAL_UTILIZATION_RATE) || OPTIMAL_UTILIZATION_RATE.lte(utilizationRateBefore)) {
    premiumRate = premiumRate.add(getPremiumRateInternal(utilizationRateBefore, utilizationRateAfter));
  } else {
    premiumRate = premiumRate.add(getPremiumRateInternal(utilizationRateBefore, OPTIMAL_UTILIZATION_RATE));
    premiumRate = premiumRate.add(getPremiumRateInternal(OPTIMAL_UTILIZATION_RATE, utilizationRateAfter));
  }

  return premiumRate;
};

const getPremiumRateInternal = (utilizationRateBefore: BigNumber, utilizationRateAfter: BigNumber) => {
  const premiumRateBefore = getPremiumRateBySlope(utilizationRateBefore);
  const premiumRateAfter = getPremiumRateBySlope(utilizationRateAfter);
  const premiumRate = premiumRateBefore.add(premiumRateAfter).div(2);
  return premiumRate;
};

const getPremiumRateBySlope = (utilizationRate: BigNumber) => {
  let currentPremiumRate = BASE_RATE;
  if (utilizationRate.isZero()) return currentPremiumRate;

  if (utilizationRate.gt(OPTIMAL_UTILIZATION_RATE)) {
    const excessUtilizationRatio = utilizationRate.sub(OPTIMAL_UTILIZATION_RATE);
    currentPremiumRate = currentPremiumRate.add(
      RATE_SLOPE_1.add(RATE_SLOPE_2.mul(excessUtilizationRatio).div(EXCESS_UTILIZATION_RATE))
    );
  } else {
    console.log(RATE_SLOPE_1.toString(), utilizationRate.toString(), OPTIMAL_UTILIZATION_RATE.toString());
    currentPremiumRate = currentPremiumRate.add(RATE_SLOPE_1.mul(utilizationRate).div(OPTIMAL_UTILIZATION_RATE));
    console.log(currentPremiumRate.toString());
  }

  return currentPremiumRate;
};

export const calculatePremium = (
  amount: BigNumber,
  duration: number,
  totalLiquidity: BigNumber,
  lockedAmount: BigNumber
) => {
  if (amount.isZero() || totalLiquidity.isZero() || amount.add(lockedAmount).gt(totalLiquidity)) {
    return BigNumber.from(0);
  }

  const premiumRate = calculatePremiumRate(amount, totalLiquidity, lockedAmount);
  const premium = amount
    .mul(premiumRate)
    .mul(duration * 86400)
    .div(365 * 86400)
    .div(BASE);

  return premium;
};
