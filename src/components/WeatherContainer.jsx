import { useEffect, useState } from "react";

import currentDateService from "../services/currentDateService";



function WeatherContainer({detailedTripData}) {  

   const [currentWeatherInfo, setCurrentWeatherInfo] = useState({});
   const [forecastWeatherInfo, setForecastWeatherInfo] = useState([]);

   useEffect(function() {

      (async function() {
         
         const urlCurrentWeatherAPI = `https://api.openweathermap.org/data/2.5/weather?lat=${detailedTripData.lat}&lon=${detailedTripData.lon}&exclude=current&units=metric&appid=41d23e31b9dc8e5bd9d8a5d5f190be2a`;

         const responseCurrentWeatherAPI = await fetch(urlCurrentWeatherAPI);
         const resultCurrentWeatherAPI = await responseCurrentWeatherAPI.json();

         setCurrentWeatherInfo(resultCurrentWeatherAPI);
         
         
         
         const urlForecastWeatherAPI = `https://api.openweathermap.org/data/2.5/forecast?&lat=${detailedTripData.lat}&lon=${detailedTripData.lon}&exclude=current&units=metric&appid=41d23e31b9dc8e5bd9d8a5d5f190be2a`;

         const responseForecastWeatherAPI = await fetch(urlForecastWeatherAPI);
         const resultForecastWeatherAPI = await responseForecastWeatherAPI.json();

         const differentDays = resultForecastWeatherAPI.list.reduce((daysArray, item) => {

            const date = item.dt_txt.substring(0, 10);
            const dayInfo = daysArray.find(obj => obj.date === date);
    
            if (!dayInfo) {
               daysArray.push(
                  {
                     id: item.dt,
                     date: date,
                     min: item.main.temp,
                     max: item.main.temp,
                     description: item.weather?.[0].main,
                     icon: item.weather[0].icon
                  }
               );
               
            } else {
              dayInfo.min = Math.min(dayInfo.min, item.main.temp_min);
              dayInfo.max = Math.max(dayInfo.max, item.main.temp_max);
            };
    
            return daysArray;
         }, []);
    
         setForecastWeatherInfo(differentDays);
      })();
   }, []);


   
   function getDayOfWeek(date) {
      const options = {
         weekday: "long"
      };
      return new Date(date).toLocaleDateString("en-US", options);
   };



   function checkStatusIcon() {   
      if (currentWeatherInfo.weather?.[0].icon != undefined) {
         return (
            <img src={"https://openweathermap.org/img/wn/" + currentWeatherInfo.weather?.[0].icon + ".png"} alt={"weather-icon-" + currentWeatherInfo.weather?.[0].main}/>
         );
      };
   };

   return (
      <>
         <div className="tripWeather">
            <div className="weatherTitle">
               <p>CURRENT WEATHER</p>
            </div>

            <div className="weatherHeader">
               <div className="weatherIcon">
                  {checkStatusIcon()}
               </div>

               <div className="weatherDate">
                  {currentDateService.getCurrentDate()}
               </div> 
            </div>

            <div className="currentWeatherInfo">
               <div className="temperature">
                  {Math.round(currentWeatherInfo.main?.temp)}&deg;
               </div>

               <div className="weatherDescription"> 
                  <div className="weatherCondition">
                     {currentWeatherInfo.weather?.[0].main}
                  </div>  

                  <div className="weatherLocation">
                     {detailedTripData.destination?.city}, {detailedTripData.destination?.country}
                  </div>
               </div>
            </div>  
         </div>



         <div className="forecastWeather">
            <div className="forecastTitle">
               <p>WEATHER FORECAST</p>
            </div>
            
            <div className="forecastInfo">
               {forecastWeatherInfo
                  .slice(1,6)
                  .map(item =>
                     <div key={item.id} className="forecastCard">
                        <div className="forecastTopCard">
                           <p>{item.date}, {getDayOfWeek(item.date)}</p>
                        </div>

                        <div className="forecastBottomCard">
                           <div className="forecastLeftCard">
                              <img src={"https://openweathermap.org/img/wn/" + item.icon + ".png"} alt={"weather-icon-" + item.description}/>
                           </div>

                           <div className="forecastRightCard">
                              <p>{item.description}</p>
                              <p className="tempMin">MIN: {Math.round(item.min)}&deg;</p>
                              <p className="tempMax">MAX: {Math.round(item.max)}&deg;</p>
                           </div>
                        </div>
                     </div>
                  )
               }
            </div>
         </div>
      </> 
   );
   
};

export default WeatherContainer;