import { useMediaQuery } from 'react-responsive';

const ScreenSize = () => {
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const isDesktopLarge=useMediaQuery({minWidth:1440})
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isLargeMobile=useMediaQuery({minHeight:700});
  const smallHeightMobile=useMediaQuery({maxHeight:680});

   return {isDesktop,isLargeMobile,isMobile,isTablet,isDesktopLarge,smallHeightMobile}
};

export default ScreenSize;
