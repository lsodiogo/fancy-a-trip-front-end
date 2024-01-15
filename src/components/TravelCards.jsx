import { Link } from "wouter";



function TravelCards({travelData}) {
   
   return (
      <>       
         <Link href={"/trips/" + travelData.destination.city}>

            <div className="travelCard">
               <img className="travelCardImage" src={travelData.coverIMG} alt={travelData.destination.city}/>
               
               <div className="cardInfo">
                  <p>{travelData.destination.city}, {travelData.destination.country}</p>
                  <p>{travelData.checkin} → {travelData.checkout}</p>
               </div>
            </div>
            
         </Link>
      </>
   );
   
};

export default TravelCards;