<template>
  <div class="aali_tm_header">
    <div class="container">
      <div class="inner">
        <div class="logo">
          <a class="light" href="#"><img src="img/logo/logo.png" alt="" /></a>
          <a class="dark" href="#"
            ><img
              :src="dark ? 'img/logo/logo.png' : 'img/logo/dark.png'"
              alt=""
          /></a>
        </div>
        <div class="menu">
          <ul class="anchor_nav">
            <li class="current"><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <!-- <li><a href="#portfolio">Portfolio</a></li> -->
            <li><a href="#service">Services</a></li>
            <li><a href="#testimonial">Testimonial</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { scroll_, stickyNav } from "../../utils/utils";

export default {
  name: "Header",
  props: {
    dark: Boolean,
  },
  mounted() {
    window.addEventListener("scroll", scroll_);
    window.addEventListener("scroll", stickyNav);
  },
};
</script>
