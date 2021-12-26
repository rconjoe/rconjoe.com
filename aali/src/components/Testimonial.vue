<template>
  <div class="aali_tm_section" id="testimonial">
    <div class="aali_tm_testimonials">
      <div class="left">
        <div class="image">
          <img src="img/about/3.png" alt="" />
        </div>
      </div>
      <div class="right">
        <div class="right_in">
          <div
            class="aali_tm_main_title"
            data-text-align="left"
            data-color="light"
          >
            <span>Testimonial</span>
            <h3>What People Say</h3>
          </div>
          <swiper
            class="owl-carousel ul"
            :options="swiperOptions"
            ref="mySwiper"
          >
            <swiper-slide class="item li">
              <div class="text">
                <p>
                  I hired Joe for a freelance project. 
                  I was impressed with his ability to quickly learn and implement the latest technology into our project. 
                  I'm very glad we trusted our IT assets with him as we were about to pay a large firm much more.
                </p>
              </div>
              <div class="name">
                <h3><span>Private Client, December 2021</span></h3>
              </div>
            </swiper-slide>
            <swiper-slide class="item li">
              <div class="text">
                <p>
                  It was a pleasure working with Joe. 
                  He was very professional while maintaining a personal rapport with me. 
                  His networking insight and experience is second to none. 
                  He lead his team by demonstrating mastery of concepts while taking time to mentor others. 
                  Don’t miss the opportunity to work with Joe!
                </p>
              </div>
              <div class="name">
                <h3>Dustin DeRouen, <span>Software Engineer</span></h3>
              </div>
            </swiper-slide>
            <swiper-slide class="item li">
              <div class="text">
                <p>
                  "Very fast and professional responses! 
                  I cannot recommend a better developer for a 1 on 1 small project."
                </p>
              </div>
              <div class="name">
                <h3>KCCKirby, <span>Twitch Affiliate, Content Creator</span></h3>
              </div>
            </swiper-slide>
          </swiper>
          <div class="direct">
            <a class="prev_button" href="#"><i class="icon-left"></i></a>
            <a class="next_button" href="#"><i class="icon-right"></i></a>
          </div>
        </div>
      </div>
      <span class="border"
        ><span
          class="in moving_effect"
          data-direction="x"
          data-reverse="yes"
        ></span
      ></span>
      <span
        class="square moving_effect"
        data-direction="y"
        data-reverse="yes"
      ></span>
      <span class="quote moving_effect" data-direction="x"
        ><i class="icon-quote-left"></i
      ></span>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
export default {
  name: "Testimonial",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperOptions: {
        slidesPerView: 1,
        loop: true,
        pagination: false,
        navigation: {
          prevEl: ".prev_button",
          nextEl: ".next_button",
        },
      },
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },
};
</script>
