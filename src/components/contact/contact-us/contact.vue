<template>
    <div >

        <section class="head-bg Portfolio">
            <div class="overlay-color"></div>
            <h1>Contact Us</h1>
            <h2>
                <a href="home-1"><i class="fas fa-home icon "></i>
                Home / </a><span>Contact Us</span>
            </h2>
        </section>

        <section class="contact">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-lg-5 mx-auto  mb-5 mb-lg-0">
                        <div class=" contact-info-panel">
                            <div class="overlay-photo-image-bg "></div>
                            <div class="info-section ">
                                <div class="info-panel">
                                    <i class="fas fa-map-marker-alt icon"></i>
                                    <div class="info-content">
                                        <h6 class="info-title">our location</h6>
                                        <p class="info-text">5 Xyz St. Elraml Alexandria 10 Abc St. Elraml Alexandria</p>
                                    </div>
                                </div>
                                <div class="info-panel">
                                    <i class="fas fa-mobile-alt icon"></i>
                                    <div class="info-content">
                                        <h6 class="info-title">phone numbers</h6>
                                        <p class="info-text">(02) 0123456789</p>
                                    </div>
                                </div>
                                <div class="info-panel">
                                    <i class="fas fa-envelope icon"></i>
                                    <div class="info-content">
                                        <h6 class="info-title">email</h6>
                                        <p class="info-text">yourname@example.com</p>
                                    </div>
                                </div>
                                <div class="info-panel">
                                    <i class="fas fa-globe-africa icon"></i>
                                    <div class="info-content">
                                        <h6 class="info-title">website</h6>
                                        <p class="info-text"> https://www.your-name.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-6">
                        <div class="tittle-about wow animate__fadeInUp animate__animated" data-wow-duration="1500ms">
                            <div class="pp" >
                                <h1>Keep In Toutch
                                    <span class="title-design-element"></span>
                                </h1>
                            </div>
                            <div class="text wow animate__fadeInUp animate__animated" data-wow-duration="1700ms">
                                <p>We Will Answer Your Questions As Soon As Possible
                                </p>
                            </div>
                        </div>
                        <div class="contact-form-area input-boxed">
                            <form class="main-form" action="">
                                <div class="row">
                                    <div class="col-12 col-lg-6">
                                        <div class="input-wrapper">
                                            <input class="text-input" type="text">
                                            <label  for="">Name
                                                <span class="req">*</span>
                                            </label>
                                        </div>
                                    </div>
                                    <div class="col-12 col-lg-6">
                                        <div class="input-wrapper">
                                            <input class="text-input" type="text">
                                            <label  for="">E-mail
                                                <span class="req">*</span>
                                            </label>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="input-wrapper">
                                            <input class="text-input" type="text">
                                            <label  for="">Subject
                                                <span class="req">*</span>
                                            </label>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="input-wrapper">
                                            <textarea class="text-input" type="text"></textarea>
                                            <label  for="">Your Comment
                                                <span class="req">*</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div class="cta-links-area wow animate__fadeInUp animate__animated" data-wow-duration="1500ms">
                            <a class="cta-link cta-link-primary bbb" href="#">Send Your Message</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="map-box pt-5 mt-5">
                <div class="mapouter">
                    <div class="gmap_canvas">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6836.95918226564!2d31.36600772848498!3d31.040745784120542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe9b3681bca592a1d!2z2YPZhNmK2Kkg2KfZhNi52YTZiNmFINis2KfZhdi52Kkg2KfZhNmF2YbYtdmI2LHYqQ!5e0!3m2!1sar!2seg!4v1633517929334!5m2!1sar!2seg" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                    </div>
                </div>
            </div>
        </section>

        

        <Footer/>
    </div>
</template>

<script>
import "./main.css";
import Footer from "../../footer/footer";
export default ({
    name: "home-1",
    title: 'Change direction',
    components: {
        Footer,
    },
})

</script>

