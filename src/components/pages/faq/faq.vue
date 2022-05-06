<template>
    <div>

        <section class="head-bg Portfolio">
            <div class="overlay-color"></div>
            <h1>FAQ</h1>
            <h2>
                <a href="home-1"><i class="fas fa-home icon "></i>
                Home / </a><span>Faq</span>
            </h2>
        </section>

        <section class="faq  ">
            <div class="container">
                <div class="section-heading center-heading wow animate__fadeInUp animate__animated" data-wow-duration="1500ms">
                    <h2 class="section-title">Frequently Asked Questions
                    <span class="title-design-element"></span></h2>
                    <div class="line"></div>
                </div>
                <div class="row">
                    <div class="col-12 col-lg-6">
                        <div class="row">
                            <div class="card col-12">
                                <div @click="show" class="heed">
                                     are your service easy to use?
                                </div>
                                <div  class="title">
                                    <p>
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                                        richardson ad squid. 3 wolf moon officia aute, eiusmod. Brunch 3 wolf
                                        moon tempor, iunt you probably haven't heard of them accusamus labore
                                        sustainable VHS.     
                                    </p>
                                </div>
                            </div>
                            <div class="card col-12">
                                <div @click="show" class="heed">
                                     is this services work in my country?
                                </div>
                                <div  class="title">
                                    <p>
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                                        richardson ad squid. 3 wolf moon officia aute, eiusmod. Brunch 3 wolf
                                        moon tempor, iunt you probably haven't heard of them accusamus labore
                                        sustainable VHS.     
                                    </p>
                                </div>
                            </div>
                            <div class="card col-12">
                                <div @click="show" class="heed">
                                     will i receive future updates?
                                </div>
                                <div  class="title">
                                    <p>
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                                        richardson ad squid. 3 wolf moon officia aute, eiusmod. Brunch 3 wolf
                                        moon tempor, iunt you probably haven't heard of them accusamus labore
                                        sustainable VHS.     
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-lg-6">
                        <div class="row">
                            <div class="card col-12">
                                <div @click="show" class="heed">
                                    How much I will pay?
                                </div>
                                <div  class="title">
                                    <p>
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                                        richardson ad squid. 3 wolf moon officia aute, eiusmod. Brunch 3 wolf
                                        moon tempor, iunt you probably haven't heard of them accusamus labore
                                        sustainable VHS.     
                                    </p>
                                </div>
                            </div>
                            <div class="card col-12">
                                <div @click="show" class="heed">
                                    are theres other fees?
                                </div>
                                <div  class="title">
                                    <p>
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                                        richardson ad squid. 3 wolf moon officia aute, eiusmod. Brunch 3 wolf
                                        moon tempor, iunt you probably haven't heard of them accusamus labore
                                        sustainable VHS.     
                                    </p>
                                </div>
                            </div>
                            <div class="card col-12">
                                <div @click="show" class="heed">
                                    how can i sign up the contract?
                                </div>
                                <div  class="title">
                                    <p>
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                                        richardson ad squid. 3 wolf moon officia aute, eiusmod. Brunch 3 wolf
                                        moon tempor, iunt you probably haven't heard of them accusamus labore
                                        sustainable VHS.     
                                    </p>
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
import Footer from "../../footer/footer";
export default ({
    name: "home-5",
    components: {
        Footer,
    },
})

</script>