<template>
  <div class="aali_tm_section" id="home">
    <div class="aali_tm_hero">
      <div class="container">
        <div class="hero_inner">
          <div class="content">
            <span class="hello">Hello, I'm</span>
            <h3 class="name">Joe</h3>
            <div class="job">
              <span class="cd-headline rotate-1">
                <!-- ANIMATE TEXT VALUES: zoom, rotate-1, letters type, letters rotate-2, loading-bar, slide, clip, letters rotate-3, letters scale, push,  -->
                <span class="blc">Software Engineer </span>
                <span class="cd-words-wrapper">
                  <b :class="text === 1 ? `is-visible` : `is-hidden`">
                    Backend Designer
                  </b>
                  <b :class="text === 2 ? `is-visible` : `is-hidden`">
                    Project Manager
                  </b>
                  <b :class="text === 3 ? `is-visible` : `is-hidden`">
                    Cloud Architect
                  </b>
                </span>
              </span>
            </div>
            <div class="hero_buttons">
              <div class="aali_tm_button">
                <a class="anchor" href="#contact"
                  ><span v-html="`Say Hello ` + msg"> </span
                ></a>
              </div>
              <div class="simple_button">
                <a class="anchor" href="#about">About Me</a>
              </div>
            </div>
            <div class="aali_tm_down">
              <div class="down-icon white top_120">
                <a class="anchor" href="#about">
                  <svg
                    width="26px"
                    height="100%"
                    viewBox="0 0 247 390"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    style="
                      fill-rule: evenodd;
                      clip-rule: evenodd;
                      stroke-linecap: round;
                      stroke-linejoin: round;
                      stroke-miterlimit: 1.5;
                    "
                  >
                    <path
                      id="wheel"
                      d="M123.359,79.775l0,72.843"
                      style="fill: none; stroke: #fff; stroke-width: 20px"
                    />
                    <path
                      id="mouse"
                      d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z"
                      style="fill: none; stroke: #fff; stroke-width: 20px"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div class="avatar parallax" data-relative-input="true">
            <div class="main">
              <img src="img/hero/1.jpeg" alt="" class="layer" data-depth="0.1" />
            </div>
            <span class="one"
              ><span class="in layer" data-depth="0.14"></span
            ></span>
            <!-- <span class="two"
              ><span class="in layer" data-depth="0.18"></span
            ></span> -->
            <span class="three"
              ><span class="in layer" data-depth="0.22"></span
            ></span>
            <span class="four"
              ><span class="in layer" data-depth="0.26"></span
            ></span>
            <span class="five"
              ><span class="in layer" data-depth="0.3"></span
            ></span>
            <h3 class="stroke_text"><span class="">rcon_joe</span></h3>
          </div>
        </div>
      </div>
      <div class="socials">
        <ul>
          <li>
            <a href="https://twitter.com/rcon_joe" v-html="twitter"></a>
          </li>
          <li>
            <a href="https://instagr.am/trogdooor" v-html="insta"></a>
          </li>
        </ul>
      </div>
      <div class="hero_mail">
        <a class="line_anim" href="#">joe@rconjoe.com</a>
      </div>
    </div>
  </div>
</template>

<script>
import { parallax } from "../utils/utils";
import { insta, msg, twitter } from "./svgImage";

export default {
  name: "Home",
  data() {
    return {
      msg,
      insta,
      twitter,
      text: 1,
    };
  },
  mounted() {
    parallax();
    const interval = setInterval(() => {
      this.text = this.text < 3 ? this.text + 1 : 1;
    }, 5000);
    return () => clearInterval(interval);
  },
};
</script>
