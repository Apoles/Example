import Image from 'next/image';
import { Button, Input } from '@nextui-org/react';

export default function Home() {
  return (
    <main className='flex h-screen  flex-col items-center justify-center p-12	 bg-backgroundColorPink '>
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
            maxLength='11'
          />
          <Button size='lg' className=' text-white w-full uppercase   bg-inputColor '>
            Satın Al
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
