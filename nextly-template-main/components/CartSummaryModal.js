// components/CartSummaryModal.js
import React from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useState, useEffect } from 'react';
import { Divider, Tab } from '@mui/material';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import CloseIcon from "@mui/icons-material/Close";
const axios = require("axios");

const backend_url = "https://qig-dashboard.vercel.app";
const client_id =
  "ATP98nmGlWaVc94673pYwwecXCWE6um7pSH3wey6NaONBrLZ6P3w9hl-FTHT293NxZeDU43fEIT-cFZy";

const CartSummaryModal = ({ open, onClose, cartItems, removeFromCart }) => {

  if (!open) {
    return null;
  }
  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
 
  const handleModalClose = () => {
    setIsModalOpen(false);
   
  };
  useEffect(() => {
    if(isModalOpen){
    const loadPayPalSDK = async () => {
      const script = document.createElement("script");
      script.src = `https://www.paypal.com/sdk/js?client-id=${client_id}`;
      script.async = true;

      const loadScript = new Promise((resolve) => {
        script.onload = resolve;
      });

      document.body.appendChild(script);
      await loadScript;
    };

    loadPayPalSDK();
  }
  }, [isModalOpen]);

  const createOrder = async (totalPrice) => {
    const url = `${backend_url}/create-paypal-order`; // Replace with your desired endpoint
    console.log("URL : ", url);
    const data = {
      id: 1,
      name: "All",
      price: totalPrice,
      // Add more data as needed for your API endpoint
    };
    //console.log("Create paypal order json: ",productInfo);
    try {
      const response = await axios.post(url, data);
      console.log(
        "Post request successful create-paypal-order:",
        response.data.id
      );
      //setShowPayPalButtons(true);
      return response.data.id;
      // Do something with the response data
    } catch (error) {
      console.error("Error making POST create-paypal-order::", error.message);
      console.log("URL : ", url);
      // Handle the error
    }
  };

  const onApprove = (data, actions) => {
    // Handle the approved payment here, e.g., show a success message
    console.log("Payment approved:", data);
  };

  const onCancel = (data) => {
    // Handle the payment cancellation here, e.g., show a cancellation message
    console.log("Payment cancelled:", data);
  };

  const onError = (err) => {
    // Handle payment errors here, e.g., show an error message
    console.error("Payment error:", err);
  };

  useEffect(() => {
    if (isModalOpen) {
      // Apply styles to the body element to prevent scrolling on the main window
      document.body.style.overflow = "hidden";
      document.body.style.position = "";
      document.body.style.width = "100%";
    } else {
      // Reset the styles on the body element when the modal is closed
      document.body.style.overflow = "auto";
      document.body.style.position = "static";
      document.body.style.width = "auto";
    }
  }, [isModalOpen]);
  const handleCardBuyClick = async (totalPrice) => {
    setIsModalOpen(true);
    const orderId = await createOrder(totalPrice);
    if (window.paypal) {
      window.paypal
        .Buttons({
          createOrder: () => orderId,
          onApprove: onApprove,
          onCancel: onCancel,
          onError: onError,
        })
        .render("#paypal-button-container");
    }
    
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
        {isModalOpen && (
            <div
              className="paypal-modal"
              id="paypal-button-container"
              style={{
                display: "flex",
                position: "fixed",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: "9999",
                width: "70%",
                maxWidth: "800px",
                backgroundColor: "white",
                color: "black",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                padding: "40px",
                placeItems: "center",
              }}
            >
              
              <span
                className="absolute right-3 top-3 cursor-pointer font-weight-bold"
                onClick={handleModalClose}
              >
                <CloseIcon />
              </span>
            </div>
          )}
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
        <Button onClick={() => handleCardBuyClick(calculateTotalPrice())} className='bg-blue-500 w-full' color="primary" variant='contained'>
          Go to checkout
        </Button>
      </Box>
    </Modal>
  );
};

export default CartSummaryModal;
