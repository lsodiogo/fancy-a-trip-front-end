import * as React from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import  Map, { Marker, NavigationControl } from "react-map-gl";

function DetailedMapContainer({detailedTrip}) {
   
   const token = "pk.eyJ1IjoiZGlvZ29vc2xpbWEiLCJhIjoiY2xxcjRyMXBjMnJxajJpcnlsb2N5Zmp3MSJ9.7OYKXDVANOx-k-Ou4w4G0Q";

   const lat = detailedTrip.lat;
   const lon = detailedTrip.lon;

   return (
      <>
         <div>
            <Map style={{width: "100%", height:"500px", margin:"50px 0"}}
               mapboxAccessToken= {token}
               initialViewState={{
                  latitude: lat,
                  longitude: lon,
                  zoom: 5
               }}
               mapStyle="mapbox://styles/diogooslima/clqshefly00ys01nw2ipqclre">
               
               <Marker latitude={detailedTrip.lat} longitude={detailedTrip.lon}/>
               
               <NavigationControl position="bottom-right" showCompass showZoom/>
            </Map>
         </div>
      </>
   );
   
};

export default DetailedMapContainer;