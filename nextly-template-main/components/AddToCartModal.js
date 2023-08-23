// components/ModalWithRadioButtons.js
import React, { useState, useEffect } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Divider, Tooltip } from '@mui/material';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import InfoIcon from '@mui/icons-material/Info';


const AddToCartModal = ({ open, onClose, productInfo }) => {
    const [selectedOption, setSelectedOption] = useState('');
    const [cartItems, setCartItems] = useState([]);

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };
    const [tooltipOpen, setTooltipOpen] = useState(false);

    const handleTooltipToggle = () => {
        setTooltipOpen(!tooltipOpen);
    };
    useEffect(() => {
       
        const storedCartItems = localStorage.getItem('QIGCartItems');
        if (storedCartItems) {
          setCartItems(JSON.parse(storedCartItems));
          
          
        }
      
        
      }, [open]);
    

    const addToCart = (product) => {
        const isProductInCart = cartItems.some((item) => item.brand.id === product.brand.id);

        // If the product is not in the cart, add it
        if (!isProductInCart) {
            if(selectedOption == 'gold'){
                product.price = product.price + product.gold;
            }
            const updatedCart = [...cartItems, product];
            setCartItems(updatedCart);
            localStorage.setItem('QIGCartItems', JSON.stringify(updatedCart));
            onClose();
            toast.success('Item added to cart', { position: toast.POSITION.BOTTOM_RIGHT });
        }
        else {
            toast.warn('Item already exist in cart', { position: toast.POSITION.BOTTOM_RIGHT });
        }

    };

    if (!productInfo || !productInfo.brand) {
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
                    width: '80%', // Adjust the width as needed
                    maxWidth: 400

                }}
            >
                <Typography id="modal-title" variant="h6" component="h2">
                    {productInfo.brand.name}
                </Typography>
                <Divider className="bg-gray-600 my-2" />
                <RadioGroup
                    aria-label="options"
                    name="options"
                    value={selectedOption}
                    onChange={handleOptionChange}
                >
                    <div style={{ width: '100%' }} className='flex flex-col gap-2'>
                        <div className={` border border-gray-300 rounded-md flex-1 p-4 ${selectedOption === 'silver' ? ' bg-gray-300 text-black' : ''
                            }`}>
                            <FormControlLabel
                                value="silver"
                                control={<Radio className=' text-white' />}
                                label="SILVER"
                            />
                            <Tooltip title=
                                {<React.Fragment>
                                    <Typography color="inherit">BASIC</Typography>
                                    {'Features:'}<br />
                                    {'RSI based Strategy, Cross below value, cross above value'}<br />
                                    {'TP @ Value'}<br />
                                    {'SL @ Value'}

                                </React.Fragment>}
                            ><InfoIcon /></Tooltip>
                            <Typography variant="body2">
                               <p className=' text-xl'>${productInfo.price}</p>
                            </Typography>
                        </div>
                        <div className={`border border-yellow-400 rounded-md flex-1 p-4 ${selectedOption === 'gold' ? 'bg-yellow-400 text-black' : ''
                            }`}>
                            <FormControlLabel
                                value="gold"
                                control={<Radio className=' text-white' />}
                                label="GOLD"
                            /><Tooltip title=
                                {<React.Fragment>
                                    <Typography color="inherit">+ EXPERT ORDER MANAGEMENT</Typography>
                                    Features:<br />
                                    3 pre-determined TP’s,<br />
                                    2 trailing SL’s<br />
                                    Regular SL or Optional “Risk Management” SL<br />
                                    % orders closed per trade<br />
                                    Time Filter
                                    Volume Filter<br />
                                    

                                </React.Fragment>}
                            ><InfoIcon /></Tooltip>
                            <Typography variant="body2">
                            <p className=' text-xl'>${productInfo.price} + ${productInfo.gold}</p> 
                            </Typography>
                        </div>
                    </div>
                </RadioGroup>
                <div className='flex flex-row gap-4 mt-6'>
                    <Button className='flex-1' onClick={onClose} color="primary">
                        Close
                    </Button>
                    <Button onClick={() => addToCart(productInfo)} className='flex-1 bg-blue-500' color="primary" variant='contained'>
                        Add
                    </Button>

                </div>

            </Box>
        </Modal>
    );
};

export default AddToCartModal;
