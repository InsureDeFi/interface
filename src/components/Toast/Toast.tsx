import { AlertTriangle, CheckCircle } from 'react-feather';
import { toast } from 'react-toastify';
import { Chain } from 'wagmi';
import ToastSuccess from './ToastSuccess';
import ToastError from './ToastError';

export function notifySuccess(title: string, txHash: string, chain?: Chain & { unsupported?: boolean | undefined }) {
  return toast.success(<ToastSuccess title={title} txHash={txHash} chain={chain} />, {
    icon: <CheckCircle color="#34D298" />,
    progressStyle: {
      backgroundColor: '#34D298',
      height: '2px',
    },
  });
}

export function notifyError(errMsg: string) {
  return toast.error(<ToastError errMsg={errMsg} />, {
    icon: <AlertTriangle color="#ef4444" />,
    progressStyle: {
      backgroundColor: '#ef4444',
      height: '2px',
    },
  });
}
