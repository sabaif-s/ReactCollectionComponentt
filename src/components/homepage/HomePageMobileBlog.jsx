import React from 'react';

const  HomePageMobileBlog = () => {
    return (
        <div className='w-full h-full relative flex flex-col justify-start items-center' >
          <div className='w-full h-1/6 bg-gray-400 rounded-t-large' >

          </div>
          <div className='w-full h-5/6 relative px-6 flex flex-col gap-y-6 justify-center items-center' >
          <img src={"/sabk.jpeg"} className='w-full h-full object-cover absolute z-0' alt="" />
             <div className='w-full h-2/3 rounded-twelve bg-gray-200 bg-opacity-70 z-10' >

             </div>
             <div className='w-full absolute bottom-6  h-12  rounded-twelve bg-yellow-200' >

</div>
          </div>

        </div>
    );
};

export default  HomePageMobileBlog;