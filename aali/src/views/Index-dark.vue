<template>
  <div class="aali_tm_all_wrap" data-magic-cursor="show">
    <MobileMenu />
    <Header :dark="true" />
    <Home />
    <About />
    <Skills />
    <Portfolio />
    <Service :dark="true" />
    <Resume />
    <Testimonial />
    <Blog />
    <Counter />
    <Contact />
    <Footer />
    <!-- Curosr -->
    <Mouse />
  </div>
</template>

<script>
import About from "../components/About.vue";
import Blog from "../components/Blog.vue";
import Contact from "../components/Contact.vue";
import Counter from "../components/Counter.vue";
import Home from "../components/Home.vue";
import Footer from "../components/layouts/Footer.vue";
import Header from "../components/layouts/Header.vue";
import MobileMenu from "../components/layouts/MobileMenu.vue";
import Mouse from "../components/layouts/Mouse.vue";
import Portfolio from "../components/Portfolio.vue";
import Resume from "../components/Resume.vue";
import Service from "../components/Service.vue";
import Skills from "../components/Skills.vue";
import Testimonial from "../components/Testimonial.vue";
export default {
  name: "Index",
  components: {
    Header,
    Home,
    About,
    Skills,
    Portfolio,
    Service,
    Resume,
    Testimonial,
    Mouse,
    Blog,
    Counter,
    Contact,
    Footer,
    MobileMenu,
  },
  mounted() {
    document.querySelector("body").classList.add("dark");
  },
};
</script>
