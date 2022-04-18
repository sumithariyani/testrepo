import React , { Component } from 'react';
import { Link } from "react-router-dom";
import{useState,useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
function BookingPackage(props) {
  let pack_id =   localStorage.getItem('pack_id');
  console.log(pack_id);
 
 
  const [get_category, setGet_category] = useState([]);
  const [getpackage, setPackage] = useState([]);
  const [employee, setEmployee] = useState("")
  const [date, setDate] = useState("")
  const [hours, setHours] = useState("")
  const [instruction, setInstruction] = useState("")
  const user_id = localStorage.getItem('user_id');
  const package_id =  localStorage.getItem('pack_id')

  

         let dataarray =  get_category.data;
            // if(get_category.status==true){
              // console.log(dataarray);
            // }
            const get_package = async () =>{

              const getPAck = async (formDataa) => 
                          { 
                            let testurl = '/iron_gate/admin/api/get_package_detail' ;
                          let formData = new FormData();
                           let name = 'a250bcr552s'   
                          formData.append("token",name );
                          formData.append("package_id",package_id );
                              
                            const options = { headers:{ "Content-Type": "multipart/form-data",
                            "Accept": "application/json",
                            "type": "formData"}};
                               console.log(formData); 
                            try{
                              let response = await axios.post(testurl,formData,options);
                              // console.log(response.data); 
                              return   response.data;
                            } catch(err){ console.error(err); toast.error('some errror'); return false;  }
                         }  
                        
                         let res = await getPAck({token:'a250bcr552s'}); 
                      
                         if(res.status){
                           
                          setPackage(res.data);
                         }else{
                             toast.error(res.message);
                         }
                        }
                        useEffect(() => {
                          get_package();
                        },[]); 

           
            const get_cat = async () =>{

              const getData = async (formDataa) => 
                          { 
                            let testurl = '/iron_gate/admin/api/get_employee' ;
                          let formData = new FormData();
                           let name = 'a250bcr552s'   
                          formData.append("token",name );
                              
                            const options = { headers:{ "Content-Type": "multipart/form-data",
                            "Accept": "application/json",
                            "type": "formData"}};
                               console.log(formData); 
                            try{
                              let response = await axios.post(testurl,formData,options);
                              console.log(response.data); 
                              return   response.data;
                            } catch(err){ console.error(err); toast.error('some errror'); return false;  }
                         }  
                        
                         let res = await getData({token:'a250bcr552s'}); 
                      
                         if(res.status){
                         setGet_category(res);
                         }else{
                             toast.error(res.message);
                         }
                        }
                        useEffect(() => {
                          get_cat();
                        },[]);  
                        const update_cat = async (e) => {
                          e.preventDefault();
                          // let org_code = localStorage.getItem('org_code');
                      
                          // const options = { headers:{"Content-type": "application/multipart/form-data" }};
                      
                          const updateData = async () => {
                            let formData = new FormData();
                            let token = 'a250bcr552s'
                            formData.append("token", token);
                            formData.append("user_id", user_id);
                            formData.append("package_id", package_id);
                            formData.append("date", date);
                            formData.append("hours", hours);
                            formData.append("employee_id", employee);
                            formData.append("instruction", instruction);
                            const options = {
                              headers: {
                                "Content-Type": "multipart/form-data",
                                "Accept": "application/json",
                                "type": "formData"
                              }
                            };
                            console.log(formData);
                            try {
                              let response = await axios.post('/iron_gate/admin/api/add_order', formData, options);
                              console.log(response.data);
                              if (response.data.status == true) {
                                console.log(response);
                              }
                              //  ccconsole.log(test);
                              return response.data;
                              // sessionStorage.setItem("pageView", response.data);
                            } catch (err) { console.error(err); toast.error('some errror'); return false; }
                          }
                          let res = await updateData();
                          if (res.status) {
                            // setGet_category(res);
                            // alert(res.message);
                            toast(res.message)
                          } else {
                            toast.error(res.message);
                          }
                        }
            
console.log(getpackage);
return (
<>
  <section className="about__area pb-45 pt-45 p-relative border-style">
    <div className="container">
      <div className="row justify-content-center">
        <div className='col-lg-9 cm-lg-9'>
          {/* <form> */}
            <div className='card_book'>
              <div className='header-small'>
                <h1>Book A Package</h1>
              </div>
              <div className='row'>
                <div className='col-lg-6 mt-30'>
                  <div className='sign__input'>
                    <input type='text' name=''  className='from-control' readOnly value={getpackage.package_title}  placeholder='Car Cleaning' />
                  </div>
                </div>
                <div className='col-lg-6 mt-30'>
                  <div className='sign__input'>
                    <input type='text' name=''  className='from-control' readOnly value={getpackage.no_of_cleaners +'  cleaner'}  placeholder='1 cleaner with Sup' />
                  </div>
                </div>
                <div className='col-lg-6 mt-30'>
                  <div className='sign__input'>
                    <input type='date' value={date} onChange={(e) => setDate(e.target.value)} name=''  className='from-control' placeholder='1 cleaner with Sup' />
                  </div>
                </div>
                {/* <div className='col-lg-6 mt-30'>
                  <div className='sign__input'>
                    <input type='number' name='' className='from-control' placeholder='Phone No.' />
                  </div>
                </div> */}

                <div className='col-lg-12 mt-30'>
                  <label className='label'>Hours</label>

                  <div className='radio_hourse_style'>

                    <label className="radio_hours">
                      <input value='1' onChange={(e) => setHours(e.target.value)}  type="radio" name="radio" id='' />
                      <span>1 Hour</span>
                    </label>

                    <label className="radio_hours">
                      <input  value='2' onChange={(e) => setHours(e.target.value)}  type="radio" name="radio" id='' />
                      <span>2 Hour</span>
                    </label>

                    <label className="radio_hours">
                      <input value='3' onChange={(e) => setHours(e.target.value)}  type="radio" name="radio" id='' />
                      <span>3 Hour</span>
                    </label>

                    <label className="radio_hours">
                      <input  value='4' onChange={(e) => setHours(e.target.value)}  type="radio" name="radio" id='' />
                      <span>4 Hour</span>
                    </label>

                    {/* <div className='radio_hours'>
                      <a className="w-btn w-btn-blue w-btn-blue-header btnblack" href="">+more</a>
                    </div> */}

                  </div>
                </div>
                
                <div className='col-lg-12 mt-30'>
                  <label className='label'>Select An Employee</label>

                  <div className='radio_hourse_style'>
                  {(dataarray ?? []).map((dataarray,index)=>{
                    return <label  key={index} className="radio_hours employe_style">
                      <input   onChange={(e) => setEmployee(e.target.value)}  type="radio" name="employee" value={dataarray.id} />
                      <span>
                        <img src={process.env.PUBLIC_URL + '/assets/images/user.png'} alt='user img' />
                        <small className='d-block'>{dataarray.name}</small>
                      </span>
                    </label>;
 })}

                    {/* <label className="radio_hours employe_style">
                      <input type="radio" name="employee" id='' />
                      <span>
                        <img src={process.env.PUBLIC_URL + '/assets/images/user.png'} alt='user img' />
                        <small className='d-block'>John Pauls</small>
                      </span>
                    </label>

                    <label className="radio_hours employe_style">
                      <input type="radio" name="employee" id='' />
                      <span>
                        <img src={process.env.PUBLIC_URL + '/assets/images/user.png'} alt='user img' />
                        <small className='d-block'>John Pauls</small>
                      </span>
                    </label>

                    <label className="radio_hours employe_style">
                      <input type="radio" name="employee" id='' />
                      <span>
                        <img src={process.env.PUBLIC_URL + '/assets/images/user.png'} alt='user img' />
                        <small className='d-block'>John Pauls</small>
                      </span>
                    </label>
*/}
                    <div className='radio_hours'>
                      <a className="w-btn w-btn-blue w-btn-blue-header btnblack" href="">+more</a>
                    </div> 

                  </div>



                </div>

                <div className='col-lg-12 mt-30'>
                  <label className='label'>Add Instruction</label>
                  <textarea name=''  value={instruction} onChange={(e) => setInstruction(e.target.value)}  className='textarea' rows='5'></textarea>
                </div>

                <div className='col-lg-12 mt-50 text-center'>
                  <label className='label text-uppercase'>Aed {getpackage.price}</label>
                  <a className="w-btn w-btn-blue w-btn-blue-header btnpay" onClick={update_cat} href="">PAY NOW</a>
                </div>

              </div>

            </div>
          {/* </form> */}
        </div>
      </div>
    </div>
  </section>
</>
);
}

export default BookingPackage;
