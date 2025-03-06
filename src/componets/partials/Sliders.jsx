import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
export default function Sliders() {

    const data = [
        { id: 1, img: "images/img_1.jpg", title: "ROMANTIC STAY" },
        { id: 2, img: "images/img_5.jpg", title: "LIMITED PERIOD ESCAPES" },
        { id: 3, img: "images/img_4.jpg", title: "LIVING PALACES" },
        { id: 4, img: "images/img_3.jpg", title: "CITY HOTELS" },
        { id: 5, img: "images/img_2.jpg", title: "IDYLLIC RESORTS" },
        { id: 6, img: "images/img_1.jpg", title: "NEW OPENINGS" },
      ];

      const settings = {
        dots: false, // Dots indicators
        infinite: true, // Infinite scroll
        speed: 400,
        slidesToShow: 3, // 3 cards in one row
        slidesToScroll: 1, // Scroll by 1 card
        autoplay: false, // Auto scroll
        autoplaySpeed: 2000, // 2 sec per slide
        arrows: true, // Left/Right arrows
        responsive: [
          {
            breakpoint: 768, // Mobile screen
            settings: {
              slidesToShow: 1, // Show 1 card on mobile
            }
          },
         
        
        ]
      };
  return (
    <>
    <div className="carousel-container ">
     {/* <div className="col-12"> */}
     <Slider {...settings}>
        {data.map((item) => (
         <>
          <div key={item.id} className="card me-1">
            <img src={item.img} alt={item.title} />
            
          </div>
          <div className='card-name'>
            <h3>{item.title}</h3>
            <Link to="/query">QUERY &gt;</Link>
            </div>
         </>
        ))}
      </Slider>
     </div>
    {/* </div> */}
    </>
  )
}
