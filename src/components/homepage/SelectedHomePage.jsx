import React from 'react';
import { useEffect,useState,Suspense,lazy } from 'react';
import HomePageAsset from './HomePageAsset';
const  SelectedHomePage = ({selected}) => {
      const FirstHomePage=lazy(()=> import('./HomePageOne'));
      const [fetchAsset,setFetchAsset]=useState(false);
      const [fetchedHome,setFetchedHome]=useState("");
      const {sentData}=HomePageAsset(fetchAsset,fetchedHome);
      const [readyToRender,setReadyToRender]=useState(false);
      useEffect(()=>{
             if(selected == "first" ){
               setFetchAsset(true);
               setFetchedHome("first");
             }
      },[selected]);
      useEffect(()=>{
           console.log("Sent Data",sentData);
           if(sentData.length > 0){
            setReadyToRender(true);
           }
      },[sentData]);
    return (
         <>
         {
            selected && selected == "first" && readyToRender && (
                <Suspense fallback={<div></div>} >
                <FirstHomePage data={sentData} />
                </Suspense>
            )
         }
         </>
    );
};

export default  SelectedHomePage;