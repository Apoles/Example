import React from 'react';
import { Card, CardBody, CardHeader } from '@nextui-org/react';
import Link from 'next/link';

const Cardz = ({ title, description, controlId }) => {
  return (
    <>
      {controlId == 1 ? (
        <div className='p-4 container  flex flex-row items-center justify-between bg-grayTwo   rounded-md '>
          <h5 className='text-medium uppercase text-grayOne '>{title}</h5>
          <p className='text-xl font-bold'>{description}</p>
        </div>
      ) : (
        <div className='p-4 container   flex-col items-start bg-grayTwo space-y-1  rounded-md '>
          <h5 className='text-tiny uppercase text-grayOne '>{title}</h5>
          <p className='text-medium'>{description}</p>
        </div>
      )}
    </>
  );
};

export default Cardz;
/*<Card className='bg-grayTwo container  '>
      <CardHeader className='pb-0 pt-5 flex-col items-start'>
        <h4 className='text-tiny uppercase text-grayOne'>{title}</h4>
      </CardHeader>
      <CardBody className='w-full'>
        <p className='text-medium'>{description}</p>
      </CardBody>
    </Card>*/
