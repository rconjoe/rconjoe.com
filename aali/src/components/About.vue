<template>
  <div class="aali_tm_section" id="about">
    <div class="aali_tm_about">
      <div class="about_inner">
        <div class="left">
          <div class="image">
            <img src="img/thumbs/45-49.jpg" alt="" />
            <div class="main" data-img-url="img/about/1.jpg"></div>
            <span
              class="square moving_effect"
              data-direction="y"
              data-reverse="yes"
            ></span>
            <span class="border"
              ><span
                class="in moving_effect"
                data-direction="x"
                data-reverse="yes"
              ></span
            ></span>
          </div>
        </div>
        <div class="center">
          <div class="title wow fadeInUp" data-wow-duration="1s">
            <span class="small">About Me</span>
            <h3>I'm <span>Joe</span></h3>
            <h3>a Software <span>Engineer</span></h3>
            <span class="subtitle">Based in Long Beach, California</span>
          </div>
          <div
            class="text wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay="0.2s"
          >
            <p>
              A battle-tested full stack engineer, specializing in backend
              design and cloud architecture. I'm a project manager and a passionate leader who 
              believes in the products he delivers.
            </p>
            <p>
              New challenges don't scare me, and I can adapt to any role I'm needed
              to fill. Even though I love data, I have a mean UI streak and can 
              put together a great user experience.
            </p>
          </div>
          <div
            class="aali_tm_button wow fadeInUp"
            data-wow-duration="1.5s"
            data-wow-delay="0.2s"
          >
            <a href="img/cv/Joe_Carlton_Resume.PDF" download>
              <span v-html="download"> </span
            ></a>
          </div>
        </div>
        <div class="right">
          <div class="image">
            <img src="img/thumbs/41-61.jpg" alt="" />
            <div class="main" data-img-url="img/about/2.png"></div>
            <div
              class="square moving_effect"
              data-direction="x"
              data-reverse="no"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { download } from "./svgImage";
export default {
  name: "About",
  data() {
    return {
      download: `Download Resume ${download}`,
    };
  },
};
</script>
