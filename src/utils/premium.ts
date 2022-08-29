import { BigNumber, FixedNumber } from '@ethersproject/bignumber';

const k = BigNumber.from(30000000000);
const a = k.mul(1e6).div(1200000);

const BASE = BigNumber.from(1e6);
const BASE_FN = FixedNumber.from(1e6);

const calculatePremiumRate = (amount: BigNumber, totalLiquidity: BigNumber, lockedAmount: BigNumber) => {
  const c1 = BASE.sub(lockedAmount.mul(BASE).div(totalLiquidity));
  const c2 = BASE.sub(lockedAmount.add(amount).mul(BASE).div(totalLiquidity));

  const tempA = a.div(BASE);

  const a1 = FixedNumber.fromString(log(c1.add(tempA)).toString())
    .mulUnsafe(FixedNumber.fromValue(k))
    .mulUnsafe(BASE_FN)
    .addUnsafe(FixedNumber.fromValue(c1));

  const a2 = FixedNumber.fromString(log(c2.add(tempA)).toString())
    .mulUnsafe(FixedNumber.fromValue(k))
    .mulUnsafe(BASE_FN)
    .addUnsafe(FixedNumber.fromValue(c2));

  let premiumRate = a1.subUnsafe(a2);
  premiumRate = premiumRate.divUnsafe(FixedNumber.fromValue(c1.sub(c2))).divUnsafe(BASE_FN);

  return premiumRate;
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

  const premiumRate = parseInt(calculatePremiumRate(amount, totalLiquidity, lockedAmount).toString());
  const premium = amount
    .mul(premiumRate)
    .mul(duration * 86400)
    .div(365 * 86400)
    .div(BASE);

  return premium;
};

function log10(bigint: BigNumber) {
  if (bigint.isNegative()) return NaN;
  const s = bigint.toString();

  return s.length + Math.log10(Number('0.' + s.substring(0, 15)));
}

function log(bigint: BigNumber) {
  return log10(bigint) * Math.log(10);
}
