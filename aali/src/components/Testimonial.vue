<template>
  <div class="aali_tm_section" id="testimonial">
    <div class="aali_tm_testimonials">
      <div class="left">
        <div class="image">
          <img src="img/hero/2.png" alt="" />
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
                  I had a problem finding something, asked the support team, got
                  a reply and a solution within a few minutes. Brilliant
                  support! Very happy with the website I bought.
                </p>
              </div>
              <div class="name">
                <h3>Tom Anderson, <span>Customer</span></h3>
              </div>
            </swiper-slide>
            <swiper-slide class="item li">
              <div class="text">
                <p>
                  Good overall template. I am getting back into coding and had a
                  simple question for the author. They responded within 5
                  minutes and answered my question. Highly recommend!
                </p>
              </div>
              <div class="name">
                <h3>Jessica Parker, <span>App Developer</span></h3>
              </div>
            </swiper-slide>
            <swiper-slide class="item li">
              <div class="text">
                <p>
                  I can't believe I got support and my problem resolved in just
                  minutes from posting my question. Simply amazing team and
                  amazing theme! Thank you for all!
                </p>
              </div>
              <div class="name">
                <h3>MacLaren, <span>Freelancer</span></h3>
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
