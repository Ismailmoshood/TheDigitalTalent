export default function TitleContent(){
return(
      <div className="title-body">
         <div className="title-text">
            <h1>Get the top notch Freelancer for your project</h1>
            <p>The Digital talent is an innovative platform <br/>that connect clients with top-notch freelancers.</p>
           <div className="flex title-input">
           <input placeholder="What are you looking for?" />
           <button className="button">search</button>
           </div>
           <p>Most search talent</p>
            <div>
            <button className="search-btn">Developer</button>
            <button className="search-btn">Developer</button>
            <button className="search-btn">Developer</button>
            <button className="search-btn">Developer</button>
            </div>
         </div>
         <div className="title-img">
            <img src="/assets/images/Rectangle 2.png" alt="" />
         </div>
      </div>
   )
}
// import Data from "../mock-data.json"
// import { useState } from "react"
// const [query, setQuery] = useState("")
   // onChange={event => setQuery(event.target.value)} 
   // console.log(query)
 /* {
                 Data.filter(post => {
                   if (query === '') {
                     return post;
                   } else if (post.title.toLowerCase().includes(query.toLowerCase())) {
                     return post;
                   }
                 }).map((post, index) => (
                   <div className="box" key={index}>
                     <p>{post.title}</p>
                     <p>{post.author}</p>
                   </div>
                 ))
               } */