import React,{useEffect,useState} from 'react';

const  RegisterMobile = () => {
    return (
        <div className='w-full h-screen bg-red-200 relative flex justify-center items-center p-6' >
              <div className='w-full h-full pt-4 bg-white rounded-twelve flex flex-col gap-y-4' >
                   <div className='w-full py-6 rounded-twelve flex gap-x-4 justify-start items-start px-2 bg-yellow-200 ' >
                    <div className='flex w-1/3 items-center h-full justify-center' >
                        <span className='text-blue-300 text-2xl' >name <span className='text-red-600'>:</span> </span>
                    </div>
                    <div>
                        <input type="text" placeholder='enter name' className='w-full text-center text-2xl rounded-lg' />
                    </div>
                   </div>
                   <div className='w-full py-6 rounded-twelve flex gap-x-4 justify-start items-start px-2 bg-yellow-200 ' >
                    <div className='flex w-1/3 items-center h-full justify-center' >
                        <span className='text-blue-300 text-2xl' >email <span className='text-red-600'>:</span> </span>
                    </div>
                    <div>
                        <input type="email" placeholder='enter Email' className='w-full text-center text-2xl rounded-lg' />
                    </div>
                   </div>
                   <div className='w-full py-6 rounded-twelve flex gap-x-4 justify-start items-start px-2 bg-yellow-200 ' >
                    <div className='flex w-1/3 items-center h-full justify-center' >
                        <span className='text-blue-300 text-2xl' >country  </span>
                    </div>
                    <div>
                        <input type="text" placeholder='enter name' className='w-full text-center text-2xl rounded-lg' />
                    </div>
                   </div>
                   <div>
                    password
                   </div>
                   <div>
                    new password
                   </div>
                   <div>
                    profile image
                   </div>
              </div>
        </div>
    );
};

export default  RegisterMobile;