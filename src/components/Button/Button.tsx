import React from 'react';

type Props = {
  disabled?: boolean;
  onClick?: () => void;
  secondary?: boolean;
  children: string;
};

export default function Button({ disabled = false, onClick, secondary = false, children }: Props) {
  return (
    <button
      type="button"
      className={
        secondary
          ? 'w-full cursor-pointer rounded-2xl border-2 border-blue-700 px-5 py-2.5 font-medium text-blue-600 hover:border-blue-800 focus:outline-none disabled:cursor-not-allowed disabled:border-zinc-600 disabled:text-zinc-300'
          : 'w-full cursor-pointer rounded-2xl bg-blue-700 px-5 py-3 font-medium text-zinc-200 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-300 disabled:cursor-not-allowed disabled:bg-zinc-600 disabled:text-zinc-300'
      }
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
