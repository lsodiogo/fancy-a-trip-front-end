import { useEffect, useState } from "react";



function getMapZoom() { 

   const [isMobile, setIsMobile] = useState(window.innerWidth < 600);

   useEffect(() => {
      window.addEventListener("resize", () => {
         const ismobile = window.innerWidth < 600;

         if (ismobile !== isMobile) {
            setIsMobile(ismobile);
         };
      }, false);
   }, [isMobile]);

   const checkMediaScreen = isMobile ? 0.9 : 1.6;

   return checkMediaScreen;

};

export default {
   getMapZoom
};