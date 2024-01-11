import * as React from "react";
import  Map, { Marker, NavigationControl } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

function DetailedMapContainer({detailedTripData}) {
   
   const myToken = "pk.eyJ1IjoiZGlvZ29vc2xpbWEiLCJhIjoiY2xxcjRyMXBjMnJxajJpcnlsb2N5Zmp3MSJ9.7OYKXDVANOx-k-Ou4w4G0Q";

   const lat = detailedTripData.lat;
   const lon = detailedTripData.lon;

   return (
      <>
         <div className="detailedMapContainer">
            <Map 
               mapboxAccessToken={myToken}
               mapStyle="mapbox://styles/diogooslima/clqshefly00ys01nw2ipqclre"
               initialViewState={{
                  latitude: lat,
                  longitude: lon,
                  zoom: 5,
                  interactive: false
               }}
            >
               
               <Marker
                  color="#3A4D39"
                  latitude={detailedTripData.lat}
                  longitude={detailedTripData.lon}
               />
               
               <NavigationControl position="bottom-right" showCompass showZoom/>
            </Map>
         </div>
      </>
   );
   
};

export default DetailedMapContainer;