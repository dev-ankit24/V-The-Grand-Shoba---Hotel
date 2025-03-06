import React from 'react'
import Sliders from './Sliders'
import Slider from 'react-slick';
import { Link } from 'react-router-dom';



export default function Globalicon() {
    const data = [
        { id: 1, img: "images/hero_1.jpg",para:"Enter a realm of storied halls, sophisticated delights and unrivalled indulgence. Immerse yourself in the grandeur of luxury at our exquisite palaces, hotels, resorts and safaris.", title: "TIMELESS" },
        { id: 2, img: "images/food-1.jpg",para:"Enter a realm of storied halls, sophisticated delights and unrivalled indulgence. Immerse yourself in the grandeur of luxury at our exquisite palaces, hotels, resorts and safaris.", title: "LIMITED PERIOD ESCAPES" },
        { id: 3, img: "images/img_4.jpg",para:"Enter a realm of storied halls, sophisticated delights and unrivalled indulgence. Immerse yourself in the grandeur of luxury at our exquisite palaces, hotels, resorts and safaris.", title: "LIVING PALACES" },
        { id: 4, img: "images/img_3.jpg",para:"Enter a realm of storied halls, sophisticated delights and unrivalled indulgence. Immerse yourself in the grandeur of luxury at our exquisite palaces, hotels, resorts and safaris.", title: "CITY HOTELS" },
        { id: 5, img: "images/img_2.jpg",para:"Enter a realm of storied halls, sophisticated delights and unrivalled indulgence. Immerse yourself in the grandeur of luxury at our exquisite palaces, hotels, resorts and safaris.", title: "IDYLLIC RESORTS" },
        { id: 6, img: "images/img_1.jpg",para:"Enter a realm of storied halls, sophisticated delights and unrivalled indulgence. Immerse yourself in the grandeur of luxury at our exquisite palaces, hotels, resorts and safaris.", title: "NEW OPENINGS" },
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
          }
        ]
      };
  return (
    <>
    <div className="container global-main">
        <div className="container-fluid">
            <div className="row m-auto">
                <div className="col-md-12 col-12 global">
                    <h1 className='text-center text-uppercase'>A Grand Icon of Indian Hospitality</h1>
                    <p >Enter a realm of elegant spaces, refined experiences, and unparalleled comfort. Immerse yourself in the charm of luxury at our distinguished hotel, just moments from Delhi Airport.</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 col-12 global-desk ">
                    <div className="row  ">
                        {/* <div className="col-md-3">
                        <div className="image-container">
                          <img src="images/img_1.jpg" alt="Sample" className="image" />
                           <div className="overlay">
                            <h2>TIMELESS</h2>
                             <p>Embrace a timeless elegance that embodies sophistication and an unwavering commitment to refined excellence.</p>
                            </div>
                            </div>
                        </div> */}

              <div className="carousel-container1  ">
                <Slider {...settings}>
                     {data.map((item) => (
                               <>
                                <div className="image-container card1">
                                 <img src={item.img} alt="Sample" className="image" />
                                   <div className="overlay">
                                    <h2>{item.title}</h2>
                                    <p>Embrace a timeless elegance that embodies sophistication and an unwavering commitment to refined excellence.</p>
                                  </div>
                                </div>
         
                                </>
                       ))}
               </Slider>
                </div>                        
                    </div>
           
                </div>

            </div>

        </div>
    </div>
        
    </>
  )
}
