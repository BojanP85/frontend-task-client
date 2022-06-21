import Modal from "@mui/material/Modal";

import { CustomModalProps } from "../types";

const CustomModal = ({ children, open, handleClose }: CustomModalProps) => {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        disableAutoFocus
      >
        {children}
      </Modal>
    </div>
  );
};

export default CustomModal;
