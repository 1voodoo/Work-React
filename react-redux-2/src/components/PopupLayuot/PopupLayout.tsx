import { Dialog, DialogTitle } from '@mui/material';
import { FC } from 'react';

interface PopupLayoutProps {
  title: string;
  onClose: () => void;
}

const PopupLayout: FC<PopupLayoutProps> = ({ title, onClose, children }) => {
  return (
    <Dialog open onClose={onClose}>
      <DialogTitle>{title}</DialogTitle>
      <div>
        {children}
      </div>
    </Dialog>
  );
};

export default PopupLayout;