import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

function UpdateProfile(){

    const [get_category, setGet_category] = useState([]);
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const get_cat = async () => {

        const getData = async (formDataa) => {
            let formData = new FormData();
            let token = 'a250bcr552s'
            let user_id = localStorage.getItem('user_id');
            formData.append("token", token);
            formData.append("user_id", user_id);

            const options = {
                headers: {
                    "Content-Type": "multipart/form-data",
                    "Accept": "application/json",
                    "type": "formData"
                }
            };

            try {
                let response = await axios.post('/iron_gate/admin/api/get_profile', formData, options);

                return response.data;
            } catch (err) { console.error(err); toast.error('some errror'); return false; }
        }

        let res = await getData({ token: 'a250bcr552s' });

        if (res.status) {
            // console.log(res.data);
            setGet_category(res.data);
            console.log(get_category);
            setName(get_category.name);
            setEmail(get_category.email);
            setPhone(get_category.phone);
        } else {
            toast.error(res.message);
        }
    }
    useEffect(() => {
        const body = document.querySelector("body");
        document.body.classList.add("body_black");
        return () => {
            body.classList.remove("body_black");
        }
    });  
    useEffect( () => {
        const body = document.querySelector("body");
        document.body.classList.add("body_black");
        return () => {
          body.classList.remove("body_black");
        }
      } );
      useEffect(() => {
        get_cat();
    }, []);

      
return(
    <>
    <section className='update_profile'>
    <div className='container'>
    <div className='row justify-content-center'>
        <div className='col-lg-10'>
            <form>
            <h3 className='text-center'>Update Profile</h3>
            <div className='userImg mb-20'>
             <div className='imgbox'>
             <img src={process.env.PUBLIC_URL + '/assets/images/profile.png'} />
             </div>
             <div className='userimgs'>
                 <label for='fileID'>
                 <input type='file'  name='fileprofile' id='fileID'  />
                   <span className='titleicon mr-20'> <i className="fal fa-edit"></i></span>
                  <span className='titlesmall'> Change Profile Picture </span>
             </label>
             </div>          
         </div>
         <div className='row'>
         <div className='input_type col-lg-12'>
            <input type='text' name='' id="" value={name} onChange={(e) => setName(e.target.value)} placeholder='Change Name' />
         </div>
         <div className='input_type col-lg-12'>
            <input type='email' value={email} onChange={(e) => setEmail(e.target.value)}  name='' id="" placeholder='Update Email Address' />
         </div>
         <div className='input_type col-lg-7 pr-50'>
             <div className='d-flex'>
             <select className='mr-20' name='' id="" >
                 <option>91</option>
                 <option>82</option>
             </select>
             <input type='text' name='' value={phone}  onChange={(e) => setPhone(e.target.value)}  id="" placeholder='Update Mobile No.' />
             </div>     
         </div>
         <div className='input_type col-lg-5'>
            <div className='otpinput'>
                <h5 className='mr-20'>ENTER OTP</h5>
                <input type='text' maxLength='1' name='f1' id='' className='mr-10' />
                <input type='text' maxLength='1' name='f2' id='' className='mr-10' />
                <input type='text' maxLength='1' name='f2' id='' className='mr-10' />
                <input type='text' maxLength='1' name='f4' id='' />
            </div>
         </div>
         <div className='mt-10 buttonsubmit'>
         <div className="d-flex justify-content-end">
             <button className="btn  w-btn w-btn-white mr-20">Decline</button>
             <button className="btn btnsubmit w-btn">Save</button></div>
         </div>
         </div>
            </form>
        </div>
    </div>
    </div>
    </section>
    </>
);

}

export default UpdateProfile;