<template>
    <div>

        <section class="error">
            <div class="overlay-photo-image-bg"></div>
            <div class="overlay-color"></div>
            <div class="container">
                <div class="col-12   mx-auto">
                    <div class="err-text-area text-center  ">
                        <h1 class="err-title hollow-text wow animate__fadeInUp animate__animated" data-wow-duration="0" >404</h1>
                        <h2 class="err-subtitle wow animate__fadeInUp animate__animated" data-wow-duration="2000ms" >page Not found</h2>
                        <p class="err-text narrow-centerd-text wow animate__fadeInUp animate__animated" data-wow-duration="4000ms" >
                            oops! the page you were asking for dosen't exist. try search our site for what you are looking for.
                        </p>
                    </div>
                </div>
                <div class="col-12 col-md-10 col-lg-8 mx-auto text-center">
                    <form class="search-form wow animate__fadeInUp animate__animated" data-wow-duration="6000ms"  action="">
                        <button class="search-btn" type="submit">
                            <i class="fas fa-search icon"></i>
                        </button>
                        <input class="search-input" type="search">
                    </form>
                    <div class="cta-links-area">
                        <a class=" btn-solid cta-link wow animate__fadeInUp animate__animated" data-wow-duration="8000ms" href="#">Get In Toutch</a>
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
    name: "home-5",
    components: {
        Footer,
    },
})

</script>