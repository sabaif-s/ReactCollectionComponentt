import React from 'react';
import { useEffect,useState } from 'react';
import blogMobile from '../../assets/images/blogMobile.jpg';
const  HomePageMobileBlog = () => {
 const [animateBorder,setAnimateBorder]=useState(0);
 const [borderShow,setAnimateBorderShow]=useState(0);
 const [stopAnimation,setStopAnimation]=useState(false);
 const [stoppedOnce,setStoppedOnce]=useState(false);
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
    return (
        <div className='w-full h-full relative flex flex-col justify-start items-center' >
          <div className='w-full h-1/6 bg-gray-400 rounded-t-large' >

          </div>
          <div className='w-full h-5/6 relative px-6 flex flex-col gap-y-6 justify-center items-center' >
          <img src={blogMobile} className='w-full h-full object-cover absolute z-0 ' alt="" />
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
             <div className='w-full absolute bottom-6  h-12 flex justify-center items-center  rounded-twelve bg-yellow-200' >
               <div className='w-10 h-full bg-black rounded-twelve text-white flex justify-center items-center' >
                    <span className='animate-slideUpDownFast' >A</span>
               </div>
</div>
          </div>

        </div>
    );
};

export default  HomePageMobileBlog;