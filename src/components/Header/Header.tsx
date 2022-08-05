import Navbar from '@components/Navbar/Navbar';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import Insure from '@images/insure.svg';

export default function Header(): JSX.Element {
  return (
    <div className="flex justify-between px-2 py-4 md:px-20">
      <img
        className="pointer-events-none select-none"
        src={Insure}
        width={42}
        height={42}
        alt="Insure"
        loading="eager"
      />
      <div className="absolute left-1/2 hidden -translate-x-1/2 lg:block">
        <Navbar />
      </div>
      <ConnectButton showBalance={false} />
    </div>
  );
}
