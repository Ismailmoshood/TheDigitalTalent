
import { useState } from "react";

export default function Card({title, imageSrc, description, isFav, rating, reviews, avatar, developer, fee }){
   const [favourite, setFavourite] = useState(isFav)
   const colouredStar = "/assets/images/Star 1.png"
   const star = ""
   return(
      <div style={{width:310, marginRight: 25}}>
         <img src={imageSrc} alt="" />
         <p className="ash">{title}</p>
         <h3>{description}</h3>
         <div className="flex" style={{justifyContent: "space-between"}}>
               <div className="flex">
               <div onClick={()=>{setFavourite(!favourite)}}><img src={favourite?colouredStar:star} alt="" /></div> 
               <p>{rating}<span className="ash">.reviews</span></p>
               </div>
               <p className="ash" style={{marginRight: 20}}>{reviews}</p>
         </div>
         <img src="/assets/images/Line 2.png" alt="" />
         <div className="flex"style={{justifyContent: "space-between"}}>
            <div className="flex">
               <img src={avatar} alt="" style={{marginRight: 10}}/>
               <p className="ash">{developer}</p>
            </div>
            <p style={{marginRight: 20, fontWeight: "bold"}}>{fee}</p>
         </div>
      </div>
   )
}