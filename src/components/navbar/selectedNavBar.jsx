import React from 'react';
import { useEffect,useState,Suspense,lazy } from 'react';
// import { StickyNavbar } from './NavBarCommon';
// import { NavbarForDropdownWithMultipleLanguages } from './NavBarDropDownLang';
const  SelectedNavBar = ({selected,selectedNames}) => {
    const [SelectedComponent,setSelectedComponent]=useState(null);
    const StickyNavbar=lazy(()=> import('./NavBarCommon'));
    const SearchNavBar=lazy(()=> import('./NavBarSearch'));
    const LanguageNavBar=lazy(()=> import('./NavBarDropDownLang'));
    const MegaMenuNavBar=lazy(()=> import('./NavBarMegaMenu'));
    const AvatarNavBar=lazy(()=>import('./NavBarAvatar'));
    const [imagePath,setImagePath]=useState("");

    useEffect(()=>{
        if(selected == "avatar"){
            const imagePath2='/sabk.jpeg';
            setImagePath(imagePath2);
        }
    },[selected]);

        
     
   return (
    <>
    {
      selected && selected == "sticky" && (
        <Suspense fallback={<div></div>}>
        <StickyNavbar selectedNames={selectedNames} />
      </Suspense>
        )
    }
    {
        selected && selected == "language" && (
            <Suspense fallback={<div></div>}>
            <LanguageNavBar selectedNames={selectedNames} />
          </Suspense>
        )
    }
     {
        selected && selected == "search" && (
            <Suspense fallback={<div></div>}>
            <SearchNavBar selectedNames={selectedNames} />
          </Suspense>
        )
    }
     {
        selected && selected == "megaMenu" && (
            <Suspense fallback={<div></div>}>
            <MegaMenuNavBar selectedNames={selectedNames} />
          </Suspense>
        )
    }
     {
        selected && selected == "avatar" && (
            <Suspense fallback={<div></div>}>
            <AvatarNavBar imagePath={imagePath} selectedNames={selectedNames} />
          </Suspense>
        )
    }
    </>
   )
};

export default  SelectedNavBar;