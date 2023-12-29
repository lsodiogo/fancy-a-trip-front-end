import { useEffect, useState } from "react";

import mockAPIService from "../services/mockAPIService";
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

         console.log(resultWeatherAPI);
         setCurrentWeatherInfo(resultWeatherAPI);



         const urlForecastWeatherAPI = `https://api.openweathermap.org/data/2.5/forecast?&lat=${foundElement.lat}&lon=${foundElement.lon}&exclude=current&units=metric&appid=41d23e31b9dc8e5bd9d8a5d5f190be2a`

         const responseWeatherAPI2 = await fetch(urlForecastWeatherAPI);
         const resultWeatherAPI2 = await responseWeatherAPI2.json();

         console.log(resultWeatherAPI2)

         const newResult = [
            resultWeatherAPI2.list[0],
            resultWeatherAPI2.list[8],
            resultWeatherAPI2.list[16],
            resultWeatherAPI2.list[24],
            resultWeatherAPI2.list[32]
         ]

         console.log(newResult);
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

            <div className="mapDetailedPage">
               <img src="/images/map.jpg" alt=""/>
            </div>
            
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