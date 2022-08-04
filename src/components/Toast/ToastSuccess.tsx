import { chainToExplorerUrl } from '@utils/networksConfig';
import React from 'react';
import { ExternalLink } from 'react-feather';
import { Chain } from 'wagmi';

type Props = {
  title: string;
  txHash: string;
  chain?: Chain & { unsupported?: boolean | undefined };
};

export default function ToastSuccess({ title, txHash, chain }: Props) {
  return (
    <div className="flex flex-col">
      <span className="font-bold">Transaction successful</span>
      <span className="font-normal">{title}</span>
      <a
        href={`${chainToExplorerUrl(chain)}/tx/${txHash}`}
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-2 font-bold"
        style={{ color: 'rgb(33, 114, 229)' }}
      >
        <span>View on explorer</span>
        <ExternalLink size={18} strokeWidth={2} />
      </a>
    </div>
  );
}
