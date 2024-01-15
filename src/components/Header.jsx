import { Link, useRoute } from "wouter";



function Header() {

   // FUNCTION TO ADD CSS WHEN LINK IS ACTIVE //
   function LinkActivated(event) {
      const [isActive] = useRoute(event.href);
      return (
         <Link {...event}>
            <a className={isActive ? "active" : ""}>
               {event.children}
            </a>
         </Link>
      );
   };

   return (
      <>
         <header className="header">
            <Link href="/" className="header-left">FANCY A TRIP</Link>

            <div className="header-right">
               <LinkActivated href="/">
                  <img src="/images/home.svg" alt="home-icon"/>
                  <span> HOME</span>
               </LinkActivated>

               <LinkActivated href="/alltrips">
                  <img src="/images/pinmap.svg" alt="map-pinned-icon"/>
                  <span> ALL TRIPS</span>
               </LinkActivated>
               
               <LinkActivated href="/newlocation">
                  <img src="/images/plane.svg" alt="plane-icon"/>
                  <span> TRIP SUGGESTION</span>
               </LinkActivated>

               <LinkActivated href="/about">
                  <img src="/images/user.svg" alt="user-icon"/>
                  <span> THE TRAVELER</span>
               </LinkActivated>
            </div>
         </header>
      </>
   );
   
};

export default Header;