import React from 'react';
import { useAccount, useBalance, useContractRead, useNetwork } from 'wagmi';
import { Token } from '@constants/tokens';
import riskPoolAbi from 'assets/abi/RiskPool.json';
import { getPoolAddress } from '@utils/networksConfig';
import { formatBignumber } from '@utils/helper';
import USDC from '@images/usdcoin.svg';

type Props = {
  label?: string;
  currency: Token;
  convertToAssets?: boolean;
  showBalance?: boolean;
  value: string;
  onUserInput: React.Dispatch<React.SetStateAction<string>>;
  showMax?: boolean;
};

function escapeRegExp(string: string): string {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
const inputRegex = /^\d*(?:\\[.])?\d*$/;

export default function CurrencyInput({
  label,
  currency,
  convertToAssets = false,
  showBalance = true,
  value,
  onUserInput,
  showMax = true,
}: Props) {
  const { address } = useAccount();
  const { chain } = useNetwork();

  const { data: currencyBalance } = useBalance({
    addressOrName: address,
    token: currency.address,
    formatUnits: currency.decimals,
    watch: true,
    enabled: !!address,
  });

  const { data: assets } = useContractRead({
    addressOrName: getPoolAddress(chain),
    contractInterface: riskPoolAbi,
    functionName: 'convertToAssets',
    args: currencyBalance?.value,
    enabled: convertToAssets && !!currencyBalance,
    watch: true,
  });

  const enforcer = (event: React.ChangeEvent<HTMLInputElement>) => {
    const nextUserInput = event.target.value.replace(/,/g, '.');
    if (
      nextUserInput === '' ||
      (inputRegex.test(escapeRegExp(nextUserInput)) &&
        (nextUserInput.includes('.') ? nextUserInput.split('.')[1]?.length <= currency.decimals : true))
    ) {
      onUserInput(nextUserInput);
    }
  };

  return (
    <div className="w-full rounded-2xl bg-zinc-900 p-4 text-lg text-zinc-200">
      <div className="flex w-full items-center justify-between">
        <div>{label || 'Input'}</div>
        {showBalance && currencyBalance && (
          <div className="flex items-center gap-1">
            Balance: {convertToAssets ? formatBignumber(assets, 6) : currencyBalance.formatted}
          </div>
        )}
      </div>
      <div className="mt-4 flex w-full items-center justify-between gap-4 overflow-hidden">
        <input
          className="w-0 flex-auto bg-transparent text-2xl text-zinc-200 focus:outline-none"
          type="text"
          placeholder="0.0"
          value={value}
          inputMode="decimal"
          autoComplete="off"
          autoCorrect="off"
          pattern="^[0-9]*[.,]?[0-9]*$"
          spellCheck="false"
          onChange={enforcer}
        />
        {showMax && (
          <button
            className="font-bold text-red-500"
            onClick={() => {
              if (convertToAssets) {
                onUserInput(formatBignumber(assets, 6));
              } else {
                currencyBalance && onUserInput(currencyBalance.formatted);
              }
            }}
          >
            MAX
          </button>
        )}
        <div className="flex items-center gap-1.5 rounded-full bg-zinc-700 bg-opacity-60 px-2 py-1">
          <img src={USDC} height={26} width={26} alt="USDC" loading="eager" />
          <div>USDC</div>
        </div>
      </div>
    </div>
  );
}
