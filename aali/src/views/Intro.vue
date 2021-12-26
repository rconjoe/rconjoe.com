<template>
  <fragment>
    <div class="aali_tm_intro">
      <div class="short_info">
        <img src="img/logo/dark.png" alt="" />
        <h3>Personal Portfolio VueJs Template</h3>
      </div>
      <span class="intro_line"></span>
      <span class="intro_line_2"></span>
      <span class="intro_line_3"></span>
      <div class="demos">
        <div class="left">
          <div class="desc">
            <img src="img/intro/1.png" alt="" />
            <h3 class="title">Light Demo</h3>
          </div>
          <a class="intro_link" href="/" target="_blank"></a>
        </div>
        <div class="right">
          <div class="desc">
            <img src="img/intro/1.png" alt="" />
            <h3 class="title">Dark Demo</h3>
          </div>
          <a class="intro_link" href="/index-dark" target="_blank"></a>
        </div>
      </div>
    </div>
  </fragment>
</template>

<script>
export default {
  name: "Intro",
  mounted() {
    document.querySelector("body").classList.add("intro");
  },
};
</script>
