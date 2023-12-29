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
                  {console.log(new Date)}Monday, 20 Aug 2018
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

            <h3>Forecast:</h3>
            <div className="">
               {forecastWeatherInfo?.map(item => {
                  return(
                     <>
                        <p>{item.dt_txt} :</p>
                        <p>{Math.round(item.main?.temp) + " ºC"}</p>
                        <img src={"https://openweathermap.org/img/wn/" + item.weather?.[0].icon + ".png"} alt={"weather-icon-" + item.weather?.[0].main}/>
                        <p>{item.weather?.[0].main}</p>
                        <hr />
                     </>
                  )
               })}
            </div>   
         </div>
      </>
   )
};

export default WeatherContainer;