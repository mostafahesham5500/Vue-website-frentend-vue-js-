<template>
    <div id="home4">

        <section class="head-video">
            <video src="../../../assets/section-bg-video-1.mp4" autoplay loop muted></video>
            <div class="overlay-color"></div>
            <div class="content">
                <h1 class="wow animate__fadeInUp animate__animated" data-wow-duration="1500ms">Reach The Next Level
                    <br> With <span>Fayo</span>
                </h1>
                <div class="col-10 col-md-8 mx-auto wow animate__fadeInUp animate__animated" data-wow-duration="1800ms">
                    <p >Lorem ipsum dolor sit amet, consectetur perspiciatis 
                        elit. Sed architecto dolorum inventore totam adipisci 
                        provident placeat
                    </p>
                </div>
                <div class="cta-links-area wow animate__fadeInUp animate__animated" data-wow-duration="2100ms">
                            <a class="cta-link cta-link-primary bbb" href="#">Start Now</a>
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

        <section class="blog testimonials bg-photo">
            <div class="container">
                <div class="section-heading center-heading wow animate__fadeInUp animate__animated" data-wow-duration="1500ms">
                    <h2 class="section-title"><span class="hollow-text">Services</span>We Offer
                    <span class="title-design-element"></span></h2>
                    <div class="line"></div>
                </div>
                <div class="row">
                    <div class="boxs list-unstyled col-12 col-md-9  col-lg-4 mx-auto wow animate__fadeInUp animate__animated" data-wow-duration="1500ms">
                                        <div class="service-box">
                                            <div class="overlay-color"></div>
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
                                            <img src="../../../assets/icon-bg1.jpg" alt="">
                                            <a class="read-more" href="#">
                                                read more
                                                <i class="fas fa-arrow-right icon "></i>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="boxs list-unstyled col-12 col-md-9  col-lg-4 mx-auto wow animate__fadeInUp animate__animated" data-wow-duration="1500ms">
                                        <div class="service-box center">
                                            <div class="overlay-color"></div>
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
                                            <img src="../../../assets/icon-bg2.jpg" alt="">
                                            <a class="read-more" href="#">
                                                read more
                                                <i class="fas fa-arrow-right icon "></i>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="boxs list-unstyled col-12 col-md-9  col-lg-4 mx-auto wow animate__fadeInUp animate__animated" data-wow-duration="1500ms">
                                        <div class="service-box">
                                            <div class="overlay-color"></div>
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
                                            <img src="../../../assets/icon-bg3.jpg" alt="">
                                            <a class="read-more" href="#">
                                                read more
                                                <i class="fas fa-arrow-right icon "></i>
                                            </a>
                                        </div>
                                    </div>
                </div>
            </div>
        </section>

        <section class="benefits">
            <div class="row">
                <div class="col-12 col-lg-6 list-unstyled">
                    <div class="benefits-img">
                        <img src="../../../assets/benefits-1.jpg" alt="">
                        <div class="overlay-color"></div>
                    </div>
                </div>
                <div class="col-12 col-lg-6">
                    <div class="row">
                        <div class="col-6 list-unstyled">
                            <div class="content">
                                <i class="fas fa-bullhorn benefit-icon "></i>
                                <div class="tittle">
                                    <h3>Business Boost</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur 
                                        adipisicing elit. Nemo dolorum sit aliquam
                                    </p>
                                </div>
                                <a href="#">Read More <i class="fas fa-arrow-right icon "></i></a>
                            </div>
                        </div>
                        <div class="col-6 list-unstyled">
                            <div class="content">
                                <i class="fas fa-anchor benefit-icon "></i>
                                <div class="tittle">
                                    <h3>Value Guarantee</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur 
                                        adipisicing elit. Nemo dolorum sit aliquam
                                    </p>
                                </div>
                                <a href="#">Read More <i class="fas fa-arrow-right icon "></i></a>
                            </div>
                        </div>
                        <div class="col-6 list-unstyled">
                            <div class="content">
                                <i class="fas fa-chess benefit-icon "></i>
                                <div class="tittle">
                                    <h3>Solid Plans</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur 
                                        adipisicing elit. Nemo dolorum sit aliquam
                                    </p>
                                </div>
                                <a href="#">Read More <i class="fas fa-arrow-right icon "></i></a>
                            </div>
                        </div>
                        <div class="col-6 list-unstyled">
                            <div class="content">
                                <i class="fas fa-desktop benefit-icon "></i>
                                <div class="tittle">
                                    <h3>Get More Attention</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur 
                                        adipisicing elit. Nemo dolorum sit aliquam
                                    </p>
                                </div>
                                <a href="#">Read More <i class="fas fa-arrow-right icon "></i></a>
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
                    <div class="col-12 col-lg-4">
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
                    <div class="col-12 col-lg-4">
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
                    <div class="col-12 col-lg-4">
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
                                    <span class="day">27 </span> aut, 2021      
                                </h4>
                                <div class="post-info">
                                    <a class="info post-cat" href="#"> <i class=" fas fa-list-alt icon"></i>life style</a>
                                    <a class="info post-author" href="#"><i class=" fas fa-user icon"></i>yusuf amin</a>
                                </div>
                                <div class="post-text">
                                    <a class="post-link" href="#">
                                        <h2 class="post-title"> our goal is making your fancy thoughts exist</h2>
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
    name: "home-4",
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
        },
        
    }
    }
})

</script>