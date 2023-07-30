import React from "react";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const ProductCard = (props) => {
    const { image, description, brand, formattedPrice } = props;

    return (
        <a
            style={{
                position: "relative",
                alignItems: "center",
                textAlign: "center",
                width: "30rem",
                height: "20rem", 
                borderRadius: "10px",
                overflow: "hidden",
                boxShadow: "2px 2px 5px 0px rgba(0, 64, 128, 0.1)",
            }}
            href="#dolce-gabbana-cropped"
        >
            <img
                style={{
                    width: "100%",
                    height: "80%",
                }}
                src={image}
            />
            <p style={{ margin: "0.2rem 0", fontSize: "1rem", fontWeight: "bold", textTransform: "uppercase" ,color:"text.secondary" }}>{brand.name}</p>
            <p style={{ fontWeight: "normal" }}>{description}</p>
            <p style={{ fontWeight: "bold" }}>{formattedPrice}</p>
            <span style={{ position: "absolute", top: "10px", right: "10px", borderRadius: "50%", height: "40px", width: "40px", border: "none", backgroundColor: "white", padding: "12px 10px 10px", boxShadow: "2px 2px 5px 0px rgba(0, 64, 128, 0.1)" }}>
                <AddShoppingCartIcon style={{ color: "blue" }} />
            </span>
        </a>
    );
};

export default ProductCard;
