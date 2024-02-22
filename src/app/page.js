'use client';
import Image from 'next/image';
import { Button, Input } from '@nextui-org/react';
import Link from 'next/link';
import React from 'react';

export default function Home() {
  const data = true;
  const [value, setValue] = React.useState('');

  const [firstValue, setfirstValue] = React.useState('(5__)___ __ __');

  function checkElevenNumbers(inputString) {
    let numbers = inputString.split(' ');
    console.log(numbers);

    for (let i = 0; i < numbers.length; i++) {
      if ((numbers[i].length === 10 && /^\d+$/.test(numbers[i])) || numbers[i].length === 0) {
        return false;
      }
    }
    return true;
  }
  function checkDisable(inputString) {
    let numbers = inputString.split(' ');
    console.log(numbers);

    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i].length === 10 && /^\d+$/.test(numbers[i])) {
        return false;
      }
    }
    return true;
  }

  return (
    <main className=' bg-[url(/bg.png)] bg-no-repeat bg-cover   flex h-screen  flex-col items-center justify-center p-12'>
      <div className=' w-full lg:w-1/4 bg-white px-12 py-12 rounded-md flex flex-col items-center justify-center  gap-6 '>
        <div className='bg-white w-full flex flex-col items-center px-12 pt-4 pb-16 rounded-sm shadow-sm '>
          <Image className='' src={`/logot.png`} alt='logo' width='252' height='50' />
        </div>
        <h1 className='text-2xl text-textColor '>Yeni Başlık</h1>
        <p className='text-grayOne'>Yeni Servis</p>
        <div className=' flex flex-col bg-white w-full lg:px-8 items-center pt-4 pb-14 rounded-sm shadow-sm gap-6'>
          <Input
            color='primary'
            type='tel'
            variant={'bordered'}
            placeholder='(5__)___ __ __'
            size='md'
            maxLength='10'
            value={value}
            onValueChange={setValue}
            isInvalid={checkElevenNumbers(value)}
            errorMessage={checkElevenNumbers(value) ? 'Geçerli bir numara giriniz' : ''}
          />
          <Button size='lg' className=' text-white w-full uppercase   bg-inputColor ' isDisabled={checkDisable(value)}>
            <Link className='flex flex-col p-96 items-center justify-center  h-full  w-full' href={'landingpage'}>
              Satın Al
            </Link>
          </Button>{' '}
        </div>
        <p className='lg-px-12  text-xs'>
          TURKCELL 0,21 TL, VODAFONE 0,02 TL, TÜRK TELEKOM 3,45 TL. Bu işlem boyunca gönderilen bütün SMS ler
          ücretsizdir. Veriler, gizlilik sözleşmesi gereğince kimseyle paylaşılmaz. Tüm hakları saklıdır. Müşteri
          hizmetleri: 08503046741
        </p>
      </div>
    </main>
  );
}
