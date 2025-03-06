import React, { useState } from 'react'
import Slider from 'react-slick'
import { Link } from 'react-router-dom';

export default function Exclusively() {
    const data = [
        { id: 1, img: "images/cop1.jpg",para:"Enter a realm of storied halls, sophisticated delights and unrivalled indulgence. Immerse yourself in the grandeur of luxury at our exquisite palaces, hotels, resorts and safaris.", title: "TIMELESS" },
        { id: 2, img: "images/cop2.jpg",para:"Enter a realm of storied halls, sophisticated delights and unrivalled indulgence. Immerse yourself in the grandeur of luxury at our exquisite palaces, hotels, resorts and safaris.", title: "LIMITED PERIOD ESCAPES" },
        { id: 3, img: "images/cop3.jpg",para:"Enter a realm of storied halls, sophisticated delights and unrivalled indulgence. Immerse yourself in the grandeur of luxury at our exquisite palaces, hotels, resorts and safaris.", title: "LIVING PALACES" },
        { id: 4, img: "images/cop1.jpg",para:"Enter a realm of storied halls, sophisticated delights and unrivalled indulgence. Immerse yourself in the grandeur of luxury at our exquisite palaces, hotels, resorts and safaris.", title: "CITY HOTELS" },
        { id: 5, img: "images/cop2.jpg",para:"Enter a realm of storied halls, sophisticated delights and unrivalled indulgence. Immerse yourself in the grandeur of luxury at our exquisite palaces, hotels, resorts and safaris.", title: "IDYLLIC RESORTS" },
        { id: 6, img: "images/cop3.jpg",para:"Enter a realm of storied halls, sophisticated delights and unrivalled indulgence. Immerse yourself in the grandeur of luxury at our exquisite palaces, hotels, resorts and safaris.", title: "NEW OPENINGS" },
      ];
      const settings = {
        dots: false, // Dots indicators
        infinite: true, // Infinite scroll
        speed: 1200,
        slidesToShow: 1, // 3 cards in one row
        slidesToScroll: 1, // Scroll by 1 card
        autoplay: false, // Auto scroll
        autoplaySpeed: 5000, // 2 sec per slide
        arrows: true, // Left/Right arrows
        responsive: [
          {
            breakpoint: 768, // Mobile screen
            settings: {
              slidesToShow: 1, // Show 1 card on mobile
            }
          }
          ,
        
        ]
      };
  return (
   <>

{/* -------------------------------------- */}



   <div className="explore-main " style={{ backgroundImage: "url('/images/blur.jpg')",backgroundSize: "cover" }}>
   <div className="container ex-co ">
    <div className="container-fluid">
       <div className="row">

         <div className="col-md-12">
            <div className="explore ">
              <div className='explore-left'>
             <div className="exl-under"></div>  <h1 style={{color:"#E4DAD1"}} >CORPORATE</h1>
               {/* <span>FOR YOU</span> */}
            </div>
            <div className="explore-right">
                <p>Refinement and creativity intertwine with dreamlike destinations and soulful moments on each sojourn with Taj.</p>
            </div>
            </div>


            <div className="carousel-container-2 ">
     {/* <div className="col-12"> */}
     <Slider {...settings}>
        {data.map((item) => (
         <>
          <div key={item.id} className="card-2 me-1">
            <img src={item.img} alt={item.title} />
            <h3>{item.title}</h3>
            <p>Lorem ipsum dolor sit amet consectetur .</p>
             <Link to="/query" >QUERY &gt;</Link>
            
            
          </div>
          {/* <div className='card-name'>
            <h3>{item.title}</h3>
            </div> */}
         </>
        ))}
      </Slider>
     </div>

         </div>
         
    {/* slider */}
    

        </div>  
      
    </div>
   </div>
   </div>
   </>
  )
}


