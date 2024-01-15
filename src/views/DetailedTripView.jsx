import { useEffect, useState } from "react";

import mockAPIService from "../services/mockAPIService";
import DetailedMapContainer from "../components/DetailedMapContainer";
import WeatherContainer from "../components/WeatherContainer";
import Slider from "../components/Slider";



function DetailedTripView({pathParams}) {
   
   const [detailedTripData, setDetailedTripData] = useState({});

   useEffect(function() {

      (async function() {
         const responseMockAPI = await mockAPIService.getTravelDataList();
         const foundElement = responseMockAPI.find(obj => {
            return obj.destination.city == pathParams;
         });

         // CONDITION TO PAGE NOT FOUND WHEN SEARCHING A NON-EXISITING CITY // 
         if (!foundElement) {
            window.location.href = "/pagenotfound";
            return;
         };

         setDetailedTripData(foundElement);
      })();
   }, []);



   // CONDITIONAL RENDERING TO AVOID RACE CONDITION //
   function checkCoordinatesForMap() {
      if ((detailedTripData.lat && detailedTripData.lon) != undefined) {
         return (
            <DetailedMapContainer
               key={detailedTripData.id}
               detailedTripData={detailedTripData}
            />
         );
      };
   };



   // CONDITIONAL RENDERING TO AVOID RACE CONDITION //
   function checkCoordinatesForWeather() {
      if ((detailedTripData.lat && detailedTripData.lon) != undefined) {
         return (
            <WeatherContainer
               key={detailedTripData.id}
               detailedTripData={detailedTripData}
            /> 
         );
      };
   };

   return (
      <>
         <div className="mainContainerDetailedPage">           
            <div className="titleDetailedPage">
               <h1>{detailedTripData.destination?.city}, {detailedTripData.destination?.country}</h1>
               <p><img src="/images/departure.svg" alt="departure-icon"/> {detailedTripData.checkin}</p>
               <p><img src="/images/arrival.svg" alt="arrival-icon"/> {detailedTripData.checkout}</p>
            </div>

            <div>
               <Slider
                  key={detailedTripData.id}
                  detailedTripData={detailedTripData}
               />
            </div>
            
            <div className="infoDetailedPage">
               <div className="tripDescription">
                  {detailedTripData.description}
               </div>

               {checkCoordinatesForWeather()}         
            </div>
         </div>

         <div>
            {checkCoordinatesForMap()}
         </div>
      </>
   );
   
};

export default DetailedTripView;