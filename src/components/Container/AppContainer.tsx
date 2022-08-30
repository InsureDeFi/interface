import CloseButton from '@components/Button/CloseButton';
import Header from '@components/Header/Header';
import Navbar from '@components/Navbar/Navbar';
import Polling from '@components/Polling/Polling';
import React from 'react';
import { ToastContainer } from 'react-toastify';

type Props = {
  children: React.ReactNode;
};

export default function AppContainer({ children }: Props) {
  return (
    <div
      className="min-h-screen"
      style={{
        background:
          'radial-gradient(150.6% 98.22% at 48.06% 0%, rgba(29, 78, 216, 0.6) 0%, rgba(200, 168, 255, 0) 100%), rgba(31, 33, 40, 0.85)',
        backgroundBlendMode: 'overlay, normal',
      }}
    >
      <Header />
      <div className="container mx-auto px-2 lg:px-4">
        <div className="flex justify-center pt-4 pb-20 md:pt-16 md:pb-0">{children}</div>
        <ToastContainer
          className="!w-[400px]"
          closeButton={CloseButton}
          theme="dark"
          autoClose={7000}
          pauseOnFocusLoss={false}
          closeOnClick={false}
          newestOnTop
        />
      </div>
      <div className="fixed bottom-4 block w-full lg:hidden">
        <Navbar />
      </div>
      <Polling />
    </div>
  );
}
