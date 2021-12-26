<template>
  <div class="aali_tm_section">
    <div class="aali_tm_counter">
      <div class="container">
        <div class="counter_list">
          <ul class="wow fadeIn" data-wow-duration="1s">
            <li>
              <div class="list_inner">
                <div class="wrapper">
                  <div class="value">
                    <VisibilitySensor @change="onChange">
                      <span class="abs"
                        ><span class="tm_counter"
                          ><number
                            ref="tm_counterk"
                            :to="250000"
                            animationPaused
                            :duration="2"
                          /> </span
                        ><label class="big">+</label></span
                      >
                    </VisibilitySensor>
                  </div>
                  <div class="text">
                    <h3>Lines in Production</h3>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div class="list_inner">
                <div class="wrapper">
                  <div class="value">
                    <VisibilitySensor @change="onChange">
                      <span class="abs"
                        ><span
                          class="tm_counter"
                          data-from="0"
                          data-to="290"
                          data-speed="1200"
                          ><number
                            ref="tm_counter"
                            :to="290"
                            animationPaused
                            :duration="4"
                          /> </span
                        ><label class="small">+</label></span
                      >
                    </VisibilitySensor>
                  </div>
                  <div class="text">
                    <h3>AWS/GCP<br />API's</h3>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div class="list_inner">
                <div class="wrapper">
                  <div class="value">
                    <VisibilitySensor @change="onChange">
                      <span class="abs"
                        ><span class="tm_counter"
                          >$<number
                            ref="tm_counterclient"
                            :to="20000"
                            animationPaused
                            :duration="5"
                          /> </span
                        ><label class="small"></label></span
                      >
                    </VisibilitySensor>
                  </div>
                  <div class="text">
                    <h3>eCommerce<br />Revenue Generated</h3>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <span class="border moving_effect" data-direction="x"></span>
    </div>
  </div>
</template>

<script>
import VisibilitySensor from "vue-visibility-sensor";
export default {
  name: "Counter",
  components: {
    VisibilitySensor,
  },
  methods: {
    onChange(isVisible) {
      isVisible && this.$refs.tm_counter.restart();
      isVisible && this.$refs.tm_counterk.restart();
      isVisible && this.$refs.tm_counterclient.restart();
    },
  },
};
</script>
