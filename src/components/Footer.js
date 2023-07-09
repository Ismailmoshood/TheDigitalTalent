export default function Footer(){
   return(
      <div id="section6">
      <div className="upper-footer flex">
      <div className="flex">
      <p style={{marginRight: 28}}>Terms of Service</p>
      <p>Privacy Policy</p>
      </div>
      <div className="footer-icons flex">
         <p>Follow Us</p>
         <img src="/assets/images/facebook-f.png" alt="" />
         <img src="/assets/images/twitter.png" alt="" />
         <img src="/assets/images/instagram.png" alt="" />
         <img src="/assets/images/linkedin-in.png" alt="" />
      </div>
      </div>
      <img id="line" src="/assets/images/Line 3.png" alt="" />
      <div className="lower-footer">
         <div>
            <h4>About</h4>
            <p>Career</p>
            <p>Press & News</p>
            <p>Privacy Policy</p>
            <p>Terms of Services</p>
         </div>
         <div>
         <h4>Categories</h4>
            <p>Graphics & Design</p>
            <p>Digital Marketing</p>
            <p>Full Stack Development</p>
            <p>Video & Animation</p>
            <p>Programming & Tech</p>
         </div>
         <div style={{width: 200}}>
         <h4>Support & IT</h4>
            <p>Help & Support</p>
            <p>Help & Support</p>
            <p>Help & Support</p>
         </div>
         <div>
         <h4>Subscribe</h4>
         <div id="footer-input">
            <input id="ftr-input" placeholder="your email address" type="text"/>
            <button id="footer-btn" type="submit"><h4>Send</h4></button>
         </div>
            
            <h4 id="apps">Apps</h4>
            <div className="store-icons">
               <img src="/assets/images/apple.png" alt="" />
               <p>IOS App</p>
            </div>
            <div className="store-icons">
               <img src="/assets/images/google-play.png" alt="" />
               <p>Android App</p>
            </div>
         </div>
      </div>
      </div>
   )
}