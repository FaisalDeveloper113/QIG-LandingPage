import React, { useState } from 'react';
import Link from "next/link";
import ThemeChanger from "./DarkSwitch";
import Image from "next/image";
import { Disclosure } from "@headlessui/react";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Menu } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import logoDark from '../images/nav-dark-logo.png';
import logoLight from '../images/nav-light-logo.png';

import { useTheme } from 'next-themes';

const Navbar = () => {
  const navigation = ["Product", "Service", "Contact", "Blog"];
  const [open, setOpen] = React.useState(false);


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleMouseEnter = () => {
    setShowDropdown(true);

    
  };

  const handleMouseLeave = () => {
    setShowDropdown(false);
    setSelectedItem(null);
  };

  const serviceDropdownOptions = [
    { id: 1, label: 'Option 1' },
    { id: 2, label: 'Option 2' },
    { id: 3, label: 'Option 3' },
  ];

  return (
    <div className="w-full">
      <nav className="container relative flex flex-wrap items-center justify-between mx-auto lg:justify-between xl:px-0">
        {/* Logo */}
        <Disclosure>
          {({ open }) => (
            <>
              <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
                <Link href="/">
                  <span className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100">
                    <span>

                      <Image
                        style={{ position: 'absolute' }}
                        src={logoDark}
                        alt="q"
                        width="250"
                        height="150"
                        className="dark:hidden"
                      />
                      <Image

                        src={logoLight}
                        alt="q"
                        width="250"
                        height="150"
                        className=""
                      />
                    </span>
                    {/* <span>Quant Investments Group</span> */}
                  </span>
                </Link>

                <Disclosure.Button
                  aria-label="Toggle Menu"
                  className="px-2 py-1 ml-auto text-gray-500 rounded-md lg:hidden hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700"
                >
                  <svg
                    className="w-6 h-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    {open && (
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                      />
                    )}
                    {!open && (
                      <path
                        fillRule="evenodd"
                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                      />
                    )}
                  </svg>
                </Disclosure.Button>

                <Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden">
                  <>
                    {navigation.map((item, index) => (
                      <Link
                        key={index}
                        href={
                          item.toLowerCase() === "product"
                            ? "/product"
                            //: item.toLowerCase() === "service"
                            //? "/service" 
                            : item.toLowerCase() === "contact"
                              ? "/contact"
                              : "/"
                        }
                        className="w-full px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-none"
                      >
                        {item}
                      </Link>
                    ))}
                    <Link
                      href="https://qig-dashboard-frontend.vercel.app/login"
                      className="w-full px-6 py-2 mt-3 text-center text-white bg-indigo-600 rounded-md lg:ml-5"
                    >
                      Admin Login
                    </Link>
                  </>
                </Disclosure.Panel>
              </div>
            </>
          )}
        </Disclosure>

        {/* menu */}
        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {navigation.map((menu, index) => (
              <li className="mr-3 nav__item" key={index}
                onMouseEnter={menu.toLowerCase() === 'service' ? handleMouseEnter : null}
                onMouseLeave={menu.toLowerCase() === 'service' ? handleMouseLeave : null}>
                <Link
                  href={
                    menu.toLowerCase() === "product"
                      ? "/product"
                      //: menu.toLowerCase() === "service"
                      //? "/service" // Update the href for the "Service" menu item
                      : menu.toLowerCase() === "contact"
                        ? "/contact"
                        : "/"
                  }
                  className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800"
                >
                  {menu}{menu.toLowerCase() === 'service' && <ArrowDropDownIcon />}
                </Link>
                {showDropdown && menu.toLowerCase() == 'service' && (

                  <div className="dropdown"
                    style={{
                      position: 'absolute',
                      backgroundColor: 'white',
                      color: 'black',
                      padding: '20px',
                      borderRadius: '5px'

                    }}>

                    <ul className="" style={{ textAlign: 'left', cursor: 'pointer' }}>

                      <li className='hover:text-blue-700' style={{ padding: '10px' }}><Link href='/mt4service'>MetaTrader 4</Link></li>
                      <li className='hover:text-blue-700' style={{ padding: '10px' }}><Link href='/mt5service'>MetaTrader 5</Link></li>
                      <li className='hover:text-blue-700' style={{ padding: '10px' }}><Link href='/tradingViewService'>TradingView</Link></li>
                    </ul>

                  </div>

                )}
              </li>
            ))}

          </ul>
        </div>

        <div className="hidden mr-3 space-x-4 lg:flex nav__item">
          <Link
            href="https://qig-dashboard-frontend.vercel.app/login"
            className="px-6 py-2 text-white bg-indigo-600 rounded-md md:ml-5"
          >
            Admin Login
          </Link>

          <ThemeChanger />
        </div>

      </nav>
    </div>
  );
};

export default Navbar;
