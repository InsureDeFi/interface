import { ConnectButton } from '@rainbow-me/rainbowkit';
import React, { ReactNode } from 'react';
import Button from './Button';

type Props = {
  children: ReactNode | JSX.Element;
};

export default function ConnectWalletButton({ children }: Props) {
  return (
    <ConnectButton.Custom>
      {({ account, chain, openChainModal, openConnectModal, mounted }) => {
        return (
          <div
            {...(!mounted && {
              'aria-hidden': true,
              style: {
                opacity: 0,
                pointerEvents: 'none',
                userSelect: 'none',
              },
            })}
          >
            {(() => {
              if (!mounted || !account || !chain) {
                return <Button onClick={openConnectModal}>Connect Wallet</Button>;
              }

              if (chain.unsupported) {
                return <Button onClick={openChainModal}>Switch Network</Button>;
              }

              return children;
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
}
