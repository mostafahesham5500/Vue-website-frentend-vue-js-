<template>
    <div id="home5">

        <section class="head-video">
            <video src="../../../assets/section-bg-video-2.mp4" autoplay loop muted></video>
            <div class="overlay-color"></div>
            <div class="container">
                <div class="row">
                    <div class="col-12 col-lg-7 mb-5 mb-lg-0 ">
                        <div class="tittle-about ">
                            <p class="tag-line wow animate__fadeInUp animate__animated" data-wow-duration="1500ms">
                                BUSINESS SOLUTIONS
                            </p>
                            <div data-wow-duration="1500ms" class="pp wow animate__fadeInUp animate__animated">
                                <h1> <span class="hollow-text">Reach</span> The Next <br>
                                    Level With <span class="featured-text">Fayo</span>
                                    <span class="title-design-element"></span>
                                </h1>
                            </div>
                            <div data-wow-duration="1700ms" class="text wow animate__fadeInUp animate__animated">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed architecto dolorum
                                    inventore totam adipisci
                                </p>
                            </div>
                        </div>
                        <div class="cta-links-area left wow animate_fadeInUp animate__animated" data-wow-duration="1500ms">
                                        <a class="cta-link cta-link-primary bbb" href="#">Start Now</a>
                        </div>
                    </div>
                    <div class="col-12 col-lg-5">
                        <div class="form wow animate__fadeInUp animate__animated" data-wow-duration="1500ms">
                            <form action="">
                                <h4>Claim Your <span class="head">FREE </span>Appintment</h4>
                                <div class="name">
                                    <span class="label">Full Name</span>
                                    <input type="name">
                                </div>
                                <div class="number">
                                    <span class="label">Phone Number</span>
                                    <input type="number">
                                </div>
                                <div class="email">
                                    <span class="label">Email Address</span>
                                    <span class="mark">*</span>
                                    <input type="email">
                                </div>
                            </form>
                                <div class="cta-links-area wow animate_fadeInUp animate__animated" data-wow-duration="1500ms">
                                    <a class="cta-link cta-link-primary" href="#">Subscribe Now</a>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="about">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-lg-6">
                        <div class="tittle-about ">
                            <p class="tag-line">ABOUT US</p>
                            <div class="pp wow animate__fadeInUp animate__animated" data-wow-duration="1500ms">
                                <h1>Providing <span class="featured-text">Right & Solid</span> <br> Plans To Customers.
                                    <span class="title-design-element"></span>
                                </h1>
                            </div>
                            <div class="text wow animate__fadeInUp animate__animated" data-wow-duration="1700ms">
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio,
                                    aliquam est! rerum inventore animi at iusto totam sunt accusamus quia
                                </p>
                            </div>
                            <div class="info-items-list">
                                <div class="row">
                                    <div class="col-12">
                                        <ul class="menu-items">
                                            <li class="info-item wow animate__fadeInUp animate__animated" data-wow-duration="1500ms">
                                                <i class="fas fa-chess-rook"></i>
                                                <div>
                                                    <h5>Planning and designing</h5>
                                                    <p>Lorem ipsum dolor sit amet 
                                                        consectetur adipisicing elit. A omnis 
                                                        inventore quod maxime officiis.
                                                    </p>
                                                </div>
                                            </li>
                                            <li class="info-item wow animate__fadeInUp animate__animated" data-wow-duration="1500ms">
                                                <i class="fas fa-chart-line"></i>
                                                <div>
                                                    <h5>Taking The Right Actions</h5>
                                                    <p>Lorem ipsum dolor sit amet consectetur
                                                        adipisicing elit. Porro, repellat.
                                                        Corporis eveniet dolores eos architecto!
                                                    </p>
                                                </div>
                                            </li>
                                            <li class="info-item wow animate__fadeInUp animate__animated" data-wow-duration="1500ms">
                                                <i class="fas fa-database"></i>
                                                <div>
                                                    <h5>Build Up Your Dreams</h5>
                                                    <p>Lorem ipsum dolor sit amet
                                                        consectetur, adipisicing elit. 
                                                        Reiciendis, ratione repellat 
                                                        architecto consectetur.
                                                    </p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="cta-links-area wow animate__fadeInUp animate__animated" data-wow-duration="1500ms">
                                        <a class="cta-link cta-link-primary bbb" href="#">Subscribe now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-lg-6">
                        <div class="img-area wow animate__fadeInUp animate__animated" data-wow-duration="1500ms">
                            <div class="photo-banner-end">
                                <span class="number">46</span>
                                <p class="banner-text">years of Exprince</p>
                                <div class="line line-on-center  my-1">

                                </div>
                            </div>
                            <div class="img">
                                <div class="overlay-color"></div>
                                <img src="../../../assets/1.jpg" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="blog testimonials">
            <div class="container">
                <div class="section-heading center-heading wow animate__fadeInUp animate__animated" data-wow-duration="1500ms">
                    <h2 class="section-title">Awesome <span class="hollow-text">Portfolio</span>
                    <span class="title-design-element"></span></h2>
                    <div class="line"></div>
                </div>
            </div>
                    <swiper class="swiper wow animate__fadeInUp animate__animated" data-wow-duration="1500ms" ref="swiper" :options="swiperOptio">
                        <swiper-slide>
                            <div class="img">
                                <img src="../../../assets/slid1.jpg" alt="">
                                <div class="item-info ">
                                    <span class="tag-line">
                                        residential
                                    </span>
                                    <h3 class="item-title">Add title here</h3>
                                </div>
                                <div class="overlay-color"></div>
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="img">
                                <img src="../../../assets/slid2.jpg" alt="">
                                <div class="item-info ">
                                    <span class="tag-line">
                                        finance
                                    </span>
                                    <h3 class="item-title">Add title here</h3>
                                </div>
                                <div class="overlay-color"></div>
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="img">
                                <img src="../../../assets/slid3.jpg" alt="">
                                <div class="item-info ">
                                    <span class="tag-line">
                                        law studies
                                    </span>
                                    <h3 class="item-title">Add title here</h3>
                                </div>
                                <div class="overlay-color"></div>
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="img">
                                <img src="../../../assets/slid4.jpg" alt="">
                                <div class="item-info ">
                                    <span class="tag-line">
                                        family
                                    </span>
                                    <h3 class="item-title">Add title here</h3>
                                </div>
                                <div class="overlay-color"></div>
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="img">
                                <img src="../../../assets/slid5.jpg" alt="">
                                <div class="item-info ">
                                    <span class="tag-line">
                                        Business
                                    </span>
                                    <h3 class="item-title">Add title here</h3>
                                </div>
                                <div class="overlay-color"></div>
                            </div>
                        </swiper-slide>
                    <div class="swiper-button-prev" slot="button-prev"></div>
                    <div class="swiper-button-next" slot="button-next"></div>
                    </swiper>
        </section>

        <section class="services-boxed" id="services-black-face">
            <div class="overlay-photo-image-bg"></div>
            <div class="container">
                <div class="section-heading center-heading wow animate__fadeInUp animate__animated" data-wow-duration="1500ms">
                    <h2 class="section-title">Our <span class="hollow-text">Services</span> 
                    <span class="title-design-element"></span></h2>
                    <div class="line "></div>
                </div>
                <div class="row">
                                    <div class="boxs col-6 col-lg-4 wow animate__fadeInUp animate__animated" data-wow-duration="1500ms">
                                        <div class="service-box">
                                            <div class="serv-icon">
                                                <i class="fas fa-pencil-ruler font-icon"></i>
                                            </div>
                                            <div class="serv-content">
                                                <h3 class="serv-tittle">Creative Solutions</h3>
                                                <p class="serv-text">
                                                    Lorem ipsum dolor sit amet consecltetur adipisicing elit. Omnis tempore
                                                    perferendis explicabo.
                                                </p>
                                            </div>
                                        </div>
                                        <div class="back-face">
                                            <div class="bg-img-wrapper">
                                                <img class="bg-img" src="../../../assets/service-bg-1.jpg" alt="">
                                            </div>
                                            <div class="overlay-color"></div>
                                            <div class="back-face-inner">
                                                <div class="title-wrapper">
                                                    <h3 class="title">heigh profits</h3>
                                                </div>
                                                <div class="desc-wrapper">
                                                    <p class="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo cupiditate doloremque fugit deserunt. Ullam, iste? </p>
                                                </div>
                                                <a class="read-more" href="#">read more <i class="fas fa-arrow-right icon"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="boxs col-6 col-lg-4 wow animate__fadeInUp animate__animated" data-wow-duration="1500ms">
                                        <div class="service-box center">
                                            <div class="serv-icon">
                                                <i class="fas fa-drafting-compass font-icon"></i>
                                            </div>
                                            <div class="serv-content">
                                                <h3 class="serv-tittle">Solid plans</h3>
                                                <p class="serv-text">
                                                    Lorem ipsum dolor sit amet consecltetur adipisicing elit. Omnis tempore
                                                    perferendis explicabo.
                                                </p>
                                            </div>
                                        </div>
                                        <div class="back-face center">
                                            <div class="bg-img-wrapper">
                                                <img class="bg-img" src="../../../assets/service-bg-2.jpg" alt="">
                                            </div>
                                            <div class="overlay-color"></div>
                                            <div class="back-face-inner">
                                                <div class="title-wrapper">
                                                    <h3 class="title">heigh profits</h3>
                                                </div>
                                                <div class="desc-wrapper">
                                                    <p class="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo cupiditate doloremque fugit deserunt. Ullam, iste? </p>
                                                </div>
                                                <a class="read-more" href="#">read more <i class="fas fa-arrow-right icon"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="boxs col-6 col-lg-4 wow animate__fadeInUp animate__animated" data-wow-duration="1500ms">
                                        <div class="service-box">
                                            <div class="serv-icon">
                                                <i class="fas fa-layer-group font-icon"></i>
                                            </div>
                                            <div class="serv-content">
                                                <h3 class="serv-tittle">Support Layers</h3>
                                                <p class="serv-text">
                                                    Lorem ipsum dolor sit amet consecltetur adipisicing elit. Omnis tempore
                                                    perferendis explicabo.
                                                </p>
                                            </div>
                                        </div>
                                        <div class="back-face">
                                            <div class="bg-img-wrapper">
                                                <img class="bg-img" src="../../../assets/service-bg-3.jpg" alt="">
                                            </div>
                                            <div class="overlay-color"></div>
                                            <div class="back-face-inner">
                                                <div class="title-wrapper">
                                                    <h3 class="title">heigh profits</h3>
                                                </div>
                                                <div class="desc-wrapper">
                                                    <p class="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo cupiditate doloremque fugit deserunt. Ullam, iste? </p>
                                                </div>
                                                <a class="read-more" href="#">read more <i class="fas fa-arrow-right icon"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="boxs col-6 col-lg-4 wow animate__fadeInUp animate__animated" data-wow-duration="1500ms">
                                        <div class="service-box">
                                            <div class="serv-icon">
                                                <i class="fas fa-rocket font-icon"></i>
                                            </div>
                                            <div class="serv-content">
                                                <h3 class="serv-tittle">Glamour Success</h3>
                                                <p class="serv-text">
                                                    Lorem ipsum dolor sit amet consecltetur adipisicing elit. Omnis tempore
                                                    perferendis explicabo.
                                                </p>
                                            </div>
                                        </div>
                                        <div class="back-face">
                                            <div class="bg-img-wrapper">
                                                <img class="bg-img" src="../../../assets/service-bg-4.jpg" alt="">
                                            </div>
                                            <div class="overlay-color"></div>
                                            <div class="back-face-inner">
                                                <div class="title-wrapper">
                                                    <h3 class="title">heigh profits</h3>
                                                </div>
                                                <div class="desc-wrapper">
                                                    <p class="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo cupiditate doloremque fugit deserunt. Ullam, iste? </p>
                                                </div>
                                                <a class="read-more" href="#">read more <i class="fas fa-arrow-right icon"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="boxs col-6 col-lg-4 wow animate__fadeInUp animate__animated" data-wow-duration="1500ms">
                                        <div class="service-box center">
                                            <div class="serv-icon">
                                                <i class="fas fa-gavel font-icon"></i>
                                            </div>
                                            <div class="serv-content">
                                                <h3 class="serv-tittle">Legal Advices</h3>
                                                <p class="serv-text">
                                                    Lorem ipsum dolor sit amet consecltetur adipisicing elit. Omnis tempore
                                                    perferendis explicabo.
                                                </p>
                                            </div>
                                        </div>
                                        <div class="back-face center">
                                            <div class="bg-img-wrapper">
                                                <img class="bg-img" src="../../../assets/service-bg-5.jpg" alt="">
                                            </div>
                                            <div class="overlay-color"></div>
                                            <div class="back-face-inner">
                                                <div class="title-wrapper">
                                                    <h3 class="title">heigh profits</h3>
                                                </div>
                                                <div class="desc-wrapper">
                                                    <p class="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo cupiditate doloremque fugit deserunt. Ullam, iste? </p>
                                                </div>
                                                <a class="read-more" href="#">read more <i class="fas fa-arrow-right icon"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="boxs col-6 col-lg-4 wow animate__fadeInUp animate__animated" data-wow-duration="1500ms">
                                        <div class="service-box">
                                            <div class="serv-icon">
                                                <i class="fas fa-comment-dollar font-icon"></i>
                                            </div>
                                            <div class="serv-content">
                                                <h3 class="serv-tittle">Heigh Profits</h3>
                                                <p class="serv-text">
                                                    Lorem ipsum dolor sit amet consecltetur adipisicing elit. Omnis tempore
                                                    perferendis explicabo.
                                                </p>
                                            </div>
                                        </div>
                                        <div class="back-face">
                                            <div class="bg-img-wrapper">
                                                <img class="bg-img" src="../../../assets/service-bg-6.jpg" alt="">
                                            </div>
                                            <div class="overlay-color"></div>
                                            <div class="back-face-inner">
                                                <div class="title-wrapper">
                                                    <h3 class="title">heigh profits</h3>
                                                </div>
                                                <div class="desc-wrapper">
                                                    <p class="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo cupiditate doloremque fugit deserunt. Ullam, iste? </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                </div>
            </div>
        </section>

        <section class="about testmonials-slid testimonials">
            <div class="overlay-pattern-image-bg"></div>
            <div class="overlay-photo-image-bg"></div>
            <div class="overlay-color"></div>
            <div class="container">
                <div class="row">
                    <div class="col-12 col-lg-4">
                        <div class="tittle-about ">
                            <p class="tag-line">TESTMONIALS</p>
                            <div class="pp wow animate__fadeInUp animate__animated" data-wow-duration="1500ms">
                                <h1>Our Clients Feedback About Their Experience With Us
                                    <span class="title-design-element"></span>
                                </h1>
                            </div>
                        </div>
                        <div class="cta-links-area wow animate__fadeInUp animate__animated" data-wow-duration="1500ms">
                                        <a class="cta-link cta-link-primary bbb" href="#">See All Testimonials</a>
                        </div>
                    </div>
                    <div class="col-12 col-lg-8">
                        <swiper class="swiper wow animate__fadeInUp animate__animated" data-wow-duration="1500ms" ref="swiper" :options="swiperOptio">
                    <swiper-slide>
                        <div class="testmonial-card d-flex align-items-center justify-content-center">
                            <div class="testimonial-content">
                                <div class="customer-info">
                                    <img class="img-fluid " src="../../../assets/3.jpg" alt="">
                                    <div class="customer-details">
                                        <p class="customer-name">fairouz mhmd</p>
                                        <p class="customer-role">accountant</p>
                                    </div>
                                </div>
                                <div class="rating-stars">
                                    <i class="fas fa-star star-icon"></i>
                                    <i class="fas fa-star star-icon"></i>
                                    <i class="fas fa-star star-icon"></i>
                                    <i class="fas fa-star star-icon"></i>
                                    <i class="fas fa-star star-icon off"></i>
                                </div>
                                <div class="customer-testimonial">
                                    <i class="fas fa-quote-left   icon"></i>
                                    <div class="content">
                                        <p class="testimonial-text "> ipsum dolor sit amet consectetur adipisicing elit. Quod, id
                                            sequi aut qui est ab, corporis quis maiores reiciendis explicabo odio tenetur nulla sint vel.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="testmonial-card d-flex align-items-center justify-content-center">
                            <div class="testimonial-content">
                                <div class="customer-info">
                                    <img class="img-fluid " src="../../../assets/2.jpg" alt="">
                                    <div class="customer-details">
                                        <p class="customer-name">brad Ally</p>
                                        <p class="customer-role">Lawyer</p>
                                    </div>
                                </div>
                                <div class="rating-stars">
                                    <i class="fas fa-star star-icon"></i>
                                    <i class="fas fa-star star-icon"></i>
                                    <i class="fas fa-star star-icon"></i>
                                    <i class="fas fa-star star-icon"></i>
                                    <i class="fas fa-star star-icon off"></i>
                                </div>
                                <div class="customer-testimonial">
                                    <i class="fas fa-quote-left   icon"></i>
                                    <div class="content">
                                        <p class="testimonial-text "> ipsum dolor sit amet consectetur adipisicing elit. Quod, id
                                            sequi aut qui est ab, corporis quis maiores reiciendis explicabo odio tenetur nulla sint vel.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="testmonial-card d-flex align-items-center justify-content-center">
                            <div class="testimonial-content">
                                <div class="customer-info">
                                    <img class="img-fluid " src="../../../assets/4.jpg" alt="">
                                    <div class="customer-details">
                                        <p class="customer-name">Yusuf amin</p>
                                        <p class="customer-role">consultant</p>
                                    </div>
                                </div>
                                <div class="rating-stars">
                                    <i class="fas fa-star star-icon"></i>
                                    <i class="fas fa-star star-icon"></i>
                                    <i class="fas fa-star star-icon"></i>
                                    <i class="fas fa-star star-icon"></i>
                                    <i class="fas fa-star star-icon off"></i>
                                </div>
                                <div class="customer-testimonial">
                                    <i class="fas fa-quote-left   icon"></i>
                                    <div class="content">
                                        <p class="testimonial-text "> ipsum dolor sit amet consectetur adipisicing elit. Quod, id
                                            sequi aut qui est ab, corporis quis maiores reiciendis explicabo odio tenetur nulla sint vel.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="testmonial-card d-flex align-items-center justify-content-center">
                            <div class="testimonial-content">
                                <div class="customer-info">
                                    <img class="img-fluid " src="../../../assets/3.jpg" alt="">
                                    <div class="customer-details">
                                        <p class="customer-name">fairouz mhmd</p>
                                        <p class="customer-role">accountant</p>
                                    </div>
                                </div>
                                <div class="rating-stars">
                                    <i class="fas fa-star star-icon"></i>
                                    <i class="fas fa-star star-icon"></i>
                                    <i class="fas fa-star star-icon"></i>
                                    <i class="fas fa-star star-icon"></i>
                                    <i class="fas fa-star star-icon off"></i>
                                </div>
                                <div class="customer-testimonial">
                                    <i class="fas fa-quote-left   icon"></i>
                                    <div class="content">
                                        <p class="testimonial-text "> ipsum dolor sit amet consectetur adipisicing elit. Quod, id
                                            sequi aut qui est ab, corporis quis maiores reiciendis explicabo odio tenetur nulla sint vel.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </swiper-slide>
                    <div class="swiper-button-prev" slot="button-prev"></div>
                    <div class="swiper-button-next" slot="button-next"></div>
                        </swiper>
                    </div>
                </div>
            </div>
        </section>

        <section class="pricing">
            <div class="overlay-photo-image-bg"></div>
            <div class="container">
                <div class="section-heading center-heading wow animate__fadeInUp animate__animated" data-wow-duration="1500ms">
                    <h2 class="section-title "><span class="hollow-text">Pricing </span> Plans
                    <span class="title-design-element"></span></h2>
                    <div class="line "></div>
                </div>
                <div class="row">
                    <div class="col-12 col-lg-4 col-md-9 mx-auto">
                        <div class="box-price">
                            <div class="plan-price">
                                <h4><span class="dolar">$</span> 49
                                    <span class="tit">/ Per Project</span>
                                </h4>
                                <h3>Starter Plan</h3>
                            </div>
                            <div class="details">
                                <ul>
                                    <li><h4>150 Lorem, Ipsum Dolor.</h4> <i class="fas fa-check feat-icon"></i></li>
                                    <li><h4>20 Lorem Ipsum Dolor Sit .</h4> <i class="fas fa-check feat-icon"></i></li>
                                    <li><h4>Lorem Ipsum Dolor Sit.</h4> <i class="fas fa-check feat-icon"></i></li>
                                    <li><h4>Free Lorem Ipsum Dolor .</h4> <i class="fas fa-times feat-icon"></i></li>
                                    <li><h4>Added Lorem Ipsum Dolor.</h4> <i class="fas fa-times feat-icon"></i></li>
                                </ul>
                                <a href="#">select plan</a>
                            </div>
                        </div>
                    </div>
                     <div class="col-12 col-lg-4 col-md-9 mx-auto">
                        <div class="box-price">
                            <div class="plan-price">
                                <h4><span class="dolar">$</span> 120
                                    <span class="tit">/ Per Project</span>
                                </h4>
                                <h3>Pro Plan</h3>
                            </div>
                            <div class="details">
                                <ul>
                                    <li><h4>150 Lorem, Ipsum Dolor.</h4> <i class="fas fa-times feat-icon"></i></li>
                                    <li><h4>20 Lorem Ipsum Dolor Sit .</h4> <i class="fas fa-check feat-icon"></i></li>
                                    <li><h4>Lorem Ipsum Dolor Sit.</h4> <i class="fas fa-check feat-icon"></i></li>
                                    <li><h4>Free Lorem Ipsum Dolor .</h4> <i class="fas fa-times feat-icon"></i></li>
                                    <li><h4>Added Lorem Ipsum Dolor.</h4> <i class="fas fa-times feat-icon"></i></li>
                                </ul>
                                <a href="#">select plan</a>
                            </div>
                        </div>
                    </div>
                     <div class="col-12 col-lg-4 col-md-9 mx-auto">
                        <div class="box-price">
                            <div class="plan-price">
                                <h4><span class="dolar">$</span> 165
                                    <span class="tit">/ Per Project</span>
                                </h4>
                                <h3>Ultimate Plan</h3>
                            </div>
                            <div class="details">
                                <ul>
                                    <li><h4>150 Lorem, Ipsum Dolor.</h4> <i class="fas fa-check feat-icon"></i></li>
                                    <li><h4>20 Lorem Ipsum Dolor Sit .</h4> <i class="fas fa-check feat-icon"></i></li>
                                    <li><h4>Lorem Ipsum Dolor Sit.</h4> <i class="fas fa-check feat-icon"></i></li>
                                    <li><h4>Free Lorem Ipsum Dolor .</h4> <i class="fas fa-times feat-icon"></i></li>
                                    <li><h4>Added Lorem Ipsum Dolor.</h4> <i class="fas fa-check feat-icon"></i></li>
                                </ul>
                                <a href="#">select plan</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="our-team">
            <div class="container">
                <div class="section-heading center-heading wow animate__fadeInUp animate__animated" data-wow-duration="1500ms">
                    <h2 class="section-title">Our <span class="hollow-text">Experts </span>Team Members
                    <span class="title-design-element"></span></h2>
                    <div class="line"></div>
                </div>
                <div class="row">
                    <div class="col-12 col-md-8  col-lg-4 mx-md-auto ">
                        <div class="card">
                            <div class="img">
                                <img class="img-fluid" src="../../../assets/1 (1).jpg" alt="">
                                <div class="overlay overlay-color"></div>
                            </div>
                            <div class="details">
                                <h6>ahmed Aly</h6>
                                <span>Founder</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-8  col-lg-4 mx-md-auto ">
                        <div class="card">
                            <div class="img">
                                <img class="img-fluid" src="../../../assets/2 (2).jpg" alt="">
                                <div class="overlay overlay-color"></div>
                            </div>
                            <div class="details">
                                <h6>Fairouz Amin</h6>
                                <span>Lawyer</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-8  col-lg-4 mx-md-auto ">
                        <div class="card">
                            <div class="img">
                                <img class="img-fluid" src="../../../assets/3 (2).jpg" alt="">
                                <div class="overlay overlay-color"></div>
                            </div>
                            <div class="details">
                                <h6>Allan Smith</h6>
                                <span>Accountant</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="vegas">
            <div class="container">
                <div class="row">
                    <div class="col-4 col-lg-2">
                        <img src="../../../assets/1-white.png" alt="">
                    </div>
                    <div class="col-4 col-lg-2">
                        <img src="../../../assets/2-white.png" alt="">
                    </div>
                    <div class="col-4 col-lg-2">
                        <img src="../../../assets/3-white.png" alt="">
                    </div>
                    <div class="col-4 col-lg-2">
                        <img src="../../../assets/4-white.png" alt="">
                    </div>
                    <div class="col-4 col-lg-2">
                        <img src="../../../assets/5-white.png" alt="">
                    </div>
                    <div class="col-4 col-lg-2">
                        <img src="../../../assets/6-white.png" alt="">
                    </div>
                </div>
            </div>
        </section>

        <section class="blog ">
            <div class="container">
                <div class="section-heading center-heading wow animate__fadeInUp animate__animated" data-wow-duration="1500ms">
                    <h2 class="section-title">Latest <span class="hollow-text">News</span>
                    <span class="title-design-element"></span></h2>
                    <div class="line"></div>
                </div>
                <div class="row wow animate__fadeInUp animate__animated" data-wow-duration="1500ms">
                    <div class="col-12 col-lg-6">
                        <div class="post-box">
                            <a class="post-link" href="#">
                                <div class="post-img-wrapper">
                                    <img class="post-img" src="../../../assets/3 (1).jpg" alt="">
                                    <div class="overlay-color"></div>
                                    <i class="fas fa-arrow-right icon "></i>
                                </div>
                            </a>
                            <div class="post-summary">
                                <h4 class="post-date">
                                    <span class="day">05 </span> oct, 2021      
                                </h4>
                                <div class="post-info">
                                    <a class="info post-cat" href="#"> <i class=" fas fa-list-alt icon"></i>cloud</a>
                                    <a class="info post-author" href="#"><i class=" fas fa-user icon"></i>Allan Moore</a>
                                </div>
                                <div class="post-text">
                                    <a class="post-link" href="#">
                                        <h2 class="post-title">as a rule love what you do to do what you love</h2>
                                    </a>
                                    <p class="post-excerpt">Lorem ipsum dolor sit, amet consectetur adipisicing elit.Iure nulla dolorem, voluptates molestiae</p>
                                    <a class="read-more" href="#">
                                        read more
                                        <i class="fas fa-arrow-right icon "></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-lg-6">
                        <div class="post-box">
                            <a class="post-link" href="#">
                                <div class="post-img-wrapper">
                                    <img class="post-img" src="../../../assets/2 (1).jpg" alt="">
                                    <div class="overlay-color"></div>
                                    <i class="fas fa-arrow-right icon "></i>
                                </div>
                            </a>
                            <div class="post-summary">
                                <h4 class="post-date">
                                    <span class="day">15 </span> sep, 2021      
                                </h4>
                                <div class="post-info">
                                    <a class="info post-cat" href="#"> <i class=" fas fa-list-alt icon"></i>design</a>
                                    <a class="info post-author" href="#"><i class=" fas fa-user icon"></i>mhmd amin</a>
                                </div>
                                <div class="post-text">
                                    <a class="post-link" href="#">
                                        <h2 class="post-title"> stories of our great fathers lights our pathes</h2>
                                    </a>
                                    <p class="post-excerpt">Lorem ipsum dolor sit, amet consectetur adipisicing elit.Iure nulla dolorem, voluptates molestiae</p>
                                    <a class="read-more" href="#">
                                        read more
                                        <i class="fas fa-arrow-right icon "></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="take-action mega-section " >
            <div class="section-heading center-heading wow animate__fadeInUp animate__animated" data-wow-duration="1500ms">
                    <h2 class="section-title ">Still Have More <span class="hollow-text">Questions</span>?
                    <span class="title-design-element"></span></h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, architecto cupiditate 
                        odio rerum est</p>
                    <div class="line"></div>
            </div>
            <div class="overlay-photo-image-bg parallax "></div>
            <div class="overlay-color"></div>
            <div class="container">
                <div class="col-12 text-center">
                    <div class="cta-links-area">
                        <a class=" btn-solid cta-link wow animate__fadeInUp animate__animated" data-wow-duration="2000ms" href="#">Get In Toutch</a>
                    </div>
                </div>
            </div>
        </section>

        <Footer/>
    </div>
</template>

<script>
import "jquery/dist/jquery";
import "./main.css";
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import 'swiper/swiper.min.css';
import Footer from "../../footer/footer";
export default ({
    name: "home-5",
    components: {
        Footer,
        swiper,
        swiperSlide
    },
    data() {
      return {
        swiperOptio: {
            loop:true,
            slidesPerView: 2,
            spaceBetween: 30,
            direction: 'horizontal',
            autoplay: {
            delay: 2500,
            disableOnInteraction: false
            },
            navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
            },
            breakpoints: {
                1220: {
                    slidesPerView: 2,
                    spaceBetween: 30
                },
                768: {
                    slidesPerView: 1,
                    spaceBetween: 20
                },
            },
        }
    }
    }
})

</script>