<template>
  <fragment>
    <PreLoader />
    <router-view />
    <Cursor />
  </fragment>
</template>

<script>
import PreLoader from "@/components/layouts/PreLoader.vue";
import {
  aali_tm_moving_animation,
  aTagClick,
  customCursor,
  dataImage,
  preloader,
  wowJsAnimation,
} from "./utils/utils.js";
export default {
  name: "App",
  components: {
    PreLoader,
  },
  mounted() {
    preloader();
    dataImage();
    aali_tm_moving_animation();
    wowJsAnimation();
    aTagClick();
    customCursor();
  },
};
</script>
