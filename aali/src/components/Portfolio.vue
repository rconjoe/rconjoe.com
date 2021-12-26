<template>
  <div class="aali_tm_section help" id="portfolio">
    <div class="aali_tm_portfolio wow fadeInUp" data-wow-duration="1s">
      <div class="container">
        <div
          class="aali_tm_main_title"
          data-text-align="center"
          data-color="light"
        >
          <span>Selected works</span>
          <h3>Check my portfolio</h3>
        </div>
        <div class="portfolio_filter">
          <ul>
            <li><a href="#" class="current" data-filter="*">All</a></li>
            <li><a href="#" data-filter=".vimeo">Vimeo</a></li>
            <li><a href="#" data-filter=".youtube">Youtube</a></li>
            <li><a href="#" data-filter=".soundcloud">Soundcloud</a></li>
            <li><a href="#" data-filter=".image">Image</a></li>
            <li><a href="#" data-filter=".detail">Detail</a></li>
          </ul>
        </div>
        <div class="portfolio_list">
          <ul class="gallery_zoom">
            <li class="vimeo gallery_item">
              <div class="list_inner">
                <div class="image">
                  <img src="img/thumbs/1-1.jpg" alt="" />
                  <div class="main" data-img-url="img/portfolio/1.jpg"></div>
                </div>
                <div class="overlay"></div>
                <div v-html="vimeo"></div>
                <div class="details">
                  <span>Vimeo</span>
                  <h3>New Laptop</h3>
                </div>
                <a
                  class="aali_tm_full_link popup-vimeo"
                  href="#"
                  @click.prevent="() => onClick('vimeo', '337293658')"
                ></a>
              </div>
            </li>
            <li class="youtube gallery_item">
              <div class="list_inner">
                <div class="image">
                  <img src="img/thumbs/1-1.jpg" alt="" />
                  <div class="main" data-img-url="img/portfolio/2.jpg"></div>
                </div>
                <div class="overlay"></div>
                <div v-html="youtube"></div>
                <div class="details">
                  <span>Youtube</span>
                  <h3>Best Phone</h3>
                </div>
                <a
                  class="aali_tm_full_link popup-youtube"
                  href="#"
                  @click.prevent="() => onClick('youtube', '7e90gBu4pas')"
                ></a>
              </div>
            </li>
            <li class="soundcloud gallery_item">
              <div class="list_inner">
                <div class="image">
                  <img src="img/thumbs/1-1.jpg" alt="" />
                  <div class="main" data-img-url="img/portfolio/3.jpg"></div>
                </div>
                <div class="overlay"></div>
                <div v-html="soundcloud"></div>
                <div class="details">
                  <span>Soundcloud</span>
                  <h3>Smart Headphone</h3>
                </div>
                <a
                  class="aali_tm_full_link soundcloude_link mfp-iframe audio"
                  href="#"
                  @click.prevent="() => onClick('soundcloud', '471954807')"
                ></a>
              </div>
            </li>
            <li class="detail gallery_item">
              <div class="list_inner">
                <div class="image">
                  <img src="img/thumbs/1-1.jpg" alt="" />
                  <div class="main" data-img-url="img/portfolio/4.jpg"></div>
                </div>
                <div class="overlay"></div>
                <div v-html="text"></div>
                <div class="details">
                  <span>Detail</span>
                  <h3>Hippie Sabotage</h3>
                </div>
                <a
                  class="aali_tm_full_link portfolio_popup"
                  href="#"
                  @click.prevent="active = 1"
                ></a>

                <div :class="`${active === 1 ? '' : 'hidden_content'}`">
                  <ModalBox :close="close">
                    <div class="popup_details">
                      <div class="top_image">
                        <img src="img/thumbs/4-2.jpg" alt="" />
                        <div
                          class="main"
                          data-img-url="img/portfolio/4.jpg"
                          style="background-image: url('img/portfolio/4.jpg')"
                        ></div>
                      </div>
                      <div class="portfolio_main_title">
                        <span>Detail</span>
                        <h3>Hippie Sabotage</h3>
                        <div></div>
                      </div>
                      <div class="main_details">
                        <div class="textbox">
                          <p>
                            We live in a world where we need to move quickly and
                            iterate on our ideas as flexibly as possible.
                            Building mockups strikes the ideal balance ease of
                            modification.
                          </p>
                          <p>
                            Mockups are useful both for the creative phase of
                            the project - for instance when you're trying to
                            figure out your user flows or the proper visual
                            hierarchy - and the production phase when they will
                            represent the target product.
                          </p>
                        </div>
                        <div class="detailbox">
                          <ul>
                            <li>
                              <span class="first">Client</span
                              ><span>Alvaro Morata</span>
                            </li>
                            <li>
                              <span class="first">Category</span
                              ><span><a href="#">Detail</a></span>
                            </li>
                            <li>
                              <span class="first">Date</span
                              ><span>March 07, 2021</span>
                            </li>
                            <li>
                              <span class="first">Share</span>
                              <ul class="share">
                                <li>
                                  <a href="#"
                                    ><svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      xmlns:xlink="http://www.w3.org/1999/xlink"
                                      version="1.1"
                                      x="0px"
                                      y="0px"
                                      width="96.124px"
                                      height="96.123px"
                                      viewBox="0 0 96.124 96.123"
                                      xml:space="preserve"
                                      class="svg replaced-svg"
                                    >
                                      <g>
                                        <path
                                          d="M72.089,0.02L59.624,0C45.62,0,36.57,9.285,36.57,23.656v10.907H24.037c-1.083,0-1.96,0.878-1.96,1.961v15.803 c0,1.083,0.878,1.96,1.96,1.96h12.533v39.876c0,1.083,0.877,1.96,1.96,1.96h16.352c1.083,0,1.96-0.878,1.96-1.96V54.287h14.654 c1.083,0,1.96-0.877,1.96-1.96l0.006-15.803c0-0.52-0.207-1.018-0.574-1.386c-0.367-0.368-0.867-0.575-1.387-0.575H56.842v-9.246 c0-4.444,1.059-6.7,6.848-6.7l8.397-0.003c1.082,0,1.959-0.878,1.959-1.96V1.98C74.046,0.899,73.17,0.022,72.089,0.02z"
                                        ></path>
                                      </g>
                                      <g></g>
                                      <g></g>
                                      <g></g>
                                      <g></g>
                                      <g></g>
                                      <g></g>
                                      <g></g>
                                      <g></g>
                                      <g></g>
                                      <g></g>
                                      <g></g>
                                      <g></g>
                                      <g></g>
                                      <g></g>
                                      <g></g></svg
                                  ></a>
                                </li>
                                <li>
                                  <a href="#"
                                    ><svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      xmlns:xlink="http://www.w3.org/1999/xlink"
                                      version="1.1"
                                      x="0px"
                                      y="0px"
                                      viewBox="0 0 512 512"
                                      xml:space="preserve"
                                      class="svg replaced-svg"
                                    >
                                      <g>
                                        <g>
                                          <path
                                            d="M512,97.248c-19.04,8.352-39.328,13.888-60.48,16.576c21.76-12.992,38.368-33.408,46.176-58.016 c-20.288,12.096-42.688,20.64-66.56,25.408C411.872,60.704,384.416,48,354.464,48c-58.112,0-104.896,47.168-104.896,104.992 c0,8.32,0.704,16.32,2.432,23.936c-87.264-4.256-164.48-46.08-216.352-109.792c-9.056,15.712-14.368,33.696-14.368,53.056 c0,36.352,18.72,68.576,46.624,87.232c-16.864-0.32-33.408-5.216-47.424-12.928c0,0.32,0,0.736,0,1.152 c0,51.008,36.384,93.376,84.096,103.136c-8.544,2.336-17.856,3.456-27.52,3.456c-6.72,0-13.504-0.384-19.872-1.792 c13.6,41.568,52.192,72.128,98.08,73.12c-35.712,27.936-81.056,44.768-130.144,44.768c-8.608,0-16.864-0.384-25.12-1.44 C46.496,446.88,101.6,464,161.024,464c193.152,0,298.752-160,298.752-298.688c0-4.64-0.16-9.12-0.384-13.568 C480.224,136.96,497.728,118.496,512,97.248z"
                                          ></path>
                                        </g>
                                      </g>
                                      <g></g>
                                      <g></g>
                                      <g></g>
                                      <g></g>
                                      <g></g>
                                      <g></g>
                                      <g></g>
                                      <g></g>
                                      <g></g>
                                      <g></g>
                                      <g></g>
                                      <g></g>
                                      <g></g>
                                      <g></g>
                                      <g></g></svg
                                  ></a>
                                </li>
                                <li>
                                  <a href="#"
                                    ><svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      xmlns:xlink="http://www.w3.org/1999/xlink"
                                      version="1.1"
                                      x="0px"
                                      y="0px"
                                      viewBox="0 0 512 512"
                                      xml:space="preserve"
                                      width="512"
                                      height="512"
                                      class="svg replaced-svg"
                                    >
                                      <g>
                                        <path
                                          d="M256,152c-57.9,0-105,47.1-105,105s47.1,105,105,105s105-47.1,105-105S313.9,152,256,152z M256,152 c-57.9,0-105,47.1-105,105s47.1,105,105,105s105-47.1,105-105S313.9,152,256,152z M437,0H75C33.6,0,0,33.6,0,75v362 c0,41.4,33.6,75,75,75h362c41.4,0,75-33.6,75-75V75C512,33.6,478.4,0,437,0z M256,392c-74.399,0-135-60.601-135-135 c0-74.401,60.601-135,135-135s135,60.599,135,135C391,331.399,330.399,392,256,392z M421,122c-16.5,0-30-13.5-30-30s13.5-30,30-30 s30,13.5,30,30S437.5,122,421,122z M256,152c-57.9,0-105,47.1-105,105s47.1,105,105,105s105-47.1,105-105S313.9,152,256,152z M256,152c-57.9,0-105,47.1-105,105s47.1,105,105,105s105-47.1,105-105S313.9,152,256,152z M256,152c-57.9,0-105,47.1-105,105 s47.1,105,105,105s105-47.1,105-105S313.9,152,256,152z"
                                        ></path>
                                      </g></svg
                                  ></a>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div class="additional_images">
                        <ul>
                          <li>
                            <div class="list_inner">
                              <div class="my_image">
                                <img
                                  src="img/thumbs/4-2.jpg"
                                  alt="aali image"
                                />
                                <div
                                  class="main"
                                  data-img-url="img/portfolio/1.jpg"
                                  style="
                                    background-image: url('img/portfolio/1.jpg');
                                  "
                                ></div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div class="list_inner">
                              <div class="my_image">
                                <img
                                  src="img/thumbs/4-2.jpg"
                                  alt="aali image"
                                />
                                <div
                                  class="main"
                                  data-img-url="img/portfolio/2.jpg"
                                  style="
                                    background-image: url('img/portfolio/2.jpg');
                                  "
                                ></div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div class="list_inner">
                              <div class="my_image">
                                <img
                                  src="img/thumbs/4-2.jpg"
                                  alt="aali image"
                                />
                                <div
                                  class="main"
                                  data-img-url="img/portfolio/3.jpg"
                                  style="
                                    background-image: url('img/portfolio/3.jpg');
                                  "
                                ></div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </ModalBox>
                </div>
              </div>
            </li>
            <li class="image gallery_item">
              <div class="list_inner">
                <div class="image">
                  <img src="img/thumbs/1-1.jpg" alt="" />
                  <div class="main" data-img-url="img/portfolio/5.jpg"></div>
                </div>
                <div class="overlay"></div>
                <div v-html="maximize"></div>
                <div class="details">
                  <span>Image</span>
                  <h3>Mockup Camera</h3>
                </div>
                <a
                  class="aali_tm_full_link zoom"
                  href="#"
                  @click.prevent="() => onClick('img', 'img/portfolio/5.jpg')"
                ></a>
              </div>
            </li>
            <li class="detail gallery_item">
              <div class="list_inner">
                <div class="image">
                  <img src="img/thumbs/1-1.jpg" alt="" />
                  <div class="main" data-img-url="img/portfolio/6.jpg"></div>
                </div>
                <div class="overlay"></div>
                <div v-html="text"></div>
                <div class="details">
                  <span>Detail</span>
                  <h3>Good Present</h3>
                </div>
                <a
                  class="aali_tm_full_link portfolio_popup"
                  href="#"
                  @click.prevent="active = 2"
                ></a>

                <div :class="`${active === 2 ? '' : 'hidden_content'}`">
                  <ModalBox :close="close">
                    <div class="popup_details">
                      <div class="top_image">
                        <img src="img/thumbs/4-2.jpg" alt="" />
                        <div
                          class="main"
                          data-img-url="img/portfolio/6.jpg"
                          style="background-image: url('img/portfolio/6.jpg')"
                        ></div>
                      </div>
                      <div class="portfolio_main_title">
                        <span>Detail</span>
                        <h3>Good Present</h3>
                        <div></div>
                      </div>
                      <div class="main_details">
                        <div class="textbox">
                          <p>
                            We live in a world where we need to move quickly and
                            iterate on our ideas as flexibly as possible.
                            Building mockups strikes the ideal balance ease of
                            modification.
                          </p>
                          <p>
                            Mockups are useful both for the creative phase of
                            the project - for instance when you're trying to
                            figure out your user flows or the proper visual
                            hierarchy - and the production phase when they will
                            represent the target product.
                          </p>
                        </div>
                        <div class="detailbox">
                          <ul>
                            <li>
                              <span class="first">Client</span>
                              <span>Alvaro Morata</span>
                            </li>
                            <li>
                              <span class="first">Category</span>
                              <span><a href="#">Detail</a></span>
                            </li>
                            <li>
                              <span class="first">Date</span>
                              <span>March 07, 2021</span>
                            </li>
                            <li>
                              <span class="first">Share</span>
                              <ul class="share">
                                <li>
                                  <a href="#"
                                    ><img
                                      class="svg"
                                      src="img/svg/social/facebook.svg"
                                      alt=""
                                  /></a>
                                </li>
                                <li>
                                  <a href="#"
                                    ><img
                                      class="svg"
                                      src="img/svg/social/twitter.svg"
                                      alt=""
                                  /></a>
                                </li>
                                <li>
                                  <a href="#"
                                    ><img
                                      class="svg"
                                      src="img/svg/social/instagram.svg"
                                      alt=""
                                  /></a>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div class="additional_images">
                        <ul>
                          <li>
                            <div class="list_inner">
                              <div class="my_image">
                                <img src="img/thumbs/4-2.jpg" alt="" />
                                <div
                                  class="main"
                                  data-img-url="img/portfolio/1.jpg"
                                  style="
                                    background-image: url('img/portfolio/1.jpg');
                                  "
                                ></div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div class="list_inner">
                              <div class="my_image">
                                <img src="img/thumbs/4-2.jpg" alt="" />
                                <div
                                  class="main"
                                  data-img-url="img/portfolio/2.jpg"
                                  style="
                                    background-image: url('img/portfolio/2.jpg');
                                  "
                                ></div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div class="list_inner">
                              <div class="my_image">
                                <img src="img/thumbs/4-2.jpg" alt="" />
                                <div
                                  class="main"
                                  data-img-url="img/portfolio/3.jpg"
                                  style="
                                    background-image: url('img/portfolio/3.jpg');
                                  "
                                ></div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </ModalBox>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <MagnificPopUp :modal="modal" :close="closeModal" :name="name" :src="src" />
  </div>
</template>

<script>
import MagnificPopUp from "./MagnificPopUp.vue";
import ModalBox from "./ModalBox.vue";
import { maximize, soundcloud, text, vimeo, youtube } from "./svgImage";
export default {
  name: "Portfolio",
  data() {
    return {
      vimeo,
      youtube,
      soundcloud,
      text,
      maximize,
      // props
      name: "",
      src: "",
      modal: false,
      // Content
      active: 0,
    };
  },
  mounted() {
    let Isotope = require("isotope-layout");
    setTimeout(() => {
      let iso = new Isotope(".gallery_zoom", {
        itemSelector: ".gallery_item",
        layoutMode: "fitRows",
      });
      let filterFns = {
        // show if number is greater than 50
        numberGreaterThan50: function (itemElem) {
          let number = itemElem.querySelector(".number").textContent;
          return parseInt(number, 10) > 50;
        },
        // show if name ends with -ium
        ium: function (itemElem) {
          let name = itemElem.querySelector(".name").textContent;
          return name.match(/ium$/);
        },
      };
      // bind filter button click filter main funtion
      let filtersElem = document.querySelector(".portfolio_filter ul");
      filtersElem.addEventListener("click", function (event) {
        if (event.target.getAttribute("data-filter")) {
          let filterValue = event.target.getAttribute("data-filter");
          filterValue = filterFns[filterValue] || filterValue;
          iso.arrange({ filter: filterValue });
        }
      });
    }, 1000);
  },
  methods: {
    onClick(name, src) {
      this.name = name;
      this.src = src;
      this.modal = true;
    },
    closeModal() {
      this.modal = false;
      this.name = "";
      this.src = "";
    },
    close() {
      this.active = 0;
    },
  },
  components: { MagnificPopUp, ModalBox },
};
</script>
