<template>
  <div class="aali_tm_section">
    <div class="aali_tm_resume">
      <div class="content">
        <div class="container">
          <div class="resume_in">
            <div
              class="aali_tm_main_title"
              data-text-align="left"
              data-color="dark"
            >
              <span>Know More</span>
              <h3>My Resume</h3>
              <p>
                I really, really love coding. 
              </p>
            </div>
            <div class="content_inner">
              <ul>
                <li class="wow fadeInLeft" data-wow-duration="1s">
                  <h3 class="main_title"><span>Education</span></h3>
                  <ul class="list">
                    <li>
                      <div class="list_inner">
                        <span class="icon" v-html="edu"></span>
                        <div class="info">
                          <div class="left">
                            <h3>Cognitive Sciences</h3>
                            <span>University of Maine</span>
                          </div>
                          <div class="right">
                            <span>2018 - 2020</span>
                          </div>
                        </div>
                        <div class="text">
                          <p>
                            Aali is a leading web design agency with an
                            award-winning design
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="list_inner">
                        <span class="icon" v-html="edu"></span>
                        <div class="info">
                          <div class="left">
                            <h3>Civil Engineering</h3>
                            <span>University of Texas</span>
                          </div>
                          <div class="right">
                            <span>2014 - 2018</span>
                          </div>
                        </div>
                        <div class="text">
                          <p>
                            Aali is a leading web design agency with an
                            award-winning design
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="list_inner">
                        <span class="icon" v-html="edu"></span>
                        <div class="info">
                          <div class="left">
                            <h3>Bachelor of Science</h3>
                            <span>Univercity of Oxford</span>
                          </div>
                          <div class="right">
                            <span>2012 - 2014</span>
                          </div>
                        </div>
                        <div class="text">
                          <p>
                            Aali is a leading web design agency with an
                            award-winning design
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>
                <li class="wow fadeInRight" data-wow-duration="1s">
                  <h3 class="main_title"><span>Experience</span></h3>
                  <ul class="list">
                    <li>
                      <div class="list_inner">
                        <span class="icon" v-html="exp"></span>
                        <div class="info">
                          <div class="left">
                            <h3>Product Designer</h3>
                            <span>Easy Computers</span>
                          </div>
                          <div class="right">
                            <span>2018 - running</span>
                          </div>
                        </div>
                        <div class="text">
                          <p>
                            Aali is a leading web design agency with an
                            award-winning design
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="list_inner">
                        <span class="icon" v-html="exp"></span>
                        <div class="info">
                          <div class="left">
                            <h3>UI/UX Expert</h3>
                            <span>eTheme Group</span>
                          </div>
                          <div class="right">
                            <span>2015 - 2018</span>
                          </div>
                        </div>
                        <div class="text">
                          <p>
                            Aali is a leading web design agency with an
                            award-winning design
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="list_inner">
                        <span class="icon" v-html="exp"></span>
                        <div class="info">
                          <div class="left">
                            <h3>Senior Developer</h3>
                            <span>Envato Studio</span>
                          </div>
                          <div class="right">
                            <span>2012 - 2018</span>
                          </div>
                        </div>
                        <div class="text">
                          <p>
                            Aali is a leading web design agency with an
                            award-winning design
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="media" data-background-style="video">
        <!-- Background Styles: "video" and "image" // Also you can use any youtube, vimeo, and local videos -->
        <div
          class="video jarallax"
          data-speed="0"
          data-jarallax-video="https://www.youtube.com/watch?v=y8OnoxKotPQ"
        ></div>
        <div
          class="image jarallax"
          data-speed="0"
          data-img-url="img/about/1.jpg"
        ></div>
        <span
          class="square moving_effect"
          data-direction="y"
          data-reverse="yes"
        ></span>
      </div>
    </div>
  </div>
</template>

<script>
import { jarallaxContent } from "../utils/utils";
import { edu, exp } from "./svgImage";

export default {
  name: "Resume",
  data() {
    return {
      edu,
      exp,
    };
  },
  mounted() {
    jarallaxContent();
  },
};
</script>
