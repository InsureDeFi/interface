import React from 'react';
import { X } from 'react-feather';

type Props = {
  closeToast: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
};

export default function CloseButton({ closeToast }: Props) {
  return (
    <div onClick={closeToast}>
      <X className="h-5 text-gray-200" />
    </div>
  );
}
