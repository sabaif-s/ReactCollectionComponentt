import React from 'react';
import { useEffect,useState } from 'react';
import { StickyNavbar } from './NavBarCommon';
const  SelectedNavBar = ({selected}) => {
    const [names,setNames]=useState({});
    const [links,setLinks]=useState({});

    useEffect(()=>{
        if(selected == "sticky"){
          const generatedStickyNames= generateNamesStick();
          const generatedStickyLinks= generateLinksStick();

        }
    },[selected]);
     
   return (
    <>
    {
      selected && selected == "sticky" && (
            <StickyNavbar/>
        )
    }
    </>
   )
};

export default  SelectedNavBar;