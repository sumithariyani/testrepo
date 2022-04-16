import React from "react";
import OwlCarousel from 'react-owl-carousel';
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const options = {
  loop: false,
  margin: 30,
  autoplay: false,
  lazyLoad: true,
  autoplayTimeout: 4000,
  smartSpeed: 700,
  items: 1,
  navText: ['<button><i class="fa fa-angle-left"></i>PREV</button>', '<button>NEXT<i class="fa fa-angle-right"></i></button>'],
  nav: false,
  dots: true,
  responsive: {
    0: {
      items: 1
    },
    576: {
      items: 1
    },
    767: {
      items: 2
    },
    992: {
      items: 2.2
    },
    1200: {
      items: 2.4
    },
    1600: {
      items: 2.2
    }
  }
};

function Related_blogs() {

  const [get_category, setGet_category] = useState([]);

  const get_cat = async () => {

    const getData = async (formDataa) => {
      let formData = new FormData();
      let name = 'a250bcr552s'
      formData.append("token", name);

      const options = {
        headers: {
          "Content-Type": "multipart/form-data",
          "Accept": "application/json",
          "type": "formData"
        }
      };

      try {
        let response = await axios.post('/iron_gate/admin/api/get_related_blog', formData, options);

        return response.data;
      } catch (err) { console.error(err); toast.error('some errror'); return false; }
    }

    let res = await getData({ token: 'a250bcr552s' });

    if (res.status) {

      setGet_category(res.data);

    } else {
      toast.error(res.message);
    }
  }

  useEffect(() => {
    get_cat();
  }, []);

  let dataarray = get_category.data;
  // if(get_category.status==true){
  console.log(dataarray);



  return (
    <>
      <section className="reletd_blogs testimonial__slider border-style">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 offset-xxl-2 col-xl-8 offset-xl-2 col-lg-10 offset-lg-1 col-md-10 offset-md-1">
              <div className="section__title-wrapper section__title-wrapper-5 text-center mb-25 wow fadeInUp" data-wow-delay=".3s">
                <h2 className="section__title-5">Recent Blog</h2>
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-lg-12">
              <OwlCarousel {...options}>
                {(get_category.length > 0) ? get_category.map((item, index) => {
                  <div className="blog_list">
                    <div className="imgDiv">
                      <a href="#">
                        <img src={process.env.PUBLIC_URL + '/assets/images/service4.png'} alt='blog img' />
                      </a>
                    </div>
                    <div className="contentText">
                      <h5>Cleanliness & Health </h5>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
                      <a href="#">Read More..</a>
                    </div>
                  </div>;
                }) : ''}
                <div className="blog_list">
                  <div className="imgDiv">
                    <a href="#">
                      <img src={process.env.PUBLIC_URL + '/assets/images/service4.png'} alt='blog img' />
                    </a>
                  </div>
                  <div className="contentText">
                    <h5>Cleanliness & Health </h5>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
                    <a href="#">Read More..</a>
                  </div>
                </div>


                <div className="blog_list">
                  <div className="imgDiv">
                    <a href="#">
                      <img src={process.env.PUBLIC_URL + '/assets/images/service4.png'} alt='blog img' />
                    </a>
                  </div>
                  <div className="contentText">
                    <h5>Cleanliness & Health </h5>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
                    <a href="#">Read More..</a>
                  </div>
                </div>

                {/*
                <div className="blog_list">
                  <div className="imgDiv">
                    <a href="#">
                      <img src={process.env.PUBLIC_URL + '/assets/images/service4.png'} alt='blog img' />
                    </a>
                  </div>
                  <div className="contentText">
                    <h5>Cleanliness & Health </h5>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
                    <a href="#">Read More..</a>
                  </div>
                </div>

                <div className="blog_list">
                  <div className="imgDiv">
                    <a href="#">
                      <img src={process.env.PUBLIC_URL + '/assets/images/service4.png'} alt='blog img' />
                    </a>
                  </div>
                  <div className="contentText">
                    <h5>Cleanliness & Health </h5>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
                    <a href="#">Read More..</a>
                  </div>
                </div>

                <div className="blog_list">
                  <div className="imgDiv">
                    <a href="#">
                      <img src={process.env.PUBLIC_URL + '/assets/images/service4.png'} alt='blog img' />
                    </a>
                  </div>
                  <div className="contentText">
                    <h5>Cleanliness & Health </h5>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
                    <a href="#">Read More..</a>
                  </div>
                </div>
 */}

              </OwlCarousel>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}

export default Related_blogs;
