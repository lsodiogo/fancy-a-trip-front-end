import { useEffect, useState } from "react"

import Hero from "../components/Hero";
import TravelCards from "../components/TravelCards";
import MapContainer from "../components/MapContainer";
import mockAPIService from "../services/mockAPIService";

function HomeView() {

   const [travelCard, setTravelCard] = useState({})

   useEffect(function() {
      (async function() {
         const result = await mockAPIService.getTravelCardList()
         
         setTravelCard(result)
         console.log(result)
      })()
    }, [])

   return (
      <>
         <Hero/>

         <TravelCards/>

         <MapContainer/>     
      </>
   )
};

export default HomeView;