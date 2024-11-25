import React from 'react';
import ReactPlayer from 'react-player';
import { useState,useEffect} from 'react';
 
import backImage from '../../assets/images/Grid Back.webp';
import blogImage from '../../assets/images/blogImage.webp';
import resizedImage from '../../assets/images/resizedBlogImage.webp';

const  HomePageOne = () => {
    const [showBack,setShowBack]=useState(false);
    const [showAnother,setShowAnother]=useState(false);
    const [showContent,setShowContent]=useState(false);
     const [startAnimation,setStartAnimation]=useState(false);
    const [blogLoaded,setBlogLoaded]=useState(false);
    const [slideRightFirst,setSlideRightFirst]=useState(false);
    const [animateLargeBlogImage,setAnimateLargeBlogImage]=useState(false);
   
    // useEffect(() => {
    //   function preloadImages(imageUrls) {
    //     return Promise.all(
    //       imageUrls.map((url) => {
    //         return new Promise((resolve, reject) => {
    //           const img = new Image();
    //           img.src = url;
    //           img.onload = resolve; // Resolve when the image loads
    //           img.onerror = reject; // Reject if there's an error
    //         });
    //       })
    //     );
    //   }
    //    if(images.length > 0){
    //     preloadImages(images)
    //     .then(() => {
    //       console.log('All images are loaded');
    //       setImagesLoaded(true); // Update state when all images are loaded
    //     })
    //     .catch((error) => {
    //       console.error('Failed to load images', error);
    //     });
    //    }
     
    // }, [images]);
    useEffect(()=>{
           if(startAnimation){
            console.log("Start Animation");
            setTimeout(()=>{
            setSlideRightFirst(true);
             
            },1000);
           }
    },[startAnimation]);
    return (
      <>
      {
        !showBack && blogLoaded && (
          <div className='w-full h-full bg-gray-400' >

          </div>
        )
      }
        <div className={` w-full ${showBack && blogLoaded ? "":"hidden"} absolute flex pb-10  bottom-0 bg-black `} style={{height:"calc(100vh - 50px)" }}  >
            <img
            onLoad={()=>{
                setTimeout(()=>{
                    setShowBack(true);
                    setTimeout(()=>{
                        setShowAnother(true);
                        setTimeout(()=>{
                         setShowContent(true);
                         setStartAnimation(true);
                        },2200);
                    },2500);
                },1000);
                console.log("back loaded");
            }}
            src={backImage} className={` ${showBack ? "":'hidden'} transition-opacity duration-1000 ease-in-out ${
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
                 
                 <div className={` ${slideRightFirst ? "animate-fadeIn animate-slideRight":"opacity-0"} w-1/6    pl-6 flex flex-col z-10`} >
                     <div className='w-full h-1/2 ' >
                          <div className='w-full h-2/3  flex flex-col justify-center items-start' >
                            <div className='' ><span className='text-8xl text-white ' >. .</span></div>
                            <div className='w-5/6 h-2/3 relative' >
                            <img
            src={resizedImage}
            alt="Blog Image"
            className={`w-full h-auto absolute z-10 object-cover ${blogLoaded ? "opacity-0":"opacity-100"} `}
          
          />
                           <img
            src={blogImage}
            alt="Blog Image"
            className={` ${blogLoaded ? "opacity-100":"opacity-0"} w-full h-auto absolute z-10 object-cover`}
            onLoad={()=>{
              setBlogLoaded(true);
            }}
          
          />
                            
        
                               
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
            <div className={` ${showContent ? "animate-fadeIn animate-slideDown":"opacity-0"} w-2/6 text-white flex flex-col z-10`} >
                     <div className='w-full h-1/2  pb-10 flex justify-center items-end' >
                         <div className='w-full h-1/3 bg-gray-200 flex justify-center items-center overflow-x-hidden' >
                         <h2 className="text-2xl font-semibold text-gray-700 mb-4 absolute z-10">News Feed</h2>
                         <div className='space-y-4 w-full z-20' >
                         <div  className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-xl text-center font-medium text-gray-800">SABOO</h3>
              <p className="text-gray-600 mt-2 w-full word-break animate-colorChange">SABAA Akkam Nagahaa Jirtaa wanti Hunduu 
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
                                        <span className='w-full word-break text-2xl animate-colorChange2 ' >
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
            <div className={`w-2/6 text-white  flex flex-col z-10 ${showContent ? "animate-fadeIn animate-slideUp":"opacity-0"} `} >
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
                                 <div className='w-full h-2/3 relative' >
                                    <img src={resizedImage} className='w-full h-full absolute z-0' alt="" />
                                    <img
                                     onLoad={()=>{
                                      setBlogLoaded(true);
                                     }}
                                    src={blogImage} className={` ${blogLoaded ? "animate-fadeIn":"opacity-0"} absolute h-full w-full z-10`} alt="" />
                                 </div>
</div>
            </div>
            <div className={` ${showContent ? "animate-fadeIn":"opacity-0"} w-1/6  z-10`} >

            </div>
                </>
            )
          }
           
        </div>
        </>
    );
};

export default  HomePageOne;