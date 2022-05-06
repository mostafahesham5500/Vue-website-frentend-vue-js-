<template>
    <div class="home2">

        <section class="head-6 take-action mega-section ">
            <swiper class="swiper" :options="swiperOpt">
                <swiper-slide>
                    <div class="section-heading center-heading wow animate__fadeInUp animate__animated" data-wow-duration="1500ms">
                        <h2 class="section-title "><span class="hollow-text"> Fayo</span> 
                            Delivering
                            <br>
                            solid plans to
                            <span class="featured-text">success!</span>
                            <span class="title-design-element"></span>
                        </h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, architecto cupiditate 
                            odio rerum est</p>
                    </div>
                    <div class="overlay-photo-image-bg parallax "></div>
                    <div class="overlay-color"></div>
                    <div class="container">
                        <div class="col-12">
                            <div class="cta-links-area">
                                <a class=" btn-solid cta-link wow animate__fadeInUp animate__animated" data-wow-duration="2000ms" href="#">Get In Toutch</a>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="section-heading center-heading wow animate__fadeInUp animate__animated" data-wow-duration="1500ms">
                        <h2 class="section-title "><span class="hollow-text"> Fayo</span> 
                            providing 1
                            <br>
                            the Next Era
                            <span class="featured-text"> solutions!</span>
                            <span class="title-design-element"></span>
                        </h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, architecto cupiditate 
                            odio rerum est</p>
                    </div>
                    <div class="overlay-photo-image-bg parallax "></div>
                    <div class="overlay-color"></div>
                    <div class="container">
                        <div class="col-12">
                            <div class="cta-links-area">
                                <a class=" btn-solid cta-link wow animate__fadeInUp animate__animated" data-wow-duration="2000ms" href="#">Get In Toutch</a>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="section-heading center-heading wow animate__fadeInUp animate__animated" data-wow-duration="1500ms">
                        <h2 class="section-title "><span class="hollow-text"> Fayo</span> 
                            helping Us
                            <br>
                                to grow your 
                            <span class="featured-text">business.</span>
                            <span class="title-design-element"></span>
                        </h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, architecto cupiditate 
                            odio rerum est</p>
                    </div>
                    <div class="overlay-photo-image-bg parallax "></div>
                    <div class="overlay-color"></div>
                    <div class="container">
                        <div class="col-12">
                            <div class="cta-links-area">
                                <a class=" btn-solid cta-link wow animate__fadeInUp animate__animated" data-wow-duration="2000ms" href="#">Get In Toutch</a>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </section>

        <section class="services-boxed">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-lg-4 align-self-center">
                        <div class="tittle-serv wow animate__fadeInUp animate__animated" data-wow-duration="1500ms">
                            <div class="serv-head">
                                <p class="tag-line">Business solutions</p>
                            </div>
                            <div class="pp">
                                <h1>Services You Will Get By Joining Us. <span class="title-design-element"></span></h1>
                            </div>
                            <div class="cta-links-area d-none">
                                    <a class="cta-link cta-link-primary" href="#">see all services</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-lg-8">
                        <div class="row">
                            <div class="col-12 col-md-6 mt-md-5 wow animate__fadeInUp animate__animated" data-wow-duration="1700ms">
                                <div class="row">
                                    <div class="col-12">
                                        <div class="service-box active">
                                            <div class="serv-icon">
                                                <i class="fas fa-pencil-ruler font-icon"></i>
                                                <span class="service-num hollow-text">1</span>
                                            </div>
                                            <div class="serv-content">
                                                <h3 class="serv-tittle">Creative Solutions</h3>
                                                <p class="serv-text">
                                                    Lorem ipsum dolor sit amet consecltetur adipisicing elit. Omnis tempore
                                                    perferendis explicabo.
                                                </p>
                                            </div>
                                            <a class="read-more" href="#">read more <i class="fas fa-arrow-right icon"></i></a>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="service-box">
                                            <div class="serv-icon">
                                                <i class="fas fa-drafting-compass font-icon"></i>
                                                <span class="service-num hollow-text">2</span>
                                            </div>
                                            <div class="serv-content">
                                                <h3 class="serv-tittle">Solid plans</h3>
                                                <p class="serv-text">
                                                    Lorem ipsum dolor sit amet consecltetur adipisicing elit. Omnis tempore
                                                    perferendis explicabo.
                                                </p>
                                            </div>
                                            <a class="read-more" href="#">read more <i class="fas fa-arrow-right icon"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-md-6 wow animate__fadeInUp animate__animated" data-wow-duration="2200ms">
                                <div class="row">
                                    <div @click="nn" class="col-12">
                                        <div class="service-box">
                                            <div class="serv-icon">
                                                <i class="fas fa-layer-group font-icon"></i>
                                                <span class="service-num hollow-text">3</span>
                                            </div>
                                            <div class="serv-content">
                                                <h3 class="serv-tittle">Support Layers</h3>
                                                <p class="serv-text">
                                                    Lorem ipsum dolor sit amet consecltetur adipisicing elit. Omnis tempore
                                                    perferendis explicabo.
                                                </p>
                                            </div>
                                            <a class="read-more" href="#">read more <i class="fas fa-arrow-right icon"></i></a>
                                        </div>
                                    </div>
                                    <div @click="nn" class="col-12">
                                        <div class="service-box">
                                            <div class="serv-icon">
                                                <i class="fas fa-rocket font-icon"></i>
                                                <span class="service-num hollow-text">4</span>
                                            </div>
                                            <div class="serv-content">
                                                <h3 class="serv-tittle">Glamour Success</h3>
                                                <p class="serv-text">
                                                    Lorem ipsum dolor sit amet consecltetur adipisicing elit. Omnis tempore
                                                    perferendis explicabo.
                                                </p>
                                            </div>
                                            <a class="read-more" href="#">read more <i class="fas fa-arrow-right icon"></i></a>
                                        </div>
                                    </div>
                                </div>
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

        <section class="testimonials ">
            <div class="overlay-photo-image-bg"></div>
            <div class="overlay-pattern-image-bg"></div>
            <div class="overlay-color"></div>
            <div class="container">
                <div class="section-heading center-heading wow animate__fadeInUp animate__animated" data-wow-duration="1500ms">
                    <h2 class="section-title ">customers <span class="hollow-text">testmonials</span> 
                    <span class="title-design-element"></span></h2>
                    <div class="line "></div>
                </div>
                <swiper class="swiper wow animate__fadeInUp animate__animated" data-wow-duration="1500ms" ref="swiper" :options="swiperOption">
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
        </section>

        <section class="our-clients">
            <div class=" section-video-bg ">
                <video src="../../../assets/section-bg-video-2.mp4" autoplay loop muted></video>
                <div class="overlay-color "></div>
            </div>
            <div class="container">
                <div class="row blocks-row">
                    <div class="col-6 col-md-4 col-lg-3 wow animate__fadeInUp animate__animated" data-wow-duration="1500ms">
                        <div class="client-block">
                            <a href="#"><img class="img-fluid logo" src="../../../assets/1-white.png" alt=""></a>
                        </div>
                    </div>
                    <div class="col-6 col-md-4 col-lg-3 wow animate__fadeInUp animate__animated" data-wow-duration="1500ms">
                        <div class="client-block">
                            <a href="#"><img class="img-fluid logo" src="../../../assets/2-white.png" alt=""></a>
                        </div>
                    </div>
                    <div class="col-6 col-md-4 col-lg-3 wow animate__fadeInUp animate__animated" data-wow-duration="1500ms">
                        <div class="client-block">
                            <a href="#"><img class="img-fluid logo" src="../../../assets/3-white.png" alt=""></a>
                        </div>
                    </div>
                    <div class="col-6 col-md-4 col-lg-3 wow animate__fadeInUp animate__animated" data-wow-duration="1500ms">
                        <div class="client-block">
                            <a href="#"><img class="img-fluid logo" src="../../../assets/4-white.png" alt=""></a>
                        </div>
                    </div>
                    <div class="col-6 col-md-4 col-lg-3 wow animate__fadeInUp animate__animated" data-wow-duration="1500ms">
                        <div class="client-block">
                            <a href="#"><img class="img-fluid logo" src="../../../assets/5-white.png" alt=""></a>
                        </div>
                    </div>
                    <div class="col-6 col-md-4 col-lg-3 wow animate__fadeInUp animate__animated" data-wow-duration="1500ms">
                        <div class="client-block">
                            <a href="#"><img class="img-fluid logo" src="../../../assets/6-white.png" alt=""></a>
                        </div>
                    </div>
                    <div class="col-6 col-md-4 col-lg-3 wow animate__fadeInUp animate__animated" data-wow-duration="1500ms">
                        <div class="client-block">
                            <a href="#"><img class="img-fluid logo" src="../../../assets/7-white.png" alt=""></a>
                        </div>
                    </div>
                    <div class="col-6 col-md-4 col-lg-3 wow animate__fadeInUp animate__animated" data-wow-duration="1500ms">
                        <div class="client-block">
                            <a href="#"><img class="img-fluid logo" src="../../../assets/8-white.png" alt=""></a>
                        </div>
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
import "./main.css";
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import 'swiper/swiper.min.css';
import Footer from "../../footer/footer";
export default ({
    name: "home-2",
    title: 'Change direction',
    components: {
        Footer,
        swiper,
        swiperSlide
    },
    data() {
        return {
            swiperOption: {
            loop:true,
            slidesPerView: 3,
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
        swiperOpt: {
            loop:true,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false
            },
            pagination: {
                el: '.swiper-pagination',
                type: 'fraction'
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            }
        },
    }
    },
})

</script>
