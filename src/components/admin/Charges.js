import Image from "next/image"
export default function Charges(){
  return (
    <div className="flex">
      <div className="w-3/6  py-8">
        <div className="flex justify-center">
          <Image src="/Charges/charge1.jpg" width={200} height={200} />
        </div>
      </div> 
      <div className='bg-gray-300 w-3/6 p-8 '>
        <div className='my-2'>
          <div className=' font-bold text-2xl'>Nombre</div>
          <div className='text-gray-800 flex justify-center'>example name</div>
        </div>
        <div className='my-2'>
          <div className=' font-bold text-2xl'>Funciones</div>
          <div className='text-gray-800 flex justify-center my-8'>
            <ul className='list-disc '>
              <li>secretario</li>
            </ul>
          </div>
        </div>
        <div className='my-2'>
          <div className=' font-bold text-2xl'>Contacto</div>
          <div className='text-gray-800 flex justify-center'>591-334-342</div>
        </div>
      </div>
    </div>
  )
}

