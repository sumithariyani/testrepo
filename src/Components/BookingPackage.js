import React from 'react';

function BookingPackage() {
return (
<>
  <section className="about__area pb-45 pt-45 p-relative border-style">
    <div className="container">
      <div className="row justify-content-center">
        <div className='col-lg-9 cm-lg-9'>
          <form>
            <div className='card_book'>
              <div className='header-small'>
                <h1>Book A Package</h1>
              </div>
              <div className='row'>
                <div className='col-lg-6 mt-30'>
                  <div className='sign__input'>
                    <input type='text' name='' className='from-control' placeholder='Car Cleaning' />
                  </div>
                </div>
                <div className='col-lg-6 mt-30'>
                  <div className='sign__input'>
                    <input type='text' name='' className='from-control' placeholder='1 cleaner with Sup' />
                  </div>
                </div>
                <div className='col-lg-6 mt-30'>
                  <div className='sign__input'>
                    <input type='date' name='' className='from-control' placeholder='1 cleaner with Sup' />
                  </div>
                </div>
                <div className='col-lg-6 mt-30'>
                  <div className='sign__input'>
                    <input type='number' name='' className='from-control' placeholder='Phone No.' />
                  </div>
                </div>

                <div className='col-lg-12 mt-30'>
                  <label className='label'>Hours</label>

                  <div className='radio_hourse_style'>

                    <label className="radio_hours">
                      <input type="radio" name="radio" id='' />
                      <span>1 Hour</span>
                    </label>

                    <label className="radio_hours">
                      <input type="radio" name="radio" id='' />
                      <span>2 Hour</span>
                    </label>

                    <label className="radio_hours">
                      <input type="radio" name="radio" id='' />
                      <span>3 Hour</span>
                    </label>

                    <label className="radio_hours">
                      <input type="radio" name="radio" id='' />
                      <span>4 Hour</span>
                    </label>

                    <div className='radio_hours'>
                      <a className="w-btn w-btn-blue w-btn-blue-header btnblack" href="">+more</a>
                    </div>

                  </div>
                </div>
                
                <div className='col-lg-12 mt-30'>
                  <label className='label'>Select An Employee</label>

                  <div className='radio_hourse_style'>

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

                    <div className='radio_hours'>
                      <a className="w-btn w-btn-blue w-btn-blue-header btnblack" href="">+more</a>
                    </div>

                  </div>



                </div>

                <div className='col-lg-12 mt-30'>
                  <label className='label'>Add Instruction</label>
                  <textarea name='' className='textarea' rows='5'></textarea>
                </div>

                <div className='col-lg-12 mt-50 text-center'>
                  <label className='label text-uppercase'>Aed 99</label>
                  <a className="w-btn w-btn-blue w-btn-blue-header btnpay" href="">PAY NOW</a>
                </div>

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

export default BookingPackage;
