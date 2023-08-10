import React, { useEffect, useState } from "react";
import Divider from '@mui/material/Divider';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

const axios = require('axios');

const ProductCard = (props) => {
    const { image, description, brand, formattedPrice, onBuyClick  } = props;   
    return (
        <>
            <div className="md:max-w-6xl  flex flex-col md:flex-row z-20 relative m-4 p-4 shadow-xl rounded-lg bg-trueGray-100 dark:bg-trueGray-800">
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
                        <button onClick={onBuyClick} className="bg-blue-500 text-white py-2 px-4 rounded-3xl"><ShoppingBasketIcon className="mr-2" />  Buy Now</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductCard;
