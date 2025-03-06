import React from 'react'
import Slider from 'react-slick'
import { Link } from 'react-router-dom';
import LatestOffer from './LatestOffer';
import Sliders from './partials/Sliders';
export default function ExploreMore() {
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

<div className="container">
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12">
                    <div className="letest-offer ">
                        <h1 className='text-center text-uppercase me-5'>corporate</h1>
                        <p>Discover exclusive stays and exceptional experiences at our elegantly designed hotel near Delhi Airport.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Sliders/>
  {/* <LatestOffer/> */}
    </>
  )
}
