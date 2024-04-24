import * as React from "react";
import  Map, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

import mapZoomQueryScreenSize from "../services/mapZoomQueryScreenSize";



function DetailedMapContainer({detailedTripData}) {
   
   const myMapBoxToken = "pk.eyJ1IjoiZGlvZ29vc2xpbWEiLCJhIjoiY2xxcjRseThkM3J1bjJpdGt2MXVhdG9pMiJ9.991yiag4Ybxw7PD3LR4q4Q";
   const myMapBoxStyle = "mapbox://styles/diogooslima/clrcfnuum009w01pdhx8k1gg9";

   const lat = detailedTripData.lat;
   const lon = detailedTripData.lon;

   return (
      <>
         <div className="detailedMapContainer">
            <Map 
               mapboxAccessToken={myMapBoxToken}
               mapStyle={myMapBoxStyle}
               initialViewState={{
                  latitude: lat,
                  longitude: lon,
                  zoom: mapZoomQueryScreenSize.getMapZoom(),
                  interactive: true
               }}
            >
               
               <Marker
                  color="#697184"
                  latitude={detailedTripData.lat}
                  longitude={detailedTripData.lon}
               />
            </Map>
         </div>
      </>
   );
   
};

export default DetailedMapContainer;