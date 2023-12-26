import { Link } from "wouter";

function Header() {
   return (
      <>
         <header className="header">
            <Link className="header-left" to="/">FANCY A TRIP</Link>

            <div className="header-right">
               <Link to="/">
                  <img src="images/home.svg" alt="home-icon"/>
                  <span> HOME</span>
               </Link>

               <Link to="/alltrips">
                  <img src="images/suitcase.svg" alt="suitcase-icon"/>
                  <span> ALL TRIPS</span>
               </Link>
               
               <Link to="/newlocation">
                  <img src="images/plane.svg" alt="plane-icon"/>
                  <span> TRIP SUGGESTION</span>
               </Link>

               <Link to="/about">
                  <img src="images/user.svg" alt="user-icon"/>
                  <span> THE TRAVELER</span>
               </Link>
            </div>
         </header>
      </>
   )
};

export default Header;