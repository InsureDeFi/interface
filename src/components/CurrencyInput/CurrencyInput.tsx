import React from 'react';
import { useAccount, useBalance } from 'wagmi';

import { Token } from '@constants/tokens';

type Props = {
  label?: string;
  currency: Token;
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
  showBalance = true,
  value,
  onUserInput,
  showMax = true,
}: Props) {
  const { address } = useAccount();
  const { data: currencyBalance } = useBalance({
    addressOrName: address,
    token: currency.address,
    formatUnits: currency.decimals,
    watch: true,
    enabled: !!address,
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
          <div className="flex items-center gap-1">Balance: {currencyBalance.formatted}</div>
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
            onClick={() => currencyBalance && onUserInput(currencyBalance.formatted)}
          >
            MAX
          </button>
        )}
        <div className="flex items-center gap-1.5 rounded-full bg-zinc-700 bg-opacity-60 px-2 py-1">
          <img src={currency.logo} height={26} width={26} alt={currency.name} loading="eager" />
          <div>{currency.symbol}</div>
        </div>
      </div>
    </div>
  );
}
