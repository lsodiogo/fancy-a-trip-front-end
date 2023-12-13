import { Link } from "wouter"

function TravelCards() {
   return (
      <>
         <div className="travelCardsContainer">
            <div className="travelCard">
               <img className="travelCardImage" src="images/map.jpg" alt=""/>
               <div className="cardInfo">
               <p>Berlin</p>
               <p>2021-07-12</p>
               </div>
            </div>

            <div className="travelCard">
               <img className="travelCardImage" src="images/map.jpg" alt=""/>
               <div className="cardInfo">
               <p>Berlin</p>
               <p>2021-07-12</p>
               </div>
            </div>

            <div className="travelCard">
               <img className="travelCardImage" src="images/map.jpg" alt=""/>
               <div className="cardInfo">
               <p>Berlin</p>
               <p>2021-07-12</p>
               </div>
            </div>

            <div className="travelCard">
               <img className="travelCardImage" src="images/map.jpg" alt=""/>
               <div className="cardInfo">
               <p>Berlin</p>
               <p>2021-07-12</p>
               </div>
            </div>
         </div>
      </>
   )
};

export default TravelCards;