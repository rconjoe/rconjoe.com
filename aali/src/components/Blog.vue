<template>
  <div class="aali_tm_section" id="blog">
    <div class="aali_tm_news">
      <div class="container">
        <div
          class="aali_tm_main_title"
          data-text-align="center"
          data-color="dark"
        >
          <span>Latest Updates</span>
          <h3>From My Blog</h3>
          <p>
            I just put this site up on 12/25/2021. I'm working on moving all my 
            markdown blog posts over to this site in a usable manner.
          </p>
        </div>
        <!-- <div class="news_list">
          <ul>
            <li class="wow fadeInLeft" data-wow-duration="1s">
              <div class="list_inner">
                <div class="image">
                  <img src="img/thumbs/42-29.jpg" alt="" />
                  <div class="main" data-img-url="img/news/1.jpg"></div>
                  <a
                    class="aali_tm_full_link"
                    @click.prevent="active = 1"
                    href="#"
                  ></a>
                </div>
                <div class="details">
                  <span class="category"
                    ><a href="#" @click.prevent="active = 1"
                      >Web Design</a
                    ></span
                  >
                  <h3 class="title">
                    <a href="#">How to create simple personal website</a>
                  </h3>
                  <span class="date">November 10, 2021</span>
                </div>
                <div class="button">
                  <div class="aali_tm_learn_more">
                    <a href="#" @click.prevent="active = 1">Full Story</a>
                  </div>
                </div>
                <div :class="`${active === 1 ? '' : 'news_hidden_details'}`">
                  <ModalBox :close="close">
                    <div class="news_popup_informations">
                      <div class="image">
                        <img src="img/thumbs/4-2.jpg" alt="" />
                        <div
                          class="main"
                          data-img-url="img/news/1.jpg"
                          style="background-image: url('img/news/1.jpg')"
                        ></div>
                      </div>
                      <div class="details">
                        <span class="category"><a href="#">Web Design</a></span>
                        <h3 class="title">
                          <a href="#">How to create simple personal website</a>
                        </h3>
                        <span class="date">November 10, 2021</span>
                        <div></div>
                      </div>
                      <div class="text">
                        <p>
                          Aali is a leading web design agency with an
                          award-winning design team that creates innovative,
                          effective websites that capture your brand, improve
                          your conversion rates, and maximize your revenue to
                          help grow your business and achieve your goals.
                        </p>
                        <p>
                          In today’s digital world, your website is the first
                          interaction consumers have with your business. That's
                          why almost 95 percent of a user’s first impression
                          relates to web design. It’s also why web design
                          services can have an immense impact on your company’s
                          bottom line.
                        </p>
                        <p>
                          That’s why more companies are not only reevaluating
                          their website’s design but also partnering with Kura,
                          the web design agency that’s driven more than $2.4
                          billion in revenue for its clients. With over 50 web
                          design awards under our belt, we're confident we can
                          design a custom website that drives sales for your
                          unique business.
                        </p>
                      </div>
                    </div>
                  </ModalBox>
                </div>
              </div>
            </li>
            <li class="wow fadeInRight" data-wow-duration="1s">
              <div class="list_inner">
                <div class="image">
                  <img src="img/thumbs/42-29.jpg" alt="" />
                  <div class="main" data-img-url="img/news/2.jpg"></div>
                  <a
                    class="aali_tm_full_link"
                    href="#"
                    @click.prevent="active = 2"
                  ></a>
                </div>
                <div class="details">
                  <span class="category"
                    ><a href="#" @click.prevent="active = 2"
                      >Development</a
                    ></span
                  >
                  <h3 class="title">
                    <a href="#" @click.prevent="active = 2"
                      >What is mobile app and web design</a
                    >
                  </h3>
                  <span class="date">October 22, 2021</span>
                </div>
                <div class="button">
                  <div class="aali_tm_learn_more">
                    <a href="#" @click.prevent="active = 2">Full Story</a>
                  </div>
                </div>
                <div :class="`${active === 2 ? '' : 'news_hidden_details'}`">
                  <ModalBox :close="close">
                    <div class="news_popup_informations">
                      <div class="image">
                        <img src="img/thumbs/4-2.jpg" alt="" />
                        <div
                          class="main"
                          data-img-url="img/news/2.jpg"
                          style="background-image: url('img/news/2.jpg')"
                        ></div>
                      </div>
                      <div class="details">
                        <span class="category"
                          ><a href="#">Development</a></span
                        >
                        <h3 class="title">
                          <a href="#">What is mobile app and web design</a>
                        </h3>
                        <span class="date">October 22, 2021</span>
                        <div></div>
                      </div>
                      <div class="text">
                        <p>
                          Aali is a leading web design agency with an
                          award-winning design team that creates innovative,
                          effective websites that capture your brand, improve
                          your conversion rates, and maximize your revenue to
                          help grow your business and achieve your goals.
                        </p>
                        <p>
                          In today’s digital world, your website is the first
                          interaction consumers have with your business. That's
                          why almost 95 percent of a user’s first impression
                          relates to web design. It’s also why web design
                          services can have an immense impact on your company’s
                          bottom line.
                        </p>
                        <p>
                          That’s why more companies are not only reevaluating
                          their website’s design but also partnering with Kura,
                          the web design agency that’s driven more than $2.4
                          billion in revenue for its clients. With over 50 web
                          design awards under our belt, we're confident we can
                          design a custom website that drives sales for your
                          unique business.
                        </p>
                      </div>
                    </div>
                  </ModalBox>
                </div>
              </div>
            </li>
          </ul>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
// import ModalBox from "./ModalBox.vue";
export default {
  name: "Blog",
  data() {
    return {
      active: 0,
    };
  },
  methods: {
    close() {
      this.active = 0;
    },
  },
  // components: { ModalBox },
};
</script>
