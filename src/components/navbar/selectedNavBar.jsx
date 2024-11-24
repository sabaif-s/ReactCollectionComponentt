import React from 'react';
import { useEffect,useState } from 'react';
import { StickyNavbar } from './NavBarCommon';
import { NavbarForDropdownWithMultipleLanguages } from './NavBarDropDownLang';
const  SelectedNavBar = ({selected,selectedNames}) => {
    

    

        
     
   return (
    <>
    {
      selected && selected == "sticky" && (
            <StickyNavbar selectedNames={selectedNames}/>
        )
    }
    {
        selected && selected == "language" && (
            <NavbarForDropdownWithMultipleLanguages selectedNames={selectedNames} />
        )
    }
    </>
   )
};

export default  SelectedNavBar;