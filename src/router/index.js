import Vue from "vue";
import VueRouter from "vue-router";

import Home1 from "../views/Home-Pages/Home-1.vue";
import Home2 from "../views/Home-Pages/Home-2.vue";
import Home3 from "../views/Home-Pages/Home-3.vue";
import Home4 from "../views/Home-Pages/Home-4.vue";
import Home5 from "../views/Home-Pages/Home-5.vue";
import Home6 from "../views/Home-Pages/Home-6.vue";

import About1 from "../views/About-Pages/About-1.vue";
import About2 from "../views/About-Pages/About-2.vue";

import Services1 from "../views/Services-Pages/Services-1.vue";
import Services2 from "../views/Services-Pages/Services-2.vue";

import PortfolioBlocks from "../views/Portfolio-Pages/Portfolio-Blocks.vue";
import PortfolioGrid from "../views/Portfolio-Pages/Portfolio-Grid.vue";
import Portfoliogrid from "../views/Portfolio-Pages/Portfolio-grid-Rounded.vue";
import PortfolioSingle from "../views/Portfolio-Pages/Portfolio-Single.vue";
import PortfolioSlider from "../views/Portfolio-Pages/Portfolio-Slider.vue";

import Blog1 from "../views/Blog-Pages/Blog-1.vue";
import Blog2 from "../views/Blog-Pages/Blog-2.vue";
import Blog3 from "../views/Blog-Pages/Blog-3.vue";
import SinglePost from "../views/Blog-Pages/Single-Post.vue";

import Page from "../views/Pages-Pages/404-page.vue";
import FAQ from "../views/Pages-Pages/FAQ.vue";
import Team from "../views/Pages-Pages/Our-Team.vue";
import Pricing from "../views/Pages-Pages/Pricing-Plans.vue";
import Member from "../views/Pages-Pages/Team-Member.vue";
import Testimonials from "../views/Pages-Pages/Testimonials.vue";

import Contact from "../views/contact-us/contact-us.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home1,
  },
  {
    path: "/index",
    name: "Home",
    component: Home1,
  },
  {
    path: "/home-1",
    name: "Home1",
    component: Home1,
  },
  {
    path: "/home-2",
    name: "Home2",
    component: Home2,
  },
  {
    path: "/home-3",
    name: "Home3",
    component: Home3,
  },
  {
    path: "/home-4",
    name: "Home4",
    component: Home4,
  },
  {
    path: "/home-5",
    name: "Home5",
    component: Home5,
  },
  {
    path: "/home-6",
    name: "Home6",
    component: Home6,
  },
  {
    path: "/about-1",
    name: "About1",
    component:About1,
  },
  {
    path: "/about-2",
    name: "About2",
    component:About2,
  },
  {
    path: "/services-1",
    name: "Services1",
    component:Services1,
  },
  {
    path: "/services-2",
    name: "Services2",
    component:Services2,
  },  {
    path: "/Portfolio-Blocks",
    name: "PortfolioBlocks",
    component: PortfolioBlocks,
  },
  {
    path: "/Portfolio-Grid",
    name: "PortfolioGrid",
    component:PortfolioGrid,
  },
  {
    path: "/Portfolio-grid-Rounded",
    name: "Portfoliorid",
    component:Portfoliogrid,
  },
  {
    path: "/Portfolio-Single",
    name: "PortfolioSingle",
    component:PortfolioSingle,
  },
  {
    path: "/Portfolio-Slider",
    name: "PortfolioSlider",
    component:PortfolioSlider,
  },
  {
    path: "/blog-1",
    name: "blog1",
    component:Blog1,
  },
  {
    path: "/blog-2",
    name: "blog2",
    component:Blog2,
  },
  {
    path: "/blog-3",
    name: "blog3",
    component:Blog3,
  },
  {
    path: "/Single-Post",
    name: "singlepost",
    component:SinglePost,
  },
  {
    path: "/404-page",
    name: "Page",
    component:Page,
  },
  {
    path: "/FAQ",
    name: "FAQ",
    component:FAQ,
  },
  {
    path: "/Our-Team",
    name: "Team",
    component:Team,
  },
  {
    path: "/Pricing-Plans",
    name: "Pricing",
    component:Pricing,
  },
  {
    path: "/Team-Member",
    name: "Member",
    component:Member,
  },
  {
    path: "/Testimonials",
    name: "Testimonials",
    component:Testimonials,
  },
  {
    path: "/Contact-us",
    name: "Contact",
    component:Contact,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
