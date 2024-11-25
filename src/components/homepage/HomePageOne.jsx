import React from 'react';
import ReactPlayer from 'react-player';
import { useState,useEffect } from 'react';

const  HomePageOne = () => {
    const [showBack,setShowBack]=useState(false);
    const [showAnother,setShowAnother]=useState(false);
    const [showContent,setShowContent]=useState(false);
    return (
        <div className={` w-full ${showBack ? "":"hidden"} absolute flex pb-10  bottom-0 bg-black `} style={{height:"calc(100vh - 50px)" }}  >
            <img
            onLoad={()=>{
                setTimeout(()=>{
                    setShowBack(true);
                    setTimeout(()=>{
                        setShowAnother(true);
                        setTimeout(()=>{
                         setShowContent(true);
                        },2000);
                    },2500);
                },1000);
                console.log("back loaded");
            }}
            src="/Grid Back.jpg" className={` ${showBack ? "":'hidden'} transition-opacity duration-1000 ease-in-out ${
          showBack ? 'opacity-100' : 'opacity-0'} w-full h-full object-cover absolute z-0`} alt="" />
          <div className={`w-full h-full absolute z-40  flex justify-start items-center ${showAnother ? "animate-slideDown":"hidden"} `} >
                  <div className='w-1/6 border-r-2 h-full border-r-gray-400' >

                  </div>
                  <div className='w-2/6 border-r-2 h-full border-r-gray-400' >
 
</div>      
<div className='w-2/6 border-r-2 h-full border-r-gray-400' >

</div>
<div className='w-1/6 border-r-2 h-full border-r-gray-400' >

</div>
          </div>
          <div className={`absolute bottom-10 w-full h-full flex flex-col justify-start items-center ${showAnother ? "animate-slideRight":"hidden"} `} >
                  <div className='w-full h-1/2 border-b-2 animate-slideRight' >

                  </div>
          </div>
          {
            showAnother && (
                <>
                 
                 <div className={` ${showContent ? "animate-fadeIn":"opacity-0"} w-1/6    pl-6 flex flex-col z-10`} >
                     <div className='w-full h-1/2 ' >
                          <div className='w-full h-2/3  flex flex-col justify-center items-start' >
                            <div className='' ><span className='text-8xl text-white ' >. .</span></div>
                            <div className='w-5/6 h-2/3 ' >
                                <img src="/blogImage.jpg" alt="" />
                            </div>
                          </div>
                     </div>
                     <div className='w-full h-1/2 text-white z-10 ' >
                      <div className='w-full h-1/4 p-4  relative' >
                      <div className='absolute w-full h-full left-0 border-b-4 border-gray-400' >
                      </div>
                      <div className='absolute w-full h-full left-0 border-t-4 border-gray-600' >
</div>
<div className='absolute w-full h-full left-0 border-l-4 border-gray-500' >
</div>
<div className='absolute w-full h-full left-0 border-r-4 border-gray-600' >
</div>
                            <div className=''>
                                Latest
                            </div>
                      </div>
</div>
            </div>
            <div className={` ${showContent ? "animate-fadeIn":"opacity-0"} w-2/6 text-white flex flex-col z-10`} >
                     <div className='w-full h-1/2  pb-10 flex justify-center items-end' >
                         <div className='w-full h-1/3 bg-gray-200 flex justify-center items-center overflow-x-hidden' >
                         <h2 className="text-2xl font-semibold text-gray-700 mb-4 absolute z-10">News Feed</h2>
                         <div className='space-y-4 w-full z-20' >
                         <div  className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-xl text-center font-medium text-gray-800">SABOO</h3>
              <p className="text-gray-600 mt-2 w-full word-break">SABAA Akkam Nagahaa Jirtaa wanti Hunduu 
                Nagaadhaamii maaltu jira wanti haarofni kanaaf jabaadhu
              </p>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-blue-500 mt-2 inline-block">
                Read more
              </a>
            </div>
            </div>
                         </div>
                     </div>
                     <div className='w-full h-1/2  flex flex-col' >
                                <div className='w-full h-1/4  pl-6 pt-2' >
                                  March 17, Nov 2024
                              </div>
                               <div className='w-full h-1/2  pl-6 pt-2 pr-12 overflow-hidden' >
                                        <span className='w-full word-break text-2xl ' >
                                              China invest more than 2000 dollar
                                              For Investment Reason To Make Economic Growth Of Thousand 
                                              Years Of Economic Depression
                                
                                        </span>
                                  </div>
                             
                            <div className='w-full h-1/4  flex justify-start items-end pl-6' >
                          <div className='w-full h-1/2  flex justify-start items-center gap-x-4' >
                             <img src="/sabk.jpeg" className=' h-full rounded-full' alt="" />
                             <span className='text-white' >BY SEBAIF MUHAMMED</span>
                          </div>
</div>

</div>
            </div>
            <div className={`w-2/6 text-white  flex flex-col z-10 ${showContent ? "animate-fadeIn":"opacity-0"} `} >
                  <div className='w-full h-1/2 pb-10  flex flex-col justify-end items-center' >
                         <div className='w-2/3 h-1/3  overflow-hidden pl-2 pr-6 pb-6 mb-6' >
                              <span className='w-full word-break' >
                              China invest more than 2000 dollar
                                              For Investment Reason To Make Economic 
                                            
                              </span>
                         </div>
                         <div  className='w-full h-1/3 relative  flex justify-center items-center' >
                         <div className='w-full h-full' style={{ position: 'relative', paddingTop: '56.25%' }}>

                       
                         <ReactPlayer
        url={"https://www.youtube.com/watch?v=LUzcJbinU3U"}
        width="100%"
        height="100%"
        style={{ position: 'absolute', top: 0, left: 0 }}
        playing={true} // Auto play
        controls={false} // No controls
        muted={true}
        config={{
            youtube: {
              playerVars: {
                autoplay: 1, // Autoplay the video
                controls: 0, // Disable controls
                mute: 1, // Mute the video
              },
            },
          }}
      />
        </div>

                         </div>
                  </div>
                  <div className='w-full h-1/2  flex justify-center items-center' >
                                 <div className='w-full h-2/3 ' >
                                    <img src="/blogImage.jpg" className='h-full w-full' alt="" />
                                 </div>
</div>
            </div>
            <div className={` ${showContent ? "animate-fadeIn":"opacity-0"} w-1/6  z-10`} >

            </div>
                </>
            )
          }
           
        </div>
    );
};

export default  HomePageOne;