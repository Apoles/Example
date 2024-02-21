import React from 'react';
import { Card, CardBody, CardHeader } from '@nextui-org/react';

const Cardz = ({ title, description }) => {
  return (
    <Card className='bg-grayTwo container  '>
      <CardHeader className='pb-0 pt-5 flex-col items-start'>
        <h4 className='text-tiny uppercase text-grayOne'>{title}</h4>
      </CardHeader>
      <CardBody className='w-full'>
        <p className='text-medium'>{description}</p>
      </CardBody>
    </Card>
  );
};

export default Cardz;
