import React from 'react';
import { SupportedAssets } from '@constants/tokens';
import { usePolicyData } from '@hooks/usePolicyData';
import { formatCurrency } from '@utils/helper';

export default function PolicyTableBody() {
  const { ownedPolicies } = usePolicyData();
  return (
    <tbody className="text-sm md:text-lg">
      {ownedPolicies?.map(
        ({ id, asset: { symbol }, assetPrice, endTime, payOutAmount, premium, startTime, utilized }) => {
          const isActive = new Date(Number(endTime) * 1000) > new Date();
          return (
            <tr className="h-12 border-b border-gray-700 bg-zinc-900" key={id}>
              <td className="whitespace-nowrap pl-2 text-zinc-200 md:pl-10">
                <div className="flex items-center justify-start">
                  <img src={SupportedAssets[symbol].logo} height={24} width={24} loading="eager" alt={symbol} />
                  <span className="mx-2">{SupportedAssets[symbol].name}</span>
                </div>
              </td>
              <td className="hidden whitespace-nowrap text-zinc-200 lg:table-cell">
                {new Date(Number(startTime) * 1000).toLocaleDateString()}
              </td>
              <td className="whitespace-nowrap text-zinc-200">
                {new Date(Number(endTime) * 1000).toLocaleDateString()}
              </td>
              <td className="hidden whitespace-nowrap text-zinc-200 lg:table-cell">
                {formatCurrency(assetPrice, { notation: 'standard' })}
              </td>
              <td className="hidden whitespace-nowrap text-zinc-200 lg:table-cell">
                {formatCurrency(premium, { notation: 'standard' })}
              </td>
              <td className="whitespace-nowrap text-zinc-200">{formatCurrency(payOutAmount)}</td>
              <td className="whitespace-nowrap text-zinc-200">
                <span
                  className={`rounded-full px-2 py-1 text-xs font-bold uppercase ${
                    utilized
                      ? 'bg-blue-100 text-blue-800'
                      : isActive
                      ? 'bg-green-100 text-green-800'
                      : 'bg-red-100 text-red-800'
                  }`}
                >
                  {utilized ? 'Utilized' : isActive ? 'Active' : 'Expired'}
                </span>
              </td>
            </tr>
          );
        }
      )}
    </tbody>
  );
}
