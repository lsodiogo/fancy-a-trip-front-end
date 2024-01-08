import * as React from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import  Map, { Marker, NavigationControl } from "react-map-gl";

import { useEffect, useState } from "react";
import { Link } from "wouter";

import mockAPIService from "../services/mockAPIService";

function MapContainer() {

   const [travelData, setTravelData] = useState([]);

   useEffect(function() {
      (async function() {
         const result = await mockAPIService.getTravelDataList();
         
         setTravelData(result);
      })();
   }, []);
   


   const token = "pk.eyJ1IjoiZGlvZ29vc2xpbWEiLCJhIjoiY2xxcjRyMXBjMnJxajJpcnlsb2N5Zmp3MSJ9.7OYKXDVANOx-k-Ou4w4G0Q";



   function handleClick(info) {
      window.location.href = "/trips/" + info.destination?.city;
   };

   return (
      <>
         <div className="mainMapContainer">
            <Map
               mapboxAccessToken={token}
               initialViewState={{
                  latitude: 48,
                  longitude: 2,
                  zoom: 3,
                  interactive: false
               }}
               mapStyle="mapbox://styles/diogooslima/clqshefly00ys01nw2ipqclre"
            >
      
               {travelData.map(info =>
                  <Marker
                     key={info.id}
                     onClick={() => {
                        handleClick(info)
                     }}
                     color="#3A4D39"
                     latitude={info.lat}
                     longitude={info.lon}
                  />
               )}

               <NavigationControl position="bottom-right" showCompass showZoom/>
            </Map>
         </div>
      </>
   );

};

export default MapContainer;