<template>
  <div class="aali_tm_mobile_menu">
    <div class="mobile_menu_inner">
      <div class="mobile_in">
        <div class="logo">
          <a href="#"><img src="img/logo/dark.png" alt="" /></a>
        </div>
        <div class="trigger">
          <div
            class="hamburger hamburger--slider"
            @click="toggle = !toggle"
            :class="toggle ? 'is-active' : ''"
          >
            <div class="hamburger-box">
              <div class="hamburger-inner"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="dropdown" :style="{ display: toggle ? `block` : `none` }">
      <div class="dropdown_inner">
        <ul class="anchor_nav">
          <li class="current"><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <!-- <li><a href="#portfolio">Portfolio</a></li> -->
          <li><a href="#service">Service</a></li>
          <li><a href="#testimonial">Testimonial</a></li>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MobileMenu",
  data() {
    return {
      toggle: false,
    };
  },
};
</script>
