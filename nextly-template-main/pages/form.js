import Head from "next/head";
import React, { useState } from "react";
import Image from "next/image";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
import ReCAPTCHA from "react-google-recaptcha";


const Form = () => {
    const router = useRouter();
    const [statusMessage, setStatusMessage] = useState("");
    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        telephone: "",
        email: "",
        message: ""
    });

    // Initialize EmailJS with your user ID
    emailjs.init("wj6ciwm-dAJIigD02"); // Replace 'user_your_user_id' with your actual user ID

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleRecaptchaChange = (value) => {
        setRecaptchaValue(value);
    };


    const handleSubmit = async (event) => {
        event.preventDefault();

        const formElement = document.getElementById("myForm");

        const formData = new FormData(formElement);
        const templateParams = {
            from_name: formData.get('first_name') + ' ' + formData.get('last_name'),
            from_email: formData.get('email'),
            from_telephone: formData.get('telephone'),
            message: formData.get('message'),
            // Add other form fields here
        };

        try {
            const response = await emailjs.send('service_telnnmt', 'template_s6r10fd', templateParams);
            console.log('Email sent successfully:', response);
            setStatusMessage("Email sent successfully!");
            toast.success("Email sent successfully!");

            // Delay for 3 seconds before routing to the success page
            setTimeout(() => {
                router.push("/product");
            }, 3000);
        } catch (error) {
            console.log('Email sending failed:', error);
            setStatusMessage("Email sending failed. Please try again.");
            toast.error("Email sending failed. Please try again.");
        }


    };

    return (
        <>
            <Head>
                <title>Form</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="Algo Trading Experts" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="w-screen h-screen bg-cover bg-right" style={{ backgroundImage: "url('/img/web-banner.jpg')", backgroundSize: "cover" }}>
                <div className="flex flex-col items-center justify-center ">
                    <form id="myForm" className="flex flex-col bg-yellow-400 p-5 md:p-10 mx-2 md:mx-10 rounded-lg mt-[40%] md:mt-10  w-[90%] md:w-1/3">

                        <input type="text" id="first-name" name="first_name" placeholder="Enter your first name" required className="flex-grow mr-2 px-4 py-2 bg-gray-100 rounded-lg mb-4" />

                        <input type="text" id="last-name" name="last_name" placeholder="Enter your last name" required className="flex-grow mr-2 px-4 py-2 bg-gray-100 rounded-lg mb-4" />

                        <input type="tel" id="telephone" name="telephone" placeholder="Phone Number (e.g., +123456789)" required className="flex-grow mr-2 px-4 py-2 bg-gray-100 rounded-lg mb-4" />
                        <input type="email" id="email" name="email" placeholder="Enter your Email" required className="flex-grow mr-2 px-4 py-2 bg-gray-100 rounded-lg mb-4" />
                        <textarea id="message" name="message" placeholder="Leave us a message" required className="flex-grow mr-2 px-4 py-2 bg-gray-100 rounded-lg mb-4 h-40" />

                        <div className="flex justify-center mb-4">
                            <ReCAPTCHA
                                sitekey="6Lcoi9AnAAAAAJG2Zfs7vsmv9ohoeqNs30HyJlBV" // Replace with your reCAPTCHA site key
                                onChange={handleRecaptchaChange}
                            />
                        </div>
                        <div className="flex justify-center">
                            <button
                                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 rounded w-40 md:w-60 h-10"
                                type="submit"
                                onClick={handleSubmit}
                            >
                                Submit
                            </button>
                        </div>

                    </form>
                </div>
            </div>
            <ToastContainer />

        </>
    );
}

export default Form;