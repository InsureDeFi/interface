import { getDefaultChainId } from '@utils/networksConfig';
import React from 'react';
import { Box } from 'react-feather';
import { useBlockNumber, useNetwork } from 'wagmi';

export default function Polling() {
  const { chain } = useNetwork();
  const defaultChainId = getDefaultChainId();
  const activeChainId = (chain?.unsupported ? defaultChainId : chain?.id) || defaultChainId;
  const { data: latestBlock, isError, isIdle } = useBlockNumber({ chainId: activeChainId, watch: true });
  return (
    <div className="fixed bottom-4 right-4 hidden select-none items-center justify-center gap-1.5 md:flex">
      <div className={`text-sm text-zinc-200`}>{latestBlock}</div>
      <Box size={14} color={`${isIdle ? '#EAB308' : isError ? '#EF4444' : '#23C45E'}`} strokeWidth={3} />
    </div>
  );
}
