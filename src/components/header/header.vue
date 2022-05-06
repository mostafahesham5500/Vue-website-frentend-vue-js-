<template>
  <div id="app">
  <b-navbar  class="container nav" toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#"><img src="../../assets/logo-light.png" alt=""></b-navbar-brand>

    <b-navbar-toggle @click="cli()" target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <li >        
          <router-link  class="all-link" to="#">home <i class="fas fa-chevron-down"></i>
          </router-link> 
            <ul class="list-pages">
              <li><router-link  to="/home-1">home-1</router-link></li>
              <li><router-link  to="/home-2">home-2</router-link></li>
              <li><router-link  to="/home-3">home-3</router-link></li>
              <li><router-link  to="/home-4">home-4</router-link></li>
              <li><router-link  to="/home-5">home-5</router-link></li>
              <li><router-link  to="/home-6">home-6</router-link></li>
            </ul>
        </li>
        <li >        
          <router-link class="all-link" to="/">about us <i class="fas fa-chevron-down"></i>
          </router-link> 
            <ul class="list-pages">
              <li><router-link  to="/about-1">about us 1</router-link></li>
              <li><router-link  to="/about-2">about us 2</router-link></li>
            </ul>
        </li>
        <li>        
          <router-link class="all-link" to="/">services <i class="fas fa-chevron-down"></i>
          </router-link> 
            <ul class="list-pages">
              <li><router-link  to="/services-1">services 1</router-link></li>
              <li><router-link  to="/services-2">services 2</router-link></li>
            </ul>
        </li>
        <li>        
          <router-link class="all-link" to="/">portfolio <i class="fas fa-chevron-down"></i>
          </router-link> 
            <ul class="list-pages">
              <li><router-link  to="/portfolio-blocks">portfolio blocks</router-link></li>
              <li><router-link  to="/portfolio-grid">portfolio grid</router-link></li>
              <li><router-link  to="/portfolio-grid-rounded">portfolio grid rounded</router-link></li>
              <li><router-link  to="/portfolio-slider">portfolio slider</router-link></li>
              <li><router-link  to="/portfolio-single">portfolio single</router-link></li>
            </ul>
        </li>
        <li>        
          <router-link class="all-link" to="/">blog <i class="fas fa-chevron-down"></i>
          </router-link> 
            <ul class="list-pages">
              <li><router-link  to="/blog-1">blog home 1 colmun</router-link></li>
              <li><router-link  to="/blog-2">blog home 2 columns</router-link></li>
              <li><router-link  to="/blog-3">blog home 3 columns</router-link></li>
              <li><router-link  to="/single-post">single post</router-link></li>
            </ul>
        </li>
        <li>        
          <router-link class="all-link" to="/">pages <i class="fas fa-chevron-down"></i>
          </router-link> 
            <ul class="list-pages">
              <li><router-link  to="/testimonials">testimonials</router-link></li>
              <li><router-link  to="/pricing-plans">pricing plans</router-link></li>
              <li><router-link  to="/our-team">our team</router-link></li>
              <li><router-link  to="/team-member">team member</router-link></li>
              <li><router-link  to="/FAQ">FAQ</router-link></li>
              <li><router-link  to="/404-page">404 page</router-link></li>
            </ul>
        </li>
        <li>        
          <router-link class="al all-link router-link-exact-active" to="/contact-us">contact us</router-link> 
        </li>
      </b-navbar-nav>
    </b-collapse>
    <div class="screen-mb">
      <ul>
        <li @click="e => e.target.classList.toggle('cc')">        
          <router-link class="all-link-mb" to="/">home <i class="fas fa-chevron-down"></i>
          </router-link> 
            <ul class="list-pages-mb list-pages-mb-show">
              <li><router-link  to="/home-1">home-1</router-link></li>
              <li><router-link  to="/home-2">home-2</router-link></li>
              <li><router-link  to="/home-3">home-3</router-link></li>
              <li><router-link  to="/home-4">home-4</router-link></li>
              <li><router-link  to="/home-5">home-5</router-link></li>
              <li><router-link  to="/home-6">home-6</router-link></li>
            </ul>
        </li>
        <li @click="e => e.target.classList.toggle('cc')">        
          <router-link class="all-link-mb" to="/">about us <i class="fas fa-chevron-down"></i>
          </router-link> 
            <ul class="list-pages-mb list-pages-mb-show">
              <li><router-link  to="/about-1">about us 1</router-link></li>
              <li><router-link  to="/about-2">about us 2</router-link></li>
            </ul>
        </li>
        <li @click="e => e.target.classList.toggle('cc')">        
          <router-link class="all-link-mb" to="/">services <i class="fas fa-chevron-down"></i>
          </router-link> 
            <ul class="list-pages-mb list-pages-mb-show">
              <li><router-link  to="/services-1">services 1</router-link></li>
              <li><router-link  to="/services-2">services 2</router-link></li>
            </ul>
        </li>
        <li @click="e => e.target.classList.toggle('cc')">        
          <router-link class="all-link-mb" to="/">portfolio <i class="fas fa-chevron-down"></i>
          </router-link> 
            <ul class="list-pages-mb list-pages-mb-show">
              <li><router-link  to="/portfolio-blocks">portfolio blocks</router-link></li>
              <li><router-link  to="/portfolio-grid">portfolio grid</router-link></li>
              <li><router-link  to="/portfolio-grid-rounded">portfolio grid rounded</router-link></li>
              <li><router-link  to="/portfolio-slider">portfolio slider</router-link></li>
              <li><router-link  to="/portfolio-single">portfolio single</router-link></li>
            </ul>
        </li>
        <li @click="e => e.target.classList.toggle('cc')">        
          <router-link class="all-link-mb" to="/">pages <i class="fas fa-chevron-down"></i>
          </router-link> 
            <ul class="list-pages-mb list-pages-mb-show">
              <li><router-link  to="/testimonials">testimonials</router-link></li>
              <li><router-link  to="/pricing-plans">pricing plans</router-link></li>
              <li><router-link  to="/our-team">our team</router-link></li>
              <li><router-link  to="/team-member">team member</router-link></li>
              <li><router-link  to="/FAQ">FAQ</router-link></li>
              <li><router-link  to="/404-page">404 page</router-link></li>
            </ul>
        </li>
        <li @click="e => e.target.classList.toggle('cc')">        
          <router-link class="all-link-mb" to="/">plog <i class="fas fa-chevron-down"></i>
          </router-link> 
            <ul class="list-pages-mb list-pages-mb-show">
              <li><router-link  to="/blog-1">blog home 1 colmun</router-link></li>
              <li><router-link  to="/blog-2">blog home 2 columns</router-link></li>
              <li><router-link  to="/blog-3">blog home 3 columns</router-link></li>
              <li><router-link  to="/single-post">single post</router-link></li>
            </ul>
        </li>
        <li>        
          <router-link class="al all-link-mb" to="/contact-us">contact us</router-link> 
        </li>
      </ul>
    </div>
    
  </b-navbar>
</div>
</template>

<script src="./head.js">

</script>

