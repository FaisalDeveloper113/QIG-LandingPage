// components/CartSummaryModal.js
import React from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Divider } from '@mui/material';

const CartSummaryModal = ({ open, onClose, cartItems }) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      
    >
      <Box 
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          bgcolor: '#1C1C1C',
          borderRadius:'5px',
          boxShadow: 24,
          p: 4,
          minWidth: 300,
          maxWidth: 400,
        }}
      >
        <Typography id="modal-title" variant="h6" component="h2">
          Cart Summary
        </Typography>
        <Divider className="bg-gray-600" />
        {cartItems.map((item, index) => (
          <Typography key={index} variant="body2">
            {item.name} - {item.quantity}
          </Typography>
        ))}
        <Button onClick={onClose} color="primary">
          Close
        </Button>
      </Box>
    </Modal>
  );
};

export default CartSummaryModal;
