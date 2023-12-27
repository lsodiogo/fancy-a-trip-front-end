import { Link } from "wouter";

function TravelCards({travelInfo}) {
   return (
      <>       
         <Link to={"/trips/" + travelInfo.destination.city}>
            <div className="travelCard">
               <img className="travelCardImage" src={travelInfo.coverIMG} alt={travelInfo.destination.city}/>
               
               <div className="cardInfo">
                  <p>{travelInfo.destination.city}, {travelInfo.destination.country}</p>
                  <p>{travelInfo.checkin} → {travelInfo.checkout}</p>
               </div>
            </div>
         </Link>
      </>
   )
};

export default TravelCards;