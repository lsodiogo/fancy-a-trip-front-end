import { Link } from "wouter"

function Footer() {
   return (
      <>
         <footer className="footer">
            <div className="socialMedia">
               <a href="/">
                  <img src="images/home.svg" alt="home-icon"/>
               </a>

               <a href="#">
                  <img src="images/email.svg" alt="email-icon"/>
               </a>

               <a href="https://www.instagram.com/diogooslima/">
                  <img src="images/instagram.svg" alt="instagram-icon"/>
               </a>
            </div>

            <p className="copyright">Diogo Lima @ 2024</p>
         </footer>
      </>
   )
};

export default Footer;