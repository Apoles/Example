'use client';

import React from 'react';
import Cardz from '@/components/card';
import { Button, Card, CardBody, CardHeader } from '@nextui-org/react';

export default function Deneme() {
  return (
    <main className='flex  flex-col items-center justify-between p-14 bg-backgroundColor   '>
      <div className=' flex flex-col items-center  w-full lg:w-96 space-y-4 py-8 px-8 bg-white rounded-2xl shadow-xl '>
        <h1 className='text-lg font-bold'>Sipariş Detayı</h1>
        <Cardz title='Üye İşyeri' description='Lorem İpsum'></Cardz>
        <Cardz title='Ürün Adı' description='Test Item'></Cardz>
        <Cardz title='Servis Adı' description='Lorem Ipsum'></Cardz>
        <Cardz title='Toplam' description='₺1.44'></Cardz>
        <div className='flex flex-col items-center justify-between gap-5 px-12  '>
          <h2 className='text-lg font-bold'>Lorem Ipsum</h2>
          <Card>
            <CardBody>
              <p className='text-xs w-max'>2145d501-1ed4-4f37-a24e-adce9e0fb87a</p>
            </CardBody>
          </Card>
          <Button className='w-full' color='primary' variant='shadow'>
            04:22
          </Button>
        </div>
      </div>
    </main>
  );
}
