import React from 'react';

type Props = {
  errMsg: string;
};

export default function ToastError({ errMsg }: Props) {
  return (
    <div className="flex flex-col">
      <span className="font-bold">Transaction failed</span>
      <span className="font-normal">Transaction cannot succeed due to error: {errMsg}</span>
    </div>
  );
}
