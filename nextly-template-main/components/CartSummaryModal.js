// components/CartSummaryModal.js
import React from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useState, useEffect } from 'react';
import { Divider, Tab } from '@mui/material';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';


const CartSummaryModal = ({ open, onClose, cartItems, removeFromCart }) => {


  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  if (!cartItems) {
    return <p>Loading...</p>; // or some other fallback content
  }
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
          borderRadius: '5px',
          boxShadow: 24,
          p: 4,
          minWidth: 400,
          maxWidth: 500,
        }}
      >
        <Typography id="modal-title" variant="h6" component="h2">
          Cart Summary
        </Typography>
        <Divider className="bg-gray-600" />

        {cartItems.length > 0 ? (
          cartItems.map((item, index) => (
            // Check if the brand property is not empty before rendering
            item.brand && item.brand.name ? (
              <Typography className='my-4 flex justify-between' key={index} variant="body2">
                
                <span>
                <DeleteForeverRoundedIcon onClick={() => removeFromCart(item)} className='mr-2 hover:text-red-800 cursor-pointer text-red-600' />
                <span>1 x {item.brand.name}</span>
                </span>
                <span>${item.price}</span>
                
              </Typography>
            ) : null
          ))
        ) : (
          <Typography variant="body2">Your cart is empty.</Typography>
        )}
        <Divider className="bg-gray-600" />
        <Typography className='my-4 flex justify-between'>
          <strong>Total</strong>
          <strong>${calculateTotalPrice()}</strong>
        </Typography>
        <Button className='bg-blue-500 w-full' color="primary" variant='contained'>
          Go to checkout
        </Button>
      </Box>
    </Modal>
  );
};

export default CartSummaryModal;
