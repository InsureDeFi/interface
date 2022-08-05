import React from 'react';
import { Circle } from 'react-feather';
import { useBlockNumber } from 'wagmi';

export default function Polling() {
  const { data: latestBlock, isError, isIdle } = useBlockNumber({ watch: true });
  return (
    <div className="fixed bottom-4 right-4 hidden select-none items-center justify-center gap-1 md:flex">
      <div
        className={`text-xs font-medium ${isIdle ? 'text-yellow-500' : isError ? 'text-red-500' : 'text-green-500'}`}
      >
        {latestBlock}
      </div>
      <Circle size={8} fill={`${isIdle ? '#EAB308' : isError ? '#EF4444' : '#23C45E'}`} strokeWidth={0} />
    </div>
  );
}
