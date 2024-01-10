import { useEffect, useState } from "react";

import mockAPIService from "../services/mockAPIService";
import DetailedMapContainer from "../components/DetailedMapContainer";
import WeatherContainer from "../components/WeatherContainer";
import Slider from "../components/Slider";

function DetailedTripView({pathParams}) {
   
   const [detailedTripData, setDetailedTripData] = useState({});
   const [currentWeatherInfo, setCurrentWeatherInfo] = useState({});
   const [forecastWeatherInfo, setForecastWeatherInfo] = useState([]);

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



         const urlCurrentWeatherAPI = `https://api.openweathermap.org/data/2.5/weather?lat=${foundElement.lat}&lon=${foundElement.lon}&exclude=current&units=metric&appid=41d23e31b9dc8e5bd9d8a5d5f190be2a`;

         const responseWeatherAPI = await fetch(urlCurrentWeatherAPI);
         const resultWeatherAPI = await responseWeatherAPI.json();

         setCurrentWeatherInfo(resultWeatherAPI);



         const urlForecastWeatherAPI = `https://api.openweathermap.org/data/2.5/forecast?&lat=${foundElement.lat}&lon=${foundElement.lon}&exclude=current&units=metric&appid=41d23e31b9dc8e5bd9d8a5d5f190be2a`;

         const responseWeatherAPI2 = await fetch(urlForecastWeatherAPI);
         const resultWeatherAPI2 = await responseWeatherAPI2.json();

         const newResult = [
            resultWeatherAPI2.list[7],
            resultWeatherAPI2.list[15],
            resultWeatherAPI2.list[23],
            resultWeatherAPI2.list[31],
            resultWeatherAPI2.list[39]
         ];

         setForecastWeatherInfo(newResult);

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

               <WeatherContainer
                  key={currentWeatherInfo.id}
                  detailedTripData={detailedTripData}
                  currentWeatherInfo={currentWeatherInfo}
                  forecastWeatherInfo={forecastWeatherInfo}
               />
            </div>

            <div>
               {checkCoordinatesForMap()}
            </div>
         </div>
      </>
   );
   
};

export default DetailedTripView;