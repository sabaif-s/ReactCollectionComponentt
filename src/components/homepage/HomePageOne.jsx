import React from 'react';

const  HomePageOne = () => {
    return (
        <div className='w-full absolute flex  bottom-0 bg-gray-300' style={{height:"calc(100vh - 50px)"}} >
            <div className='w-1/6 bg-green-300 pl-6 flex flex-col' >
                     <div className='w-full h-1/2 bg-gray-300' >
                          <div className='w-full h-2/3 bg-black flex flex-col justify-center items-start' >
                            <div className='' ><span className='text-8xl text-white ' >. .</span></div>
                            <div className='w-5/6 h-2/3 bg-red-300' >
                                <img src="/blogImage.jpg" alt="" />
                            </div>
                          </div>
                     </div>
                     <div className='w-full h-1/2 bg-black' >
                      <div className='w-full h-1/4 p-4 bg-blue-300' >

                      </div>
</div>
            </div>
            <div className='w-2/6 bg-blue-300' >

            </div>
            <div className='w-2/6 bg-orange-200' >

            </div>
            <div className='w-1/6 bg-red-300' >

            </div>
        </div>
    );
};

export default  HomePageOne;