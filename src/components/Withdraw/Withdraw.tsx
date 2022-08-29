import { Tab } from '@headlessui/react';
import React, { useState } from 'react';
import { useContractRead, useNetwork } from 'wagmi';

import { useWithdrawCallback, UseWithdrawCallbackState } from '@hooks/useWithdrawCallback';
import { getPoolAddress, getRINS } from '@utils/networksConfig';
import CurrencyInput from '@components/CurrencyInput/CurrencyInput';
import TransactionModal from '@components/Modal/TransactionModal';
import RiskPoolABI from 'assets/abi/RiskPool.json';

export default function Withdraw(): JSX.Element {
  const [removeAmount, setRemoveAmount] = useState<string>('');

  const { chain } = useNetwork();
  const { state, label, calldata } = useWithdrawCallback(removeAmount);

  const { data: removeAmountUsd } = useContractRead({
    addressOrName: getPoolAddress(chain),
    contractInterface: RiskPoolABI,
    functionName: 'convertToAssets',
    args: removeAmount,
    enabled: !!removeAmount,
  });

  return (
    <Tab.Panel>
      <div className="my-4">
        <CurrencyInput currency={getRINS(chain)} value={removeAmount} onUserInput={setRemoveAmount} />
      </div>
      <TransactionModal
        data={{
          title: 'Remove liquidity',
          desc: `Withdraw ~${removeAmountUsd} USDC`,
          label,
          approvalNeeded: false,
          isValid: state === UseWithdrawCallbackState.VALID,
          calldata,
          resetInput: setRemoveAmount,
        }}
      />
    </Tab.Panel>
  );
}
