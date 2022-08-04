import Navbar from '@components/Navbar/Navbar';
import { ConnectButton } from '@rainbow-me/rainbowkit';

export default function Header(): JSX.Element {
  return (
    <div className="flex justify-between px-2 py-4 md:px-20">
      <div className="flex items-center gap-2">
        <img
          className="pointer-events-none select-none"
          src="@images/insure.svg"
          width={38}
          height={38}
          alt="Insure"
          loading="eager"
        />
        <span className="hidden select-none text-4xl font-bold text-zinc-100 lg:block">Insure</span>
      </div>
      <div className="absolute left-1/2 hidden -translate-x-1/2 lg:block">
        <Navbar />
      </div>
      <ConnectButton showBalance={false} />
    </div>
  );
}
