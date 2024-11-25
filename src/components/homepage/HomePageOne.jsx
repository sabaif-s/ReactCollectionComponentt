import React from 'react';
import ReactPlayer from 'react-player';
import { useState,useEffect} from 'react';
 
 

const  HomePageOne = ({data}) => {
    const [showBack,setShowBack]=useState(false);
    const [showAnother,setShowAnother]=useState(false);
    const [showContent,setShowContent]=useState(false);
     const [startAnimation,setStartAnimation]=useState(false);
    const [blogLoaded,setBlogLoaded]=useState(false);
    const [slideRightFirst,setSlideRightFirst]=useState(false);
    const [animateLargeBlogImage,setAnimateLargeBlogImage]=useState(false);
    const [warLoaded,setWarLoaded]=useState(false);
    const [newsLoaded,setNewsLoaded]=useState(false);
    const [activateInterval,setActivateInterval]=useState(0);
    const [currentBlog,setCurrentBlog]=useState(0);
    const [readySecondVideo,setReadySecondVideo]=useState(false);
    const [blogImageUrl,setBlogImageUrl]=useState("");
    const [backImageUrl,setBackImageUrl]=useState("");
    const [newsImageUrl,setNewsImageUrl]=useState("");
    const [warImageUrl,setWarImageUrl]=useState("");
    const [resizedImageUrl,setResizedImageUrl]=useState("");
    const [blogImageCollectionUrl,setBlogCollectionUrl]=useState([]);
    const [flipAnimate,setFlipAnimate]=useState(false);
    const [upperTextCollectionSent,setUpperTextCollectionSent]=useState([]);
    const [lowerTextCollectionSent,setLowerTextCollectionSent]=useState([]);
   
    useEffect(()=>{
           if(data.length > 0 ){
            setBackImageUrl(data[0].images[0]);
            setBlogImageUrl(data[0].images[1]);
            setNewsImageUrl(data[0].images[2]);
            setResizedImageUrl(data[0].images[3]);
            setWarImageUrl(data[0].images[4]);
             setUpperTextCollectionSent(data[0].upperTextCollection);
             setLowerTextCollectionSent(data[0].lowerTextCollection);
           }
 },[data]);
 useEffect(()=>{
          if(blogImageUrl != "" && newsImageUrl != "" && warImageUrl != ""){
            setBlogCollectionUrl([...blogImageCollectionUrl,blogImageUrl,newsImageUrl,warImageUrl]);
          }
 },[blogImageUrl,newsImageUrl,warImageUrl]);
    useEffect(()=>{
           if(startAnimation){
            console.log("Start Animation");
            setTimeout(()=>{
            setSlideRightFirst(true);
             
            },1000);
           }
    },[startAnimation]);
    useEffect(()=>{
             if(warLoaded && newsLoaded){
              console.log("Time To Show Another Blog Image");
              setAnimateLargeBlogImage(true);
             }
    },[warLoaded,newsLoaded]);
    useEffect(() => {
      let interval; // Declare interval variable here
  
      if (animateLargeBlogImage) {
        interval = setInterval(() => {
          setActivateInterval(prev => prev + 1);
        }, 10000);
      }
  
      // Cleanup function to clear the interval
      return () => {
        if (interval) {
          clearInterval(interval);
        }
      };
  
    }, [animateLargeBlogImage]);
    useEffect(()=>{
        if(activateInterval > 0 && activateInterval < 3 && blogImageCollectionUrl.length > 0){
           console.log("current show :", activateInterval);
           setCurrentBlog(activateInterval);
           setFlipAnimate(false);
        }
        else if (activateInterval != 0) {
          console.log("set to zero");
          setActivateInterval(0);
          setCurrentBlog(0);
          setFlipAnimate(true);
        }
    },[activateInterval]);
    return (
      <>
      {
        !showBack && blogLoaded && (
          <div className='w-full h-full bg-gray-400' >

          </div>
        )
      }
        <div className={` w-full ${showBack && blogLoaded ? "":"hidden"} overflow-hidden absolute flex pb-10  bottom-0 bg-black `} style={{height:"calc(100vh - 50px)" }}  >
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
            src={backImageUrl} className={` ${currentBlog == 2 ? "animate-slideUpDown":""} ${currentBlog == 1 ? "animate-slideLeftRight":""} ${showBack ? "":'hidden'} transition-opacity duration-1000 ease-in-out ${
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
                            <div className='w-5/6 h-2/3 relative ' >
                            <img
            src={resizedImageUrl}
            alt="Blog Image"
            className={`w-full h-auto absolute z-10 object-cover ${blogLoaded ? "opacity-0":"opacity-100"} `}
          
          />
                           <img
            src={blogImageUrl}
            alt="Blog Image"
            className={` ${blogLoaded && currentBlog == 0 ? "animate-fadeIn":"opacity-0"} w-full h-auto absolute z-10 object-cover`}
            onLoad={()=>{
              setBlogLoaded(true);
            }}
          
          />
          {
            blogLoaded && (
              <>
              <img
              src={newsImageUrl}
              alt="Blog Image"
              className={` ${newsLoaded && currentBlog == 1 ? "animate-shakeSlow":"opacity-0"} w-full h-auto absolute z-0 object-cover`}
              onLoad={()=>{
                console.log("news loaded");
                setNewsLoaded(true);
              }}
            />
             <img
              src={warImageUrl}
              alt="Blog Image"
              className={` ${warLoaded && currentBlog == 2 ? "animate-shakeSlow":"opacity-0"} w-full h-auto absolute z-0 object-cover`}
              onLoad={()=>{
                console.log("war loaded");
                setWarLoaded(true);
              }}
            />
            </>
            )
          }
                            
        
                               
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
                            <div className='flex w-full justify-center items-center h-full'>
                                <p>Latest</p>
                            </div>
                      </div>
</div>
            </div>
            <div className={` ${showContent ? "animate-fadeIn animate-slideDown":"opacity-0"} w-2/6 text-white flex flex-col z-10`} >
                     <div className='w-full h-1/2  pb-10 flex justify-center items-end' >
                         <div className='w-full h-1/3 bg-gray-200 flex justify-center items-center overflow-x-hidden' >
                         <h2 className={` ${blogLoaded ? "opacity-0":""} text-2xl font-semibold text-gray-700 mb-4 absolute z-10`}>News Feed</h2>
                         <div className='space-y-4 w-full z-20' >
                         <div  className={` ${currentBlog == 0 ? "animate-fadeInSlow":"animate-revolveDisappear"} bg-white p-4 rounded-lg shadow-md`}>
              <h3 className="lg:text-xl text-center font-medium text-gray-800">{upperTextCollectionSent[currentBlog].title}</h3>
              <p className="text-gray-600 mt-2 w-full word-break animate-colorChange">{upperTextCollectionSent[currentBlog].text}
              </p>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-blue-500 mt-2 inline-block">
                Read more
              </a>
            </div>
            {
              blogLoaded && (
                <>
                 <div  className={` ${currentBlog == 1 ? "animate-shakeSlowUp":"animate-revolveDisappear"} bg-white p-4 rounded-lg shadow-md`}>
              <h3 className="lg:text-xl text-center font-medium text-gray-800">{upperTextCollectionSent[currentBlog].title}</h3>
              <p className="text-gray-600 mt-2 w-full word-break animate-colorChange">{upperTextCollectionSent[currentBlog].text}
              </p>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-blue-500 mt-2 inline-block">
                Read more
              </a>
            </div>
            <div  className={` ${currentBlog == 2 ? "animate-shakeSlowUp":"animate-revolveDisappear"} bg-white p-4 rounded-lg shadow-md`}>
              <h3 className="lg:lg:text-xl text-center font-medium text-gray-800">{upperTextCollectionSent[currentBlog].title}</h3>
              <p className="text-gray-600 mt-2 w-full word-break animate-colorChange">{upperTextCollectionSent[currentBlog].text}
              </p>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-blue-500 mt-2 inline-block">
                Read more
              </a>
            </div>
                </>
              )
            }
           
            </div>
                         </div>
                     </div>
                     <div className='w-full h-1/2  flex flex-col' >
                                <div className='w-full h-1/4  pl-6 pt-2' >
                                {lowerTextCollectionSent[currentBlog].date}
                              </div>
                              <div className={`w-full h-1/2  pl-6 pt-2 pr-12 overflow-hidden ${currentBlog == 0 ? "animate-fadeIn":"hidden" } `} >
                                        <span className='w-full word-break lg:text-2xl animate-colorChange2 ' >
                                        {lowerTextCollectionSent[currentBlog].text}
                                
                                        </span>
                                  </div>
                                  {
                                    blogLoaded && (
                                      <>
                                       <div className={` ${currentBlog == 1 ? "animate-fadeIn":"hidden"} w-full h-1/2  pl-6 pt-2 pr-12 overflow-hidden`} >
                                        <span className='w-full word-break lg:text-2xl animate-colorChange2 ' >
                                              {lowerTextCollectionSent[currentBlog].text}
                                
                                        </span>
                                  </div>
                                  <div className={`w-full h-1/2  pl-6 pt-2 pr-12 overflow-hidden ${currentBlog == 2 ? "animate-fadeIn":"hidden" } `} >
                                        <span className='w-full word-break lg:text-2xl animate-colorChange2 ' >
                                        {lowerTextCollectionSent[currentBlog].text}
                                
                                        </span>
                                  </div>
                                      </>
                                    )
                                  }
                             
                            <div className='w-full h-1/4  flex justify-start items-end pl-6' >
                          <div className='w-full h-1/2  flex justify-start items-center gap-x-4' >
                             <img src="/sabk.jpeg" className=' h-full rounded-full' alt="" />
                             <span className='text-white' >BY SEBAIF MUHAMMED</span>
                          </div>
</div>

</div>
            </div>
            <div className={`w-2/6 text-white  flex flex-col z-10  ${showContent ? "animate-fadeIn animate-slideUp":"opacity-0"} `} >
                  <div className={`${flipAnimate ? "":""} w-full h-1/2 pb-10  flex flex-col justify-end items-center`} >
                         <div className='w-2/3 h-1/3  overflow-hidden pl-2 pr-6 pb-6 mb-6' >
                              <span className='w-full word-break' >
                              China invest more than 2000 dollar
                                              For Investment Reason To Make Economic 
                                            
                              </span>
                         </div>
                         <div  className='w-full h-1/3 relative  flex justify-center items-center' >
                         <div className={` ${readySecondVideo && currentBlog == 2 ? "hidden":""} w-full h-full`} style={{ position: 'relative', paddingTop: '56.25%' }}>

                       
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
        {
        blogLoaded && (
          <div className={` ${readySecondVideo && currentBlog == 2 ? "animate-fadeIn":"hidden"} w-full h-full`} style={{ position: 'relative', paddingTop: '56.25%' }}>

     
          <ReactPlayer
          url={"https://youtu.be/oYiT_H13Vio?si=82Fgnn17pEMkK5t2"}
          width="100%"
          height="100%"
          style={{ position: 'absolute', top: 0, left: 0 }}
          playing={true} // Auto play
          controls={false} // No controls
          muted={true}
          onReady={()=>{
            setReadySecondVideo(true);
          }}
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
        )
       }                
         

                         </div>
                  </div>
                  <div className='w-full h-1/2  flex justify-center items-center' >
                                 <div className='w-full h-2/3 relative' >
                                    <img src={resizedImageUrl} className={` ${blogLoaded ? "animate-fadeOut":""} w-full h-full absolute z-0`} alt="" />
                                    <img
                                     onLoad={()=>{
                                      setBlogLoaded(true);
                                     }}
                                    src={blogImageUrl} className={` ${blogLoaded && currentBlog == 0 ? "animate-fadeIn":"opacity-0"} absolute h-full w-full z-10`} alt="" />
                                     {
            blogLoaded && (
              <>
              <img
              src={newsImageUrl}
              alt="Blog Image"
              className={` ${newsLoaded && currentBlog == 1 ? "animate-shakeSlowUp":"opacity-0"} w-full h-full absolute z-0 object-cover`}
              onLoad={()=>{
                console.log("news loaded");
                setNewsLoaded(true);
              }}
            />
             <img
              src={warImageUrl}
              alt="Blog Image"
              className={` ${warLoaded && currentBlog == 2 ? "animate-shakeSlowUp":"opacity-0"} w-full h-full absolute z-0 object-cover`}
              onLoad={()=>{
                console.log("war loaded");
                setWarLoaded(true);
              }}
            />
            </>
            )
          }
                                 </div>
</div>
            </div>
            <div className={` ${showContent ? "animate-fadeIn":"opacity-0"} w-1/6 text-white z-10`} >
                 <div className='w-full h-full flex justify-center items-center animate-flipY'>
                       <p>
                        SABAA
                       </p>

                 </div>

            </div>
                </>
            )
          }
           
        </div>
        </>
    );
};

export default  HomePageOne;