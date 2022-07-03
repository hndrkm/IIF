import React, { Component } from 'react';
import data from "./Data/Important_charges.json"; 

import Image  from 'next/image';

export default function Important_charges(){
  return (  
    <div className=''>
      <div className='uppercase  text-center p-4  my-8 text-3xl'>ADMINISTRACI&oacute;N</div>
      <div className='flex px-8'>
        <div className=' w-3/6  p-8   '>
            <div className='bg-gray-400 p-4  ' >
            <div className='my-8 w-full flex justify-center'>
              <Image src="/Charges/charge1.jpg" width={200} height={200} />
            </div>
            <div>
              <div>Nombre:</div>
              <div className='flex justify-center text-gray-800'>example name</div>
              <div>telfono:</div>
              <div className='flex justify-center text-gray-800'>591-3434-123</div>
              <div>correo elctronico :</div>
              <div className='flex justify-center text-gray-800'>example@gmail.com</div>
            </div>
          </div>
        </div>
        <div className='w-3/6  py-20 flex justify-center'>
          <div className='bg-gray-300 w-full p-8 '>
            <div className='my-4'>
              <div className=' font-bold text-2xl'>Cargo</div>
              <div className='text-gray-800 flex justify-center'>admin</div>
            </div>
            <div className='my-4'>
              <div className=' font-bold text-2xl'>Funciones</div>
              <div className='text-gray-800 flex justify-center my-8'>
                <ul className='list-disc '>
                  <li>funcion uno</li>
                  <li>funcion uno</li>
                  <li>funcion uno</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  )
}
