import * as React from "react";
import  Map, { Marker, NavigationControl } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

import mapZoomQueryScreenSize from "../services/mapZoomQueryScreenSize";



function DetailedMapContainer({detailedTripData}) {
   
   const myMapBoxToken = import.meta.env.VITE_MAPBOX_API_KEY;
   const myMapBoxStyle = import.meta.env.VITE_MAPBOX_MAP_STYLE;

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