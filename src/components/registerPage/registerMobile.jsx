import React,{useEffect,useState} from 'react';
import avatarImage from './images/354177187_2e0ac7ad-ad85-46bb-babd-218399893e7b.jpg'

const  RegisterMobile = () => {
    return (
        <div className='w-full h-screen bg-blue-200 relative flex justify-center items-center p-6' >
                   <div className='w-full h-full  flex flex-col justify-start items-center px-4 mt-10' >
                       <div className='w-1/2  h-20 relative ' >
                          <img src={avatarImage} className='w-20 h-auto absolute -top-10 border-8 border-blue-400' alt="" />
                       </div>
                       <div className='w-full h-full bg-sky-100' >

                       </div>
                   </div>

              {/* <div className='w-full h-full pt-4 px-6 bg-white rounded-twelve flex flex-col gap-y-4' >
                   <div className='w-full h-1/6 py-6 rounded-twelve flex gap-x-4 justify-start items-start px-2 bg-yellow-200 ' >
                    <div className='flex w-1/3 items-center h-full justify-center' >
                        <span className='text-blue-300 text-2xl' >name <span className='text-red-600'>:</span> </span>
                    </div>
                    <div>
                        <input type="text" placeholder='enter name' className='w-full text-center text-2xl rounded-lg' />
                    </div>
                   </div>
                   <div className='w-full h-1/6 py-6 rounded-twelve flex gap-x-4 justify-start items-start px-2 bg-yellow-200 ' >
                    <div className='flex w-1/3 items-center h-full justify-center' >
                        <span className='text-blue-300 text-2xl' >email <span className='text-red-600'>:</span> </span>
                    </div>
                    <div>
                        <input type="email" placeholder='enter Email' className='w-full text-center text-2xl rounded-lg' />
                    </div>
                   </div>
                   <div className='w-full h-1/6 py-6 rounded-twelve flex gap-x-4 justify-start items-start px-2 bg-yellow-200 ' >
                    <div className='flex w-1/3 items-center h-full justify-center' >
                        <span className='text-blue-300 text-2xl' >country  </span>
                    </div>
                    <div>
                        <input type="text" placeholder='enter name' className='w-full text-center text-2xl rounded-lg' />
                    </div>
                   </div>
                   <div className='w-full h-1/6 py-6 rounded-twelve flex gap-x-4 justify-start items-start px-2 bg-yellow-200 ' >
                    <div className='flex w-1/3 items-center h-full justify-center' >
                        <span className='text-blue-300 text-2xl' >Password <span className='text-red-600'>:</span> </span>
                    </div>
                    <div>
                        <input type="email" placeholder='enter Email' className='w-full text-center text-2xl rounded-lg' />
                    </div>
                   </div>
                   <div className='w-full h-1/6 py-6 rounded-twelve flex gap-x-4 justify-start items-start px-2 bg-yellow-200 ' >
                    <div className='flex w-1/3 items-center h-full justify-center' >
                        <span className='text-blue-300 text-2xl' >New Password<span className='text-red-600'>:</span> </span>
                    </div>
                    <div>
                        <input type="email" placeholder='enter Email' className='w-full text-center text-2xl rounded-lg' />
                    </div>
                   </div>
                   <div className='w-full min-h-20 bg-blue-300 flex justify-center items-center' >
                    profile image
                   </div>
              </div> */}
        </div>
    );
};

export default  RegisterMobile;