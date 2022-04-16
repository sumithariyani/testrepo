import React from "react" ;
function PopularCategory() {
    return (
 <>
<section className="blog__area section_card home_services">
            <div className="container">
               <div className="row">
                  <div className="col-xxl-8 offset-xxl-2 col-xl-8 offset-xl-2 col-lg-10 offset-lg-1 col-md-10 offset-md-1">
                     <div className="section__title-wrapper section__title-wrapper-5 text-center mb-25 wow fadeInUp" data-wow-delay=".3s">
                        <h2 className="section__title-5 section__title-5-p mb-15">Home Services</h2>
                       
                     </div>
                  </div>
               </div>
               <div className="row">
                  <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                     <div className="blog__item-5 mb-30">
                        <div className="blog__thumb-5 fix w-img">
                           <a href="#">
                              <img src="https://validthemes.online/themeforest/cleanu/assets/img/portfoilo/4.jpg" alt="" /> 
                           </a>
                        </div>
                        <div className="blog__content-5">
                          <h3 className="blog__title-5"><a href="#">House Cleaning</a></h3>
                           
                        </div>
                     </div>
                  </div>
                  <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                     <div className="blog__item-5 mb-30">
                        <div className="blog__thumb-5 fix w-img">
                           <a href="#">
                              <img src="https://validthemes.online/themeforest/cleanu/assets/img/portfoilo/1.jpg" alt="" />
                           </a>
                        </div>
                        <div className="blog__content-5">
                          
                           <h3 className="blog__title-5"><a href="#">Door Cleaning</a></h3>
                           
                        </div>
                     </div>
                  </div>
                  <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                     <div className="blog__item-5 mb-30">
                        <div className="blog__thumb-5 fix w-img">
                           <a href="#">
                              <img src="https://validthemes.online/themeforest/cleanu/assets/img/portfoilo/5.jpg" alt="" />
                           </a>
                        </div>
                        <div className="blog__content-5">
                         
                           <h3 className="blog__title-5"><a href="#">Furniture Cleaning</a></h3>
                           
                        </div>
                     </div>
                  </div>
                  <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                     <div className="blog__item-5 mb-30">
                        <div className="blog__thumb-5 fix w-img">
                           <a href="#">
                              <img src="https://validthemes.online/themeforest/cleanu/assets/img/portfoilo/3.jpg" alt="" />
                           </a>
                        </div>
                        <div className="blog__content-5">
                          
                           <h3 className="blog__title-5"><a href="#">Bedroom Cleaning</a></h3>
                           
                        </div>
                     </div>
                  </div>
               </div>
            </div>
    </section> 

    <section className="blog__area section_card p-0">
    <div className="chooseus__area pt-90 pb-90">
		<div className="chooseus__area-left-image" ></div>
		<div className="container">
			<div className="row align-items-center">
				<div className="col-xl-5 col-lg-4 lg-mb-30">
					<div className="chooseus__area-left">
						
					</div>
				</div>
				<div className="col-xl-7 col-lg-8">
					<div className="chooseus__area-right wow fadeInRight" data-wow-delay="0.4s" >
						<div className="chooseus__area-right-title mb-40">
							
							<h2>Expert house  <br /> cleaning service you can trust.</h2>
						</div>
						<div className="row">
							<div className="col-md-4 pr-0 md-pl-0 md-mb-20">
								<div className="chooseus__area-right-icon-list">
                        <img src={process.env.PUBLIC_URL + '/assets/images/image-02-09.png'} alt=""  /> 
									<p>House Cleaning</p>
								</div>
							</div>
							<div className="col-md-4 pr-0 md-mb-20 m">
								<div className="chooseus__area-right-icon-list center">	
                        <img src={process.env.PUBLIC_URL + '/assets/images/image-02-06.png'} alt=""  /> 
									<p>House Cleaning</p>
								</div>
							</div>
							<div className="col-md-4 pl-0 md-pr-0">
								<div className="chooseus__area-right-icon-list">	
                        <img src={process.env.PUBLIC_URL + '/assets/images/image-02.png'} alt=""  /> 
									<p>House Cleaning</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
   </section> 


      </>
    );
  }

export default PopularCategory
