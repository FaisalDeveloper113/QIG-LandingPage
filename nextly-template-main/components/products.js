import React from "react";

import Divider from '@mui/material/Divider';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

const ProductCard = (props) => {
    const { image, description, brand, formattedPrice } = props;

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
                    <Divider className = "bg-gray-600 ml-4"/>
                    <div className="flex-1 p-4 flex flex-row text-left">
                        <p className="flex-1 text-green-600 text-2xl" >{formattedPrice}</p>
                    </div>
                    <div className="flex-1 p-4 flex flex-row text-left">
                        <p className="flex-1 text-gray-500">Description</p>
                    </div>
                    <Divider className = "bg-gray-600 ml-4"/>
                    <div className="flex-1 p-4 flex flex-row text-left">
                        <p >{description}</p>
                    </div>
                    <div className="flex-1 p-4 flex flex-row-reverse">
                    <button className="bg-blue-500 text-white py-2 px-4 rounded-3xl"><ShoppingBasketIcon className="mr-2" />  Add to Cart</button>
                    </div>

                </div>
            </div>
        </>
        // <a
        //     style={{
        //         position: "relative",
        //         alignItems: "center",
        //         textAlign: "center",
        //         width: "30rem",
        //         height: "20rem", 
        //         borderRadius: "10px",
        //         overflow: "hidden",
        //         boxShadow: "2px 2px 5px 0px rgba(0, 64, 128, 0.1)",
        //     }}
        //     href="#dolce-gabbana-cropped"
        // >
        //     <img
        //         style={{
        //             width: "100%",
        //             height: "80%",
        //         }}
        //         src={image}
        //     />
        //     <p style={{ margin: "0.2rem 0", fontSize: "1rem", fontWeight: "bold", textTransform: "uppercase" ,color:"text.secondary" }}>{brand.name}</p>
        //     <p style={{ fontWeight: "normal" }}>{description}</p>
        //     <p style={{ fontWeight: "bold" }}>{formattedPrice}</p>
        //     <span style={{ position: "absolute", top: "10px", right: "10px", borderRadius: "50%", height: "40px", width: "40px", border: "none", backgroundColor: "white", padding: "12px 10px 10px", boxShadow: "2px 2px 5px 0px rgba(0, 64, 128, 0.1)" }}>
        //         <AddShoppingCartIcon style={{ color: "blue" }} />
        //     </span>
        // </a>
    );
};

export default ProductCard;
