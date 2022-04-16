import React from "react";
import { Link } from "react-router-dom";

function PaymentList(){
    return(
        <>
         <div className="row justify-content-center">
                  <div className="col-lg-10">
                 <ul>
                     <li className='list-total'>
                         <h5> <span>1. </span> Kitchen Cleaning</h5>
                         <h5>₹300</h5>
                     </li>
                     <li  className='list-total'>
                         <h5> <span>2. </span>Carpet Cleaning</h5>
                         <h5>₹300</h5>
                     </li>
                     <li  className='list-total'>
                         <h5> <span>3. </span>Car Dry Clean</h5>
                         <h5>₹300</h5>
                     </li>
                     <li  className='list-total'>
                         <h5> <span>3. </span>Appliance Repai</h5>
                         <h5>₹300</h5>
                     </li>
                     <li  className='list-total'>
                         <h5> <span>5. </span>Vehicle Service</h5>
                         <h5>₹300</h5>
                     </li>
                     <li  className='total-payment'>
                         <h5>TOTAL</h5>
                         <h5>₹1500</h5>
                     </li>
                     <li  className='button-payment text-end mt-20'>
                        <div className='d-inline-flex'>
                        <Link to='#' className='btn  w-btn w-btn-white mr-20'>Edit Service</Link>
                        <Link to='#' className='btn btnsubmit w-btn'>Pay Now</Link>
                        </div>
                     </li>
                 </ul>
                  </div>
                  </div>
        </>
);
}

export default PaymentList;