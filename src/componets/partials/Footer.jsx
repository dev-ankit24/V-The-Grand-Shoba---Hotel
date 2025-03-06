import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Footer() {
    
//  const navigate = useNavigate();
//  let [data,setData]= useState([])
//  let LicenseStateData = useSelector((x)=>x.LicenseStateData)
//  let dispatch =useDispatch()
//  function getAPIData(){
//   dispatch(getLicense())
//   if(LicenseStateData.length){
//     setData({...LicenseStateData})
    
//   }
//   else setData([])
//  }

//  useEffect(()=>{
//    getAPIData()
//  },[LicenseStateData.length])


    // Scroll to up
    const goToTop =()=>{
        setTimeout(() => {
            // refreshPage()
            window.location.reload()
          }, 200)
        window.scrollTo({top:0,left:0 ,behavior:"smooth"})
    }

    
  return (
    <>
       
        
{/* <!-- Footer Start -->  */}
        <div className="container-fluid bg-dark text-light footer wow fadeIn " data-wow-delay="0.1s">
            <div className="container pb-5">
                <div className="row g-5">
                    <div className="col-md-6 col-lg-4">
                        <div className=" footer-img rounded p-4 pt-2">
                       <Link to='/' >  <img src="images/logo-2.png" className="text-white text-uppercase mb-3 rounded-circle " alt='logo'  onClick={goToTop}   /></Link>
                            <p className="text-white  mb-0" style={{fontFamily:"Arial" ,textAlign:" justify"}} >
                            Vhotel The Grand Shoba, a premier destination for luxury and comfort, offers world-class hospitality and an unforgettable stay experience. Nestled in the heart of the city, our hotel is known for its elegant ambiance, exceptional service, and state-of-the-art amenities, making every visit truly special.
							</p>
                        <i class="bi bi-geo-alt"></i>

                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 footer-link">
                        {/* <h5 className="section-title text-start  mb-4 text-uppercase mb-4"  style={{color:"#F19A17"}} >Contact</h5>
                        <Link target='_blank' to="https://www.google.com/maps/place/Dell+Exclusive+Store+-+Karol+Bagh+Laptop+%26+Desktop/@28.6507653,77.1807411,15z/data=!3m1!5s0x390d029cb77abb69:0x38b6fc70f33d93e8!4m10!1m2!2m1!1sB-4,+First+Floor,+Prehlad+Market,+DB+Gupta+Rd,+Karol+Bagh,+New+Delhi,+110005!3m6!1s0x390d029cb77e0387:0xd351988cd9d55d6c!8m2!3d28.6544309!4d77.1900187!15sCkxCLTQsIEZpcnN0IEZsb29yLCBQcmVobGFkIE1hcmtldCwgREIgR3VwdGEgUmQsIEthcm9sIEJhZ2gsIE5ldyBEZWxoaSwgMTEwMDA1WkgiRmIgNCBmaXJzdCBmbG9vciBwcmVobGFkIG1hcmtldCBkYiBndXB0YSByZCBrYXJvbCBiYWdoIG5ldyBkZWxoaSAxMTAwMDWSAQ5jb21wdXRlcl9zdG9yZeABAA!16s%2Fg%2F11bv3mtrfc?entry=ttu&g_ep=EgoyMDI0MTEwNi4wIKXMDSoASAFQAw%3D%3D">
                        <i class="bi bi-geo-alt dark-dark" ></i>B-4, First Floor, Prehlad Market, DB Gupta Rd, Karol Bagh, New Delhi, 110005</Link>
                        <p><i className="bi bi-telephone-fill me-2 " style={{color:"#F19A17"}} ></i>
                        <Link className="me-2 " to="tel:+919971522879">+91 9971522879 </Link>   
                       </p>
                       <p><i className="bi bi-envelope-fill me-2" style={{color:"#F19A17"}}></i>
                        <Link  to="mailto:info@perfectconsultancy.co">info@perfectconsultancy.co</Link>
                       </p> */}
                        <div className=" pt-2">
                        <h5 className=" mb-4 text-uppercase text-start " style={{color:"#E4DAD1"}}  >social links</h5>
                            <Link className=" btn-outline-warning  btn-social me-2"  target='_blank' to="#"><img src="images/twi.png" alt="" className='socil-img' srcset="" /></Link>
                            <Link className=" btn-outline-warning btn-social me-2" target='_blank' to="#"><img src="images/fac.png" alt="" className='socil-img' srcset="" /></Link>
                            <Link className=" btn-outline-warning btn-social me-2" target='_blank' to="#"><img src="images/lin.png" alt="" className='socil-img' srcset="" /></Link>
                            <Link className=" btn-outline-warning btn-social me-2" target='_blank' rel="noreferrer" to="#"><img src="images/ins.png" alt="" className='socil-img' srcset="" /></Link>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-12">
                        <div className="row gy-5 g-4">
                             <div className="col-lg-4 col-md-6 footer-link">
                               <h5 className=" mb-4 text-uppercase text-start " style={{color:"#E4DAD1"}}  >Quick Links</h5>
                               <Link className=" btn-link " to="#" onClick={goToTop}> HOME </Link> <br />
                               <Link className=" btn-link " to="#" onClick={goToTop}>ROOM</Link> <br />
                               <Link className=" btn-link " to="#" onClick={goToTop}>CORPORATE</Link> <br />
                               <Link className=" btn-link " style={{fontSize:"15px"}} to="#" onClick={goToTop}>MEMBERSHIP</Link> <br />
                               {/* <Link className=" btn-link " to="#" onClick={goToTop}>Contact Us</Link> */}
                         </div>

                         
                            <div className="col-md-6 footer-link">
                                <h5 className="section-title text-start text-uppercase mb-4"  style={{color:"#E4DAD1"}} >Business</h5>
                               
                                <Link to='#'  onClick={goToTop} className=" btn-link" >EVENTS</Link> <br />
                                <Link to='/query'  onClick={goToTop} className=" btn-link" >QUERY </Link>

                             
                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="copyright">
                    <div className="row">
                        <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                         copyright 2025   &copy; <Link className="border-bottom" to="/" style={{color:"#E4DAD1"}}> V The Grand Shoba </Link>, All Right Reserved. 
							
							{/* Designed By <a className="border-bottom" href="#"></a> */}
                        </div>
                        <div className="col-md-6 text-md-end ">
                        <i className="bi bi-arrow-up-circle  float-end text-warning mx-2 goToTop-btn" onClick={ goToTop}></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Footer End --> */}
    </>
  )
}
