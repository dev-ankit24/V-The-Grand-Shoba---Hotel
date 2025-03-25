import React from "react";
import Navbar2 from "./partials/Navbar2";
import { Link } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';

const FormPage = () => {
  const clickme =()=>{
    toast.error("Sorry! Your Query Not Submited . Please Back to Home Page ")
    // alert("Sorry! Your Query Not Submited . Please Back to Home Page ")
  }
  return (
   <>
   <Navbar2/>
   <Toaster
  position="top-center"
  reverseOrder={false}
/>
   <div className="container  py-5"  style={{background:"rgb(243, 241, 238)", marginTop:"4rem"}}>
        <div className="containar-fluid"  style={{background:"rgb(243, 241, 238)"}}>
        <h2 className="text-center mb-4" style={{color:"#3B5552"}}>  Enquiry </h2>
      <form className="mx-auto" style={{ maxWidth: "600px" }}>
        <div className="mb-3">
          <label className="form-label">Full Name*</label>
          <input type="text" className="form-control" placeholder="Enter your name" required />
        </div>
        <div className="mb-3">
          <label className="form-label">Email*</label>
          <input type="email" className="form-control" placeholder="Enter your email" required />
        </div>
        <div className="mb-3">
          <label className="form-label">Phone Number*</label>
          <input type="tel" className="form-control" placeholder="Enter your phone number" required />
        </div>
        <div className="mb-3">
          <label className="form-label">Inquiry Type*</label>
          <select className="form-select" required>
            <option value="">Select an option</option>
            <option value="general">Room Booking</option>
            <option value="booking">Corporate Event</option>
            <option value="support">Membership</option>
            <option value="support">Other</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Message*</label>
          <textarea className="form-control" placeholder="Your message here..." rows="3" required></textarea>
        </div>
        
      </form>
      <div className="d-flex  form-btn">
      <button type="submit" className="btn btn-primary    " onClick={clickme} >Submit</button>
        <button type="submit" className="btn btn-primary   "> 
          <Link to="/">back</Link>
          </button>
      </div>
        </div>
    </div>
   </>
  );
};

export default FormPage;