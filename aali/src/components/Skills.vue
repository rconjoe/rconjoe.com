<template>
  <div class="aali_tm_section">
    <div class="aali_tm_skills">
      <div class="container">
        <div class="skills_inner">
          <div class="left wow fadeInLeft" data-wow-duration="1s">
            <div
              class="aali_tm_main_title"
              data-text-align="left"
              data-color="light"
            >
              <span>My Skills</span>
              <h3>
                Add Value With<br />
                Custom IT Solutions
              </h3>
              <p>
                I'm building a cloud-based eCommerce API for use with interchangeable frontends
                that can be marketed as a scheduling and pay-per-session application to multiple
                industries. 
              </p>
            </div>
          </div>
          <div class="right wow fadeInRight" data-wow-duration="1s">
            <div class="dodo_progress">
              <div class="progress_inner skillsInner___" data-value="94">
                <span
                  ><span class="label">Cloud Software Architecture</span
                  ><span class="number">94%</span></span
                >
                <div class="background">
                  <div class="bar">
                    <div class="bar_in"></div>
                  </div>
                </div>
              </div>
              <div class="progress_inner skillsInner___" data-value="90">
                <span
                  ><span class="label">Web/Mobile Applications</span
                  ><span class="number">90%</span></span
                >
                <div class="background">
                  <div class="bar"><div class="bar_in"></div></div>
                </div>
              </div>
              <div class="progress_inner skillsInner___" data-value="81">
                <span
                  ><span class="label">Project Management</span
                  ><span class="number">81%</span></span
                >
                <div class="background">
                  <div class="bar"><div class="bar_in"></div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <span
        class="border moving_effect"
        data-direction="x"
        data-reverse="yes"
      ></span>
    </div>
  </div>
</template>

<script>
import { activeSkillProgress } from "../utils/utils";

export default {
  name: "Skills",
  mounted() {
    window.addEventListener("scroll", activeSkillProgress);
  },
};
</script>
