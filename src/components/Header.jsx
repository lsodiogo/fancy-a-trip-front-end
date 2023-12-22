import { Link } from "wouter";

function Header() {
   return (
      <>
         <header className="header">
            <a className="header-left" href="/">FANCY A TRIP</a>

            <div className="header-right">
               <Link href="/">
                  <img src="images/home.svg" alt="home-icon"/>
                  <span> HOME</span>
               </Link>

               <Link href="/alltrips">
                  <img src="images/suitcase.svg" alt="suitcase-icon"/>
                  <span> ALL TRIPS</span>
               </Link>
               
               <Link href="/newlocation">
                  <img src="images/plane.svg" alt="plane-icon"/>
                  <span> TRIP SUGGESTION</span>
               </Link>

               <Link href="/about">
                  <img src="images/user.svg" alt="user-icon"/>
                  <span> THE TRAVELER</span>
               </Link>
            </div>
         </header>
      </>
   )
};

export default Header;