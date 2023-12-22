import { useEffect, useState } from "react";

import mockAPIService from "../services/mockAPIService";

function DetailedTripView({pathParams}) {
   
   const [detailedTrip, setDetailedTrip] = useState({})

   useEffect(function() {
      (async function() {
         const result = await mockAPIService.getTravelCardList()

         const foundElement = result.find(obj => {
            return obj.destination.city == pathParams
         })

         setDetailedTrip(foundElement)
      })()
   }, [])

   return (
      <>
        <p>{detailedTrip.destination?.city}, {detailedTrip.destination?.country}</p>
        <p>{detailedTrip.checkin} - {detailedTrip.checkout}</p>
        <p>slider</p>
        <p>map</p>
        <p>{detailedTrip.description}</p>
        <p>weather</p>
      </>
   )
};

export default DetailedTripView;