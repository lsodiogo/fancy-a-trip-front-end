import { useEffect, useState } from "react";

import mockAPIService from "../services/mockAPIService";

function DetailedTripView({pathParams}) {
   
   const [detailedTrip, setDetailedTrip] = useState({})

   useEffect(function() {
      (async function() {
         const result = await mockAPIService.getTravelCardList()

         const foundElement = result.find(obj => {
            return obj.destination.city == pathParams
         })

         setDetailedTrip(foundElement)
      })()
   }, []);




   const [weatherInfo, setWeatherInfo] = useState({});
   const [isLoading, setIsLoading] = useState(false);

   const urlWeatherAPI = `https://api.openweathermap.org/data/2.5/weather?lat=${detailedTrip.lat}&lon=${detailedTrip.lon}&exclude=current&appid=41d23e31b9dc8e5bd9d8a5d5f190be2a&units=metric`;

   useEffect(function(){
      setIsLoading(true);
      
      (async function() {
         const response = await fetch(urlWeatherAPI)
         const result = await response.json()

         setIsLoading(false)
         console.log(result)
         setWeatherInfo(result)
      })()
   }, [])


   

   return (
      <>
         <div className="mainContainerDetailedPage">
            <div className="titleDetailedPage">
               <h1>{detailedTrip.destination?.city}, {detailedTrip.destination?.country}</h1>
               <p><img src="images/departure.svg" alt="departure-icon"/> {detailedTrip.checkin}</p>
               <p><img src="images/arrival.svg" alt="arrival-icon"/> {detailedTrip.checkout}</p>
            </div>

            <div className="sliderDetailedPage">
               <p>SLIDER HERE</p>
            </div>

            <div className="mapDetailedPage">
               <img src="images/map.jpg" alt=""/>
            </div>
            
            <div className="infoDetailedPage">
               <div className="tripDescription">
                  <p>{detailedTrip.description}</p>
               </div>

               <div className="tripWeather">
                  <p>WEATHER HERE</p>
                  <span>{isLoading ? <p>Loading...</p> : null}</span>
                  {/* <p>{weatherInfo?.name}</p>
                  <p>{weatherInfo?.weather.main}</p>
                  <p>{weatherInfo?.main.temp}ºC</p> */}
               </div>
            </div>
         </div>
      </>
   )
};

export default DetailedTripView;