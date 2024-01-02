import * as React from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import  Map, { Marker, NavigationControl } from "react-map-gl";

import { useEffect, useState } from "react";

import mockAPIService from "../services/mockAPIService";


function MapContainer() {

   const [travelCard, setTravelCard] = useState([])

   useEffect(function() {
      (async function() {
         const result = await mockAPIService.getTravelCardList();
         
         setTravelCard(result);
      })();
   }, []);


   
   const token = "pk.eyJ1IjoiZGlvZ29vc2xpbWEiLCJhIjoiY2xxcjRyMXBjMnJxajJpcnlsb2N5Zmp3MSJ9.7OYKXDVANOx-k-Ou4w4G0Q";

   const [centerMap, setCenterMap] = React.useState({
      latitude: 48,
      longitude: 2,
      zoom: 3
   });

   return(
      <>
         <div className="main-map-container">
            <Map
               {...centerMap}
               mapboxAccessToken={token}
               onMove={function (state) {
                  return (
                     setCenterMap(state.centerMap)
                  )
               
               }}
               mapStyle="mapbox://styles/diogooslima/clqshefly00ys01nw2ipqclre"
            >
      
               {travelCard.map(function (info) {
                  return(
                     <>
                        <div className="location-pin">
                           <Marker className="marker" latitude={info.lat} longitude={info.lon}/>
                        </div>
                     </>
                  )
               })}

               <NavigationControl position="bottom-right" showCompass showZoom/>
            </Map>
         </div>
      </>
   );
};


export default MapContainer;