import MyNavbar from '@/components/navbar';
import React from 'react';

export const metadata = {
  title: 'Next Shadcn Dashboard Starter',
  description: 'Basic dashboard with Next.js and Shadcn',
};

export default function Deneme({ children }) {
  return (
    <>
      <div className=''>
        <MyNavbar></MyNavbar>
        <main className=' flex flex-col  overflow-hidden bg-slate-900  w-full '>{children}</main>
      </div>
    </>
  );
}
