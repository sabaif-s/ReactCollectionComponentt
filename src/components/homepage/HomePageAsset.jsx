import React from 'react';
import { useEffect,useState } from 'react';

const  HomePageAsset = (fetchAsset,fetchedHome) => {
       const [sentData,setSentData]=useState([]);
    const upperTextCollection=[ {title:"SABOO" ,text:"SABAA Akkam Nagahaa Jirtaa wanti Hunduu Nagaadhaamii maaltu jira wanti haarofni kanaaf jabaadhu"} ,
        {title:"lorem ipsum" , text: "lorem ipsum new second texts of Saboo News NEW"}, {title:"baalee", text:" SABAA UMAR MUHAMMED 3 FROM BAALEE OROMIA"}
      
      ];
      const lowerTextCollection=[ {date:"march 12, 2022" , text:"China invest more than 2000 dolla  For Investment Reason To Make Economic Growth Of Thousand Years Of Economic Depression" },{date:"jan , 23 2017" , text:"America Tax Payer New From War Zone Pulse New War Front Do Bad Things" },{date:"Feb 22, 2024" , text:"Russia From Ohio Do Russia Things"} ];
      useEffect(() => {
        // Load and filter images
        const loadImages = async (images, specificImages) => {
          const filteredImages = await Promise.all(
            Object.entries(images)
              .filter(([path]) => specificImages.some((name) => path.includes(name)))
              .map(([, importer]) => importer())
          );
          return filteredImages.map((mod) => mod.default); // Extract default exports (URLs)
        };
      
        // Generate assets for the first homepage
        const generateAssetForFirstHomePage = async () => {
            const images = import.meta.glob('/src/assets/images/*.{jpg,jpeg,png,gif,webp}');
          const specificImages = [
            'blogImage.webp',
            'Grid Back.webp',
            'news.webp',
            'war.webp',
            'resizedBlogImage.webp',
          ];
      
          // Load and filter the images
          const filteredImages = await loadImages(images, specificImages);
      
          // Create asset object
          const assetObject = {
            upperTextCollection: upperTextCollection,
            lowerTextCollection: lowerTextCollection,
            images: filteredImages, // Set filtered image URLs directly
          };
      
          // Update the sent data state
          setSentData((prevSentData) => [...prevSentData, assetObject]);
        };
      
        // Trigger the asset generation if conditions are met
        if (fetchAsset && fetchedHome === 'first') {
          generateAssetForFirstHomePage();
        }
      }, [fetchAsset, fetchedHome]);
      return {sentData};
};

export default  HomePageAsset;