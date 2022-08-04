import React, { useState } from 'react';

type Props = {
  value: number;
  onUserClick: React.Dispatch<React.SetStateAction<number>>;
};

const durations = [
  { label: '1 Month', value: 30 },
  { label: '6 Month', value: 180 },
  { label: '1 Year', value: 365 },
];

export default function Duration({ value, onUserClick }: Props): JSX.Element {
  const [activeBubble, setActiveBubble] = useState<number>(2);

  function handleOnChange(event: React.ChangeEvent<HTMLInputElement>) {
    onUserClick(Number(event.target.value));
    setActiveBubble(3);
  }

  return (
    <>
      <div className="flex items-center justify-between text-lg">
        <span>Duration</span>
        <span className="text-sm text-zinc-400">min 30days, max 365days</span>
      </div>
      <div className="mt-2 flex w-full flex-wrap items-center gap-2">
        {durations.map((duration, bubbleId) => (
          <button
            type="button"
            key={duration.value}
            className={`${
              activeBubble === bubbleId ? 'bg-blue-700' : 'bg-zinc-600 bg-opacity-60'
            } h-8 rounded-2xl px-4 transition-colors`}
            onClick={() => {
              onUserClick(duration.value);
              setActiveBubble(bubbleId);
            }}
          >
            {duration.label}
          </button>
        ))}
        <div>
          <label>
            <input
              type="number"
              value={value}
              onFocus={handleOnChange}
              onChange={handleOnChange}
              className={`h-8 w-16 rounded-2xl px-4 text-center outline-none ${
                activeBubble === 3 ? 'bg-blue-700 text-zinc-200' : 'bg-zinc-600 bg-opacity-60 text-gray-400'
              }`}
            />
            <span className="ml-2 inline-block">Days</span>
          </label>
        </div>
      </div>
    </>
  );
}
