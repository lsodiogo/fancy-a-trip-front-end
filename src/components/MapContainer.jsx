import * as React from "react";
import  { Map, Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

import { useEffect, useState } from "react";

import mockAPIService from "../services/mockAPIService";
import mapZoomQueryScreenSize from "../services/mapZoomQueryScreenSize";



function MapContainer() {

   const [travelData, setTravelData] = useState([]);

   useEffect(function() {
      (async function() {
         const result = await mockAPIService.getTravelDataList();
         
         setTravelData(result);
      })();
   }, []);

   const myMapBoxToken = "pk.eyJ1IjoiZGlvZ29vc2xpbWEiLCJhIjoiY2xxcjRseThkM3J1bjJpdGt2MXVhdG9pMiJ9.991yiag4Ybxw7PD3LR4q4Q";
   const myMapBoxStyle = "mapbox://styles/diogooslima/clrcfnuum009w01pdhx8k1gg9";

   function handleClick(info) {
      window.location.href = "/trips/" + info.destination?.city;
   };

   return (
      <>
         <div className="mainMapContainer">
            <Map
               mapboxAccessToken={myMapBoxToken}
               mapStyle={myMapBoxStyle}
               initialViewState={{
                  latitude: 48,
                  longitude: 2,
                  zoom: mapZoomQueryScreenSize.getMapZoom(),
                  interactive: true
               }}
            >
      
               {travelData.map(info =>
                  <Marker
                     color="#697184"
                     key={info.id}
                     latitude={info.lat}
                     longitude={info.lon}
                     onClick={() => handleClick(info)}
                  >
                  </Marker>
               )}

            </Map>
         </div>
      </>
   );

};

export default MapContainer;