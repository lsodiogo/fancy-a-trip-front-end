import * as React from "react";
import  Map, { Marker, NavigationControl, Popup } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

import { useEffect, useState } from "react";

import mockAPIService from "../services/mockAPIService";

function MapContainer() {

   const [travelData, setTravelData] = useState([]);

   useEffect(function() {
      (async function() {
         const result = await mockAPIService.getTravelDataList();
         
         setTravelData(result);
      })();
   }, []);
   


   const myToken = "pk.eyJ1IjoiZGlvZ29vc2xpbWEiLCJhIjoiY2xxcjRyMXBjMnJxajJpcnlsb2N5Zmp3MSJ9.7OYKXDVANOx-k-Ou4w4G0Q";



   function handleClick(info) {
      window.location.href = "/trips/" + info.destination?.city;
   };   

   return (
      <>
         <div className="mainMapContainer">
            <Map
               mapboxAccessToken={myToken}
               mapStyle="mapbox://styles/diogooslima/clqshefly00ys01nw2ipqclre"
               initialViewState={{
                  latitude: 48,
                  longitude: 2,
                  zoom: 3,
                  interactive: true
               }}
            >
      
               {travelData.map(info =>
                  <Marker
                     color="#3A4D39"
                     key={info.id}
                     latitude={info.lat}
                     longitude={info.lon}
                     onClick={() => handleClick(info)}
                  > 
                  </Marker>
               )}

               <NavigationControl position="bottom-right" showCompass showZoom/>
            </Map>
         </div>
      </>
   );

};

export default MapContainer;