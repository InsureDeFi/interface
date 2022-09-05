import { BigNumber, BigNumberish } from '@ethersproject/bignumber';
import { formatUnits, parseUnits } from '@ethersproject/units';

export const ZERO_BN = BigNumber.from(0);

export function parseAmount(amount?: string): string {
  if (!amount) return '0';
  return amount;
}

export function formatBignumber(bignumber?: BigNumberish, fixedDecimals?: number): string {
  if (!bignumber) return formatUnits(ZERO_BN, fixedDecimals);
  return formatUnits(bignumber, fixedDecimals);
}

export function stringToBignumber(amount?: string, decimals?: number): BigNumber {
  if (!amount) return parseUnits('0', decimals);
  return parseUnits(amount, decimals);
}

export function formatCurrency(amount: string, options?: Intl.NumberFormatOptions | undefined): string {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', notation: 'compact', ...options }).format(
    Number(amount)
  );
}
