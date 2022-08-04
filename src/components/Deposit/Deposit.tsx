import { Tab } from '@headlessui/react';
import React, { useState } from 'react';
import { useNetwork } from 'wagmi';

import { useApproval } from '@hooks/useApproval';
import { useDepositCallback, UseDepositCallbackState } from '@hooks/useDepositCallback';
import { stringToBignumber } from '@utils/helper';
import { getPoolAddress, getUSDC } from '@utils/networksConfig';
import CurrencyInput from '@components/CurrencyInput/CurrencyInput';
import TransactionModal from '@components/Modal/TransactionModal';

export default function Deposit(): JSX.Element {
  const [supplyAmount, setSupplyAmount] = useState<string>('');

  const { chain } = useNetwork();
  const { state, label, calldata } = useDepositCallback(supplyAmount);
  const USDC = getUSDC(chain);
  const { approvalNeeded, approve } = useApproval(
    USDC,
    getPoolAddress(chain),
    stringToBignumber(supplyAmount, USDC.decimals)
  );

  return (
    <Tab.Panel>
      <div className="my-4">
        <CurrencyInput currency={USDC} value={supplyAmount} onUserInput={setSupplyAmount} />
      </div>
      <TransactionModal
        data={{
          title: 'Add liquidity',
          desc: `Supply ${supplyAmount} USDC`,
          label,
          approvalNeeded,
          approve,
          isValid: state === UseDepositCallbackState.VALID,
          calldata,
          resetInput: setSupplyAmount,
        }}
      />
    </Tab.Panel>
  );
}
