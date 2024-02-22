import MyNavbar from '@/components/navbar';
import React from 'react';

export const metadata = {
  title: 'Next Shadcn Dashboard Starter',
  description: 'Basic dashboard with Next.js and Shadcn',
};

export default function Deneme({ children }) {
  return (
    <>
      <div className='h-screen bg-backgroundColor  '>
        <MyNavbar></MyNavbar>
        <main className='  flex flex-col  overflow-hidden     '>{children}</main>
      </div>
    </>
  );
}
