import React from 'react';
import { useEffect,useState } from 'react';
import blogMobile from '../../assets/images/blogMobile.webp';
const  HomePageMobileBlog = () => {
 const [animateBorder,setAnimateBorder]=useState(0);
 const [borderShow,setAnimateBorderShow]=useState(0);
 const [stopAnimation,setStopAnimation]=useState(false);
 const [stoppedOnce,setStoppedOnce]=useState(false);
 const [showImage,setShowImage]=useState(false);
  useEffect(()=>{
 
 if(animateBorder > 0){
  let interval;
  interval=setInterval(()=>{
        setAnimateBorder(prev => prev + 1);
  },500);
return()=>{
 clearInterval(interval)
}
 }
  },[animateBorder]);
  useEffect(()=>{
    setTimeout(()=>{
      setAnimateBorder(1);
    },200);
  },[]);

  useEffect(()=>{
         if(animateBorder > 0 && animateBorder <= 4){
            setAnimateBorderShow(animateBorder);
         }
         else if(animateBorder > 4){
          setAnimateBorder(1);
         
            setStopAnimation(true);
       
          
         }
  },[animateBorder]);
  useEffect(()=>{
         if(stopAnimation){
          setTimeout(()=>{
              setStopAnimation(false);
              setStoppedOnce(true);
              setAnimateBorder(1);         
             },10000);
         }
  },[stopAnimation]);
  const imageLoaded=()=>{
    setShowImage(true);
  }
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight, // Scroll to the bottom of the page
      behavior: "smooth",
    });
    console.log("clicked Scroll");
    console.log(document.body.scrollHeight);
  };
    return (
      <>
        <div className='w-full h-full relative flex flex-col justify-start items-center' >
          <div className='w-full h-1/6 bg-gray-400 rounded-t-large px-6 flex justify-between items-center' >
                          <div >
                          <svg
      className="w-6 h-6 text-gray-600"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10 4a6 6 0 100 12 6 6 0 000-12zm8 8l4 4m-4-4l-4 4"
      />
    </svg>
                          </div>
                          <div className='w-full flex justify-center' >
                            SEBAIF BLOG
                          </div>
                          <div>
                          <svg
      className="w-6 h-6 text-gray-600"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      {false ? (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M6 18L18 6M6 6l12 12"
        />
      ) : (
        <>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </>
      )}
    </svg>
                          </div>
          </div>
          <div className='w-full h-5/6 relative px-6 flex flex-col gap-y-6 justify-center items-center' >
          <div className={` ${showImage ? "hidden":"animate-fadeInOut"} w-full h-full absolute z-0 bg-black bg-opacity-30`}>

          </div>
          <img src={blogMobile} onLoad={imageLoaded} className={`
          ${showImage ? "animate-fadeIn":"hidden"} 
            w-full h-full object-cover absolute z-0`} alt="" />
             <div className='w-full h-2/3 rounded-twelve bg-gray-200 bg-opacity-70 z-10 flex flex-col justify-start items-center' >
                  <div className='w-full h-1/3 flex justify-center items-center' >
                                     <span className='text-blue-500 text-4xl font-bold' >My BLOG </span>
                  </div>
                  <div className='w-full h-1/4  flex flex-col justify-center gap-y-2 items-center bg-blue-300 bg-opacity-30' >
                       <span className={` text-2xl font-bold ${borderShow == 1 && !stopAnimation ? "border-2 text-blue-700":"text-gray-700"}  w-full text-center`} >Latest Post</span>
                       <span className={` text-2xl font-bold ${borderShow == 2 && !stopAnimation ? "border-2 text-yellow-700":"text-gray-700"}  w-full text-center`} >Latest Blog</span>
                  </div>
                  <div className='w-full h-1/4  flex flex-col justify-center gap-y-2 items-center bg-green-200 bg-opacity-40' >
                       <span className={` ${borderShow == 3 && !stopAnimation ? "border-2 text-orange-700":"text-gray-700"} text-2xl font-bold  w-full text-center border-blue-200`} >Latest News</span>
                       <span className={` text-2xl font-bold w-full text-center border-blue-200 ${borderShow == 4 && !stopAnimation ? "border-2 text-red-700":"text-gray-700"} `} >Latest Post</span>
                  </div>
                  <div className='w-full h-1/4  flex justify-center items-center'>
                  <div className={`relative ${stopAnimation ? "animate-slideUpDown":""}`} >
                    <div className='absolute w-full h-full bg-green-400 z-20 bg-opacity-30' >

                    </div>
                  <button className={` bg-green-100 p-4 rounded-twelve`} >
                           Read More
                        </button>
                  </div>
                       
                  </div>
             </div>
             <div className='w-full absolute bottom-6  h-12 flex justify-center items-center  rounded-twelve ' >
               <div className='w-full h-full relative rounded-twelve text-white flex justify-center items-center' >
               <button
        onClick={scrollToBottom}
        className="absolute bottom-0 z-50 flex flex-col items-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          
          className="w-10 h-10 text-red-600"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
        <span className=" text-2xl text-blue-500">Scroll Down</span>
      </button>
               </div>
</div>
          </div>

        </div>
        <div className='w-full h-screen bg-blue-200'>
                      SABAA
        </div>
        </>
    );
};

export default  HomePageMobileBlog;