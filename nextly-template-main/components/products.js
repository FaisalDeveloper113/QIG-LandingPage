import React, { useEffect,useState } from "react";

import Divider from '@mui/material/Divider';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
const axios = require('axios');

const ProductCard = (props) => {
    const { image, description, brand, formattedPrice } = props;
    const [showPayPalButtons, setShowPayPalButtons] = useState(false);

    useEffect(() => {
        const loadPayPalSDK = async () => {
          const script = document.createElement('script');
          script.src = 'https://www.paypal.com/sdk/js?client-id=ATP98nmGlWaVc94673pYwwecXCWE6um7pSH3wey6NaONBrLZ6P3w9hl-FTHT293NxZeDU43fEIT-cFZy';
          script.async = true;
          
          const loadScript = new Promise((resolve) => {
            script.onload = resolve;
          });
      
          document.body.appendChild(script);
          await loadScript;
          
          // PayPal SDK has loaded, render the PayPal Smart Payment Buttons
          console.log("Setting is true")
          setShowPayPalButtons(true);
        };
      
        loadPayPalSDK();
      }, []);

    const createOrder = async () => {
        const url = 'http://localhost:8000/create-paypal-order'; // Replace with your desired endpoint
        const data = {
            key1: 'value1',
            key2: 'value2',
            // Add more data as needed for your API endpoint
        };

        try {
            const response = await axios.post(url, data);
            console.log('Post request successful:', response.data.id)
            setShowPayPalButtons(true);
            return response.data.id;
            // Do something with the response data
        } catch (error) {
            console.error('Error making POST request:', error.message);
            // Handle the error
        }
    }

    const onApprove = (data, actions) => {
        // Handle the approved payment here, e.g., show a success message
        console.log('Payment approved:', data);
    };

    const onCancel = (data) => {
        // Handle the payment cancellation here, e.g., show a cancellation message
        console.log('Payment cancelled:', data);
    };

    const onError = (err) => {
        // Handle payment errors here, e.g., show an error message
        console.error('Payment error:', err);
    };

    const handleAddToCart = () => {
        createOrder().then((orderId) => {
            // Render the PayPal Smart Payment Buttons dynamically
            if (window.paypal) {
                window.paypal
                    .Buttons({
                        createOrder: (data, actions) => {
                            return orderId;
                        },
                        onApprove: onApprove,
                        onCancel: onCancel,
                        onError: onError
                    })
                    .render('#paypal-button-container');
            }
        });
    };

    return (
        <>
            <div className="flex flex-col md:flex-row z-20 relative m-4 p-4 shadow-xl rounded-lg bg-trueGray-100 dark:bg-trueGray-800">
                <div className="flex-1">
                    <img
                        style={{
                            width: "100%",
                            height: "100%",
                        }}
                        src={image}
                    />
                </div>
                <div className="flex-1 p-4">

                    <div className="flex-1 p-4 flex flex-row text-left">
                        <p className="sm:text-4xl text-xl font-weight-bold ">{brand.name}</p>
                    </div>
                    <div className="flex-1 p-4 flex flex-row text-left">
                        <p className="flex-1 text-gray-500">Price</p>
                    </div>
                    <Divider className="bg-gray-600 ml-4" />
                    <div className="flex-1 p-4 flex flex-row text-left">
                        <p className="flex-1 text-green-600 text-2xl" >{formattedPrice}</p>
                    </div>
                    <div className="flex-1 p-4 flex flex-row text-left">
                        <p className="flex-1 text-gray-500">Description</p>
                    </div>
                    <Divider className="bg-gray-600 ml-4" />
                    <div className="flex-1 p-4 flex flex-row text-left">
                        <p >{description}</p>
                    </div>
                    <div className="flex-1 p-4 flex flex-row-reverse">
                        <button onClick={handleAddToCart} className="bg-blue-500 text-white py-2 px-4 rounded-3xl"><ShoppingBasketIcon className="mr-2" />  Add to Cart</button>
                    </div>
                </div>
            </div>
            {showPayPalButtons && <div id="paypal-button-container"></div>}
        </>
    );
};

export default ProductCard;
