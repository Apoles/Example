import React from 'react';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from '@nextui-org/react';
import Image from 'next/image.js';

const MyNavbar = () => {
  return (
    <Navbar className=' w-1/2 p-0  ' shouldHideOnScroll>
      <NavbarBrand className='object-left-top  flex flex-row items-start  '>
        <Image className='' src={`/logo.png`} alt='logo' width='252' height='50' />
      </NavbarBrand>
    </Navbar>
  );
};

export default MyNavbar;
