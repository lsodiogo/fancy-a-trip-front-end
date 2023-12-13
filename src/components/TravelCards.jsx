function TravelCards({travelInfo}) {
   return (
      <>
         <div className="travelCard">
            <img className="travelCardImage" src={travelInfo.imageURL} alt=""/>
            <div className="cardInfo">
            <p>{travelInfo.trip.city}, {travelInfo.trip.country}</p>
            <p>{travelInfo.date}</p>
            </div>
         </div>
      </>
   )
};

export default TravelCards;