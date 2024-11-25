import React from 'react';
import { useEffect,useState,Suspense,lazy } from 'react';
const  SelectedHomePage = ({selected}) => {
      const FirstHomePage=lazy(()=> import('./HomePageOne'));
      useEffect(()=>{
             if(selected == "first" ){
              
             }
      },[selected]);
    return (
         <>
         {
            selected && selected == "first" && (
                <Suspense fallback={<div></div>} >
                <FirstHomePage/>
                </Suspense>
            )
         }
         </>
    );
};

export default  SelectedHomePage;