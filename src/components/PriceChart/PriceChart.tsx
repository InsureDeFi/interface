import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js';
import type { ChartData, ChartOptions } from 'chart.js';
import React from 'react';
import { Line } from 'react-chartjs-2';

import { usePriceData } from '@hooks/usePriceData';
import { formatCurrency } from '@coingecko/cryptoformat';

type Props = {
  asset: string;
};

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const options: ChartOptions<'line'> = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      callbacks: {
        label: (context) => {
          let label: string = context.dataset.label || '';

          if (label) {
            label += ': ';
          }
          if (context.parsed.y !== null) {
            label += formatCurrency(context.parsed.y, 'USD', 'en');
          }
          return label;
        },
      },
    },
  },
  elements: {
    point: {
      radius: 0,
    },
    line: {
      fill: '#fff',
    },
  },
  interaction: {
    intersect: false,
  },
  scales: {
    yAxes: {
      display: false,
    },
    xAxes: {
      display: false,
    },
  },
};

export default function PriceChart({ asset }: Props) {
  const { historicPriceData, priceData } = usePriceData(asset);

  const data: ChartData<'line'> = {
    labels: historicPriceData?.labels,
    datasets: [
      {
        data: historicPriceData?.dataset || [],
        borderColor: priceData ? (priceData.dayChange > 0 ? '#54CD60' : '#D15050') : '#fff',
      },
    ],
  };

  function formatDayChange(dayChange: number) {
    return new Intl.NumberFormat('en-US', { signDisplay: 'exceptZero', maximumFractionDigits: 2 }).format(dayChange);
  }

  return (
    <div className="px-4 pt-3">
      {priceData && historicPriceData ? (
        <div className="mb-2">
          <span className="text-2xl font-medium">{formatCurrency(priceData.price, 'USD', 'en')}</span>
          <span
            className={`${
              priceData.dayChange > 0 ? 'text-[#54CD60]' : 'text-[#D15050]'
            } flex items-center text-sm font-medium`}
          >
            {formatDayChange(priceData.dayChange)}% in last 24h
          </span>
        </div>
      ) : (
        <div className="mb-2 animate-pulse">
          <div className="mt-1.5 mb-2 block h-6 w-40 rounded-sm bg-zinc-700"></div>
          <div className="h-3 w-32 rounded-sm bg-zinc-700"></div>
        </div>
      )}
      {historicPriceData ? (
        <Line options={options} data={data} />
      ) : (
        <div className="aspect-[2/1] w-full animate-pulse rounded-sm bg-zinc-700"></div>
      )}
    </div>
  );
}
