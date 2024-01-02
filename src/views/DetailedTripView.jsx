import { useEffect, useState } from "react";

import mockAPIService from "../services/mockAPIService";
import DetailedMapContainer from "../components/DetailedMapContainer";
import WeatherContainer from "../components/WeatherContainer";

function DetailedTripView({pathParams}) {
   
   const [detailedTrip, setDetailedTrip] = useState({});
   const [currentWeatherInfo, setCurrentWeatherInfo] = useState({});
   const [forecastWeatherInfo, setForecastWeatherInfo] = useState([]);

   useEffect(function() {

      (async function() {
         const responseMockAPI = await mockAPIService.getTravelCardList();
         const foundElement = responseMockAPI.find(obj => {
            return obj.destination.city == pathParams;
         });

         setDetailedTrip(foundElement);



         const urlCurrentWeatherAPI = `https://api.openweathermap.org/data/2.5/weather?lat=${foundElement.lat}&lon=${foundElement.lon}&exclude=current&units=metric&appid=41d23e31b9dc8e5bd9d8a5d5f190be2a`;

         const responseWeatherAPI = await fetch(urlCurrentWeatherAPI);
         const resultWeatherAPI = await responseWeatherAPI.json();

         setCurrentWeatherInfo(resultWeatherAPI);



         const urlForecastWeatherAPI = `https://api.openweathermap.org/data/2.5/forecast?&lat=${foundElement.lat}&lon=${foundElement.lon}&exclude=current&units=metric&appid=41d23e31b9dc8e5bd9d8a5d5f190be2a`;

         const responseWeatherAPI2 = await fetch(urlForecastWeatherAPI);
         const resultWeatherAPI2 = await responseWeatherAPI2.json();

         /* let objectDate = new Date();
         let year = objectDate.getFullYear();
         let month = objectDate.getMonth()+1;
         let day = objectDate.getDate();
         let dateFormat = `${year}-0${month}-0${(+day+1)} 00:00:00` */

         /* const newResult = resultWeatherAPI2.list.find(obj => {
            obj === dateFormat
         }); */

         const newResult = [
            resultWeatherAPI2.list[0],
            resultWeatherAPI2.list[8],
            resultWeatherAPI2.list[16],
            resultWeatherAPI2.list[24],
            resultWeatherAPI2.list[32]
         ];

         /* const newResult = [
            resultWeatherAPI2.list[3],
            resultWeatherAPI2.list[11]
         ] */

         setForecastWeatherInfo(newResult);

      })();
   }, []);

   return (
      <>
         <div className="mainContainerDetailedPage">
            <div className="titleDetailedPage">
               <h1>{detailedTrip.destination?.city}, {detailedTrip.destination?.country}</h1>
               <p><img src="/images/departure.svg" alt="departure-icon"/> {detailedTrip.checkin}</p>
               <p><img src="/images/arrival.svg" alt="arrival-icon"/> {detailedTrip.checkout}</p>
            </div>

            <div className="sliderDetailedPage">
               <p>SLIDER HERE</p>
               <img src={detailedTrip.coverIMG} alt={detailedTrip.destination?.city}/>
            </div>

            {/* <DetailedMapContainer
               key={detailedTrip.id}
               detailedTrip={detailedTrip}
            /> */}
            
            <div className="infoDetailedPage">
               <div className="tripDescription">
                  {detailedTrip.description}
               </div>

               <WeatherContainer
                  key={currentWeatherInfo.id}
                  detailedTrip={detailedTrip}
                  currentWeatherInfo={currentWeatherInfo}
                  forecastWeatherInfo={forecastWeatherInfo}
               />
            </div>
         </div>
      </>
   )
};

export default DetailedTripView;