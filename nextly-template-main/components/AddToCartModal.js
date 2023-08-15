// components/ModalWithRadioButtons.js
import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const AddToCartModal = ({ open, onClose }) => {
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

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
                    Select an Option
                </Typography>
                <RadioGroup
                    aria-label="options"
                    name="options"
                    value={selectedOption}
                    onChange={handleOptionChange}
                >
                    <div style={{ width: '100%' }} className='flex flex-col gap-2'>
                        <div className={`flex-1 p-4 ${selectedOption === 'option1' ? 'bg-trueGray-800' : ''
                            }`}>
                            <FormControlLabel
                                value="option1"
                                control={<Radio />}
                                label="Option 1"
                            />
                            <Typography variant="body2">
                                Description for Option 1.
                            </Typography>
                        </div>
                        <div  className={` flex-1 p-4 ${selectedOption === 'option2' ? 'bg-trueGray-800' : ''
                            }`}>
                            <FormControlLabel
                                value="option2"
                                control={<Radio />}
                                label="Option 2"
                            />
                            <Typography variant="body2">
                                Description for Option 2.
                            </Typography>
                        </div>
                    </div>
                </RadioGroup>
                <div className='flex flex-row gap-4 mt-6'>
                    <Button className='flex-1' onClick={onClose} color="primary">
                        Close
                    </Button>
                    <Button className='flex-1 bg-blue-500' color="primary" variant='contained'>
                        Add
                    </Button>

                </div>

            </Box>
        </Modal>
    );
};

export default AddToCartModal;
