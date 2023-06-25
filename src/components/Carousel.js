import React from "react"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Card from "./Card"
import Slider from 'react-slick'


 const dataArray =[
   {title: "video editing", 
   imageSrc: "/assets/images/Rectangle 51.png", 
   description: "I will give a super cinematography picture videos", 
   isFav: true,
    rating: 4.08, 
    reviews: 67,
   avatar: "/assets/images/Ellipse 3.png", 
   developer: "Masajid Said", 
   fee: "$563" },
   {title: "Art and Graphic Design", 
   imageSrc: "/assets/images/Rectangle 52.png", 
   description: "I will give a super cinematography picture videos", 
   isFav: true,
    rating: 4.08, 
    reviews: 67,
   avatar: "/assets/images/Ellipse 3.png", 
   developer: "Masajid Said", 
   fee: "$563" },
   {title: "Web Development", 
   imageSrc: "/assets/images/Rectangle 53.png", 
   description: "I will give a super cinematography picture videos", 
   isFav: true,
    rating: 4.08, 
    reviews: 67,
   avatar: "/assets/images/Ellipse 3.png", 
   developer: "Masajid Said", 
   fee: "$563" },
   {title: "Content Development", 
   imageSrc: "/assets/images/Rectangle 5.png", 
   description: "I will give a super cinematography picture videos", 
   isFav: true,
    rating: 4.08, 
    reviews: 67,
   avatar: "/assets/images/Ellipse 3.png", 
   developer: "Masajid Said", 
   fee: "$563" },
   {title: "video editing", 
   imageSrc: "/assets/images/Rectangle 51.png", 
   description: "I will give a super cinematography picture videos", 
   isFav: true,
    rating: 4.08, 
    reviews: 67,
   avatar: "/assets/images/Ellipse 3.png", 
   developer: "Masajid Said", 
   fee: "$563" },
   {title: "Art and Graphic Design", 
   imageSrc: "/assets/images/Rectangle 52.png", 
   description: "I will give a super cinematography picture videos", 
   isFav: true,
    rating: 4.08, 
    reviews: 67,
   avatar: "/assets/images/Ellipse 3.png", 
   developer: "Masajid Said", 
   fee: "$563" },
   {title: "Web Development", 
   imageSrc: "/assets/images/Rectangle 53.png", 
   description: "I will give a super cinematography picture videos", 
   isFav: true,
    rating: 4.08, 
    reviews: 67,
   avatar: "/assets/images/Ellipse 3.png", 
   developer: "Masajid Said", 
   fee: "$563" },
   {title: "Content Development", 
   imageSrc: "/assets/images/Rectangle 5.png", 
   description: "I will give a super cinematography picture videos", 
   isFav: true,
    rating: 4.08, 
    reviews: 67,
   avatar: "/assets/images/Ellipse 3.png", 
   developer: "Masajid Said", 
   fee: "$563" }
 ]
 export default function Carousel(){
  const test = dataArray.map(arr => {
    return (<Card title={arr.title} imageSrc={arr.imageSrc} description={arr.description} isFav={arr.isFav} rating={arr.rating} reviews={arr.reviews} avatar={arr.avatar} developer={arr.developer} fee={arr.fee} />
  )})
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    accessibility: false,
    arrows: false,
    autoplaySpeed: 1300,
    autoplay: true
  };
   return(
      <div id="section2">
      <div className="section2-title">
      <h1>Trending Projects</h1>
      <p>View the most selling services</p>
      </div>
      <div className='content'>
      <Slider {...sliderSettings}>
      {test}
      </Slider>
    </div>
      </div>
      
   )
 }


  
