import GetCurrentDate from "./GetCurrentDate";

function WeatherContainer({detailedTrip, currentWeatherInfo, forecastWeatherInfo}) {  
      
      return (
      <>
         <div className="tripWeather">
            <div className="weatherTitle">
               <p>WEATHER</p>
            </div>

            <div className="weatherHeader">
               <div className="weatherIcon">
                  <img src={"https://openweathermap.org/img/wn/" + currentWeatherInfo.weather?.[0].icon + ".png"} alt={"weather-icon-" + currentWeatherInfo.weather?.[0].main}/>
               </div>

               <div className="weatherDate">
                  <GetCurrentDate/>
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
                     {detailedTrip.destination?.city}, {detailedTrip.destination?.country}
                  </div>
               </div>
            </div>  
         </div>



         <div className="forecastWeather">
            <div className="forecastTitle">
               <p>FORECAST</p>
            </div>
            
            <div className="forecastInfo">
               {forecastWeatherInfo?.map(item => {
                  return(
                     <>
                        <div className="forecastCard">
                           <div className="forecastTopCard">
                              <p>{item.dt_txt.substring(0,10)}</p>
                           </div>

                           <div className="forecastBottomCard">
                              <div className="forecastLeftCard">
                                 <img src={"https://openweathermap.org/img/wn/" + item.weather?.[0].icon + ".png"} alt={"weather-icon-" + item.weather?.[0].main}/>
                              </div>

                              <div className="forecastRightCard">
                                 <p>{Math.round(item.main?.temp)}&deg;</p>
                                 <p>{item.weather?.[0].main}</p>
                              </div>
                           </div>
                           
                        </div>
                     </>
                  )
               })}
            </div>
         </div>
      </> 
   );
   
};

export default WeatherContainer;