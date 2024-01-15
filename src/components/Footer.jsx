import { Link } from "wouter";



function Footer() {

   return (
      <>
         <footer className="footer">
            <div className="socialMedia">
               <Link href="/">
                  <img src="/images/home2.svg" alt="home-icon" />
                  <span></span>
               </Link>

               <Link href="/newlocation">
                  <img src="/images/envelope.svg" alt="envelope-icon"/>
                  <span></span>
               </Link>

               <a href="https://www.instagram.com/diogooslima/">
                  <img src="/images/instagram.svg" alt="instagram-icon"/>
                  <span></span>
               </a>

               <a href="https://www.linkedin.com/in/diogooslima/">
                  <img src="/images/linkedin.svg" alt="linkedin-icon"/>
                  <span></span>
               </a>

               <a href="https://www.github.com/lsodiogo/">
                  <img src="/images/github.svg" alt="github-icon"/>
                  <span></span>
               </a>
            </div>

            <p className="copyright">
               Diogo Lima @ 2024
               <br/><br/>
               Images used on this website are for illustrative purposes only and all credits belong to their original authors.
            </p>
         </footer>
      </>
   )
   
};

export default Footer;