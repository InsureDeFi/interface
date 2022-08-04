import { AvatarComponent } from '@rainbow-me/rainbowkit';
import Blockies from 'react-blockies';

const Avatar: AvatarComponent = ({ address, ensImage, size }) => {
  return ensImage ? (
    <img src={ensImage} width={size} height={size} style={{ borderRadius: 999 }} alt="" />
  ) : (
    <Blockies seed={address} size={size} />
  );
};

export default Avatar;
