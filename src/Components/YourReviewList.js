import React,  { useState } from 'react';
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";




function YourReviewList() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

return (
    <>
<div className='row'>
  <div className='col-lg-12'>
    <form>
      <div className='filter'>
        <div className='mr-20'>
        <label className='d-block'>From Date</label>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        selectsStart
        startDate={startDate}
        endDate={endDate}
      />
      </div>
      <div className='mr-20'>
      <label className='d-block'>To Date</label>
       <DatePicker
        selected={endDate}
        onChange={(date) => setEndDate(date)}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
      />
      </div>
      <div>
         <label className='d-block'>.</label>
        <button type="submit" className="btn btnsubmit w-btn">Submit</button>
        </div>
      </div>
    
    </form>
  </div>
</div>

<div className='row'>
<div className='col-lg-12'>
    <div className='previous_list'>
    <ul>
   <li className='list_previous'>
    <div className='previous'>
      <div className=''>
      <h4>Kitchen Cleanin</h4>
        <h6>11:11PM 01APR202</h6>
      </div>
      <div className='ratings'>
      <i className="fas fa-star active"></i>
      <i className="fas fa-star active"></i>
      <i className="fas fa-star active"></i>
      <i className="fas fa-star active"></i>
      <i className="fas fa-star"></i>
      <div className='editreview'>
      <Link to='#'><i className="fal fa-edit"></i></Link>
      </div>
      </div>
     
    </div>   
   </li>
   <li className='list_previous'>
    <div className='previous'>
      <div className=''>
      <h4>Kitchen Cleanin</h4>
        <h6>11:11PM 01APR202</h6>
      </div>
      <div className='ratings'>
      <i className="fas fa-star active"></i>
      <i className="fas fa-star active"></i>
      <i className="fas fa-star active"></i>
      <i className="fas fa-star active"></i>
      <i className="fas fa-star"></i>
      <div className='editreview'>
      <Link to='#'><i className="fal fa-edit"></i></Link>
      </div>
      </div>
    </div>   
   </li>
   <li className='list_previous'>
    <div className='previous'>
      <div className=''>
      <h4>Car Cleaning</h4>
        <h6>11:11PM 01APR202</h6>
      </div>
      <div className='ratings'>
      <i className="fas fa-star active"></i>
      <i className="fas fa-star active"></i>
      <i className="fas fa-star active"></i>
      <i className="fas fa-star active"></i>
      <i className="fas fa-star active"></i>
      <div className='editreview'>
      <Link to='#'><i className="fal fa-edit"></i></Link>
      </div>
      </div>
    </div>   
   </li>
   <li className='list_previous'>
    <div className='previous'>
      <div className=''>
      <h4>Ac Repair</h4>
        <h6>12:11PM 01APR202</h6>
      </div>
      <div className='ratings'>
      <i className="fas fa-star active"></i>
      <i className="fas fa-star active"></i>
      <i className="fas fa-star active"></i>
      <i className="fas fa-star active"></i>
      <i className="fas fa-star"></i>
      <div className='editreview'>
      <Link to='#'><i className="fal fa-edit"></i></Link>
      </div>
      </div>
    </div>   
   </li>
   <li className='list_previous'>
    <div className='previous'>
      <div className=''>
      <h4>Sofa Cleaning</h4>
        <h6>11:11PM 01APR202</h6>
      </div>
      <div className='ratings'>
      <i className="fas fa-star active"></i>
      <i className="fas fa-star active"></i>
      <i className="fas fa-star active"></i>
      <i className="fas fa-star active"></i>
      <i className="fas fa-star active"></i>
      <div className='editreview'>
      <Link to='#'><i className="fal fa-edit"></i></Link>
      </div>
      </div>
    </div>   
   </li>
   <li className='list_previous'>
    <div className='previous'>
      <div className=''>
      <h4>Car Cleanin</h4>
        <h6>12:11PM 01APR202</h6>
      </div>
      <div className='ratings'>
      <i className="fas fa-star active"></i>
      <i className="fas fa-star active"></i>
      <i className="fas fa-star active"></i>
      <i className="fas fa-star"></i>
      <i className="fas fa-star"></i>
      <div className='editreview'>
      <Link to='#'><i className="fal fa-edit"></i></Link>
      </div>
      </div>
    </div>   
   </li>
   </ul>
    </div>
</div>
</div>

</>
);
}
export default YourReviewList;