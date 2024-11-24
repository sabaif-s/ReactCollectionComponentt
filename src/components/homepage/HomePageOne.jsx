import React from 'react';

const  HomePageOne = () => {
    return (
        <div className='w-full absolute flex pb-10  bottom-0 ' style={{height:"calc(100vh - 50px)" }}  >
            <img src="/Grid Back.jpg" className='w-full h-full absolute z-0' alt="" />
            <div className='w-1/6  pl-6 flex flex-col z-10' >
                     <div className='w-full h-1/2 bg-gray-300' >
                          <div className='w-full h-2/3 bg-black flex flex-col justify-center items-start' >
                            <div className='' ><span className='text-8xl text-white ' >. .</span></div>
                            <div className='w-5/6 h-2/3 bg-red-300' >
                                <img src="/blogImage.jpg" alt="" />
                            </div>
                          </div>
                     </div>
                     <div className='w-full h-1/2 bg-green-300 z-10 ' >
                      <div className='w-full h-1/4 p-4 bg-red-300 ' >
                            <div>
                                Latest
                            </div>
                      </div>
</div>
            </div>
            <div className='w-2/6 bg-blue-300 flex flex-col z-10' >
                     <div className='w-full h-1/2 bg-yellow-100 pb-10 flex justify-center items-end' >
                         <div className='w-full h-1/3 bg-red-300 flex justify-center items-center' >
                              News Feed
                         </div>
                     </div>
                     <div className='w-full h-1/2 bg-green-100 flex flex-col' >
                                <div className='w-full h-1/4 bg-red-200 pl-6 pt-2' >
                                  March 17, Nov 2024
                              </div>
                               <div className='w-full h-1/2 bg-orange-200 pl-6 pt-2 pr-12 overflow-hidden' >
                                        <span className='w-full word-break text-2xl bg-red-300' >
                                              China invest more than 2000 dollar
                                              For Investment Reason To Make Economic Growth Of Thousand 
                                              Years Of Economic Depression
                                
                                        </span>
                                  </div>
                             
                            <div className='w-full h-1/4 bg-blue-200 flex justify-start items-end pl-6' >
                          <div className='w-full h-1/2 bg-red-100 flex justify-start items-center gap-x-4' >
                             <img src="/sabk.jpeg" className=' h-full rounded-full' alt="" />
                             <span className='text-white' >BY SEBAIF MUHAMMED</span>
                          </div>
</div>

</div>
            </div>
            <div className='w-2/6 bg-orange-200  flex flex-col z-10' >
                  <div className='w-full h-1/2 pb-10 bg-blue-600 flex flex-col justify-end items-center' >
                         <div className='w-2/3 h-1/3 bg-red-200 overflow-hidden pl-2 pr-6 pb-6 mb-6' >
                              <span className='w-full word-break' >
                              China invest more than 2000 dollar
                                              For Investment Reason To Make Economic 
                                            
                              </span>
                         </div>
                         <div className='w-full h-1/3 bg-gray-300 flex justify-center items-center' >
                              Video Feed
                         </div>
                  </div>
                  <div className='w-full h-1/2 bg-orange-600 flex justify-center items-center' >
                                 <div className='w-full h-2/3 bg-gray-700' >
                                    <img src="/blogImage.jpg" className='h-full w-full' alt="" />
                                 </div>
</div>
            </div>
            <div className='w-1/6 bg-red-300 z-10' >

            </div>
        </div>
    );
};

export default  HomePageOne;