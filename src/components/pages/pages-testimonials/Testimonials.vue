<template>
    <div>

        <section class="head-bg Portfolio">
            <div class="overlay-color"></div>
            <h1>Testimonials</h1>
            <h2>
                <a href="home-1"><i class="fas fa-home icon "></i>
                Home / </a><span>Testimonials</span>
            </h2>
        </section>

        <section class="about main testimonials">
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
                        <swiper class="swiper wow animate__fadeInUp animate__animated" data-wow-duration="1500ms" ref="swiper" :options="swiperOpt">
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
        }
    }
    },
})

</script>

