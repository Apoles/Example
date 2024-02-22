import React from 'react';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button } from '@nextui-org/react';
import Image from 'next/image.js';
import Link from 'next/link';

const MyNavbar = () => {
  return (
    <footer className=' w-1/2 p-0  '>
      <div className='object-left-top p-6  flex flex-row items-start  bg-white w-screen '>
        <Link href='/' className='flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse'>
          <Image className='' src={`/logo.png`} alt='logo' width='252' height='50' />
        </Link>
      </div>
    </footer>
  );
};

export default MyNavbar;
/*
 <Navbar className=' w-1/2 p-0  ' shouldHideOnScroll>
      <NavbarBrand className='object-left-top  flex flex-row items-start  '>
        <Link className='' href={'/'}>
          <Image className='' src={`/logo.png`} alt='logo' width='252' height='50' />
        </Link>
      </NavbarBrand>
    </Navbar>*/
