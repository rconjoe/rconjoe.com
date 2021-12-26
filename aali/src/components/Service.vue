<template>
  <div class="aali_tm_section" id="service">
    <div class="aali_tm_service">
      <div class="container">
        <div class="service_list">
          <ul>
            <li class="simple wow fadeInLeft" data-wow-duration="1s">
              <div class="list_inner">
                <div
                  class="aali_tm_main_title"
                  data-text-align="left"
                  data-color="dark"
                >
                  <span>What I Do</span>
                  <h3>My Services</h3>
                  <p>
                    I specialize in building robust, secure, cloud-backed 
                    solutions for businesses with complex data needs.
                    Whether it's finance management, scheduling, content delivery, 
                    internal systems, or simply a powerful online presence - I bring 
                    a unique value set to the table.
                  </p>
                </div>
              </div>
            </li>

            <li
              class="wow fadeInRight"
              data-wow-duration="1s"
              data-wow-delay="0.2s"
            >
              <div class="list_inner tilt-effect">
                <span class="icon" v-if="dark">
                  <img class="svg" src="img/svg/web-dark.svg" alt="" />
                  <img class="back" src="img/svg/service-dark.png" alt="" />
                </span>
                <span class="icon" v-if="!dark">
                  <img class="svg" src="img/svg/web.svg" alt="" />
                  <img class="back" src="img/svg/service.png" alt="" />
                </span>
                <div class="title">
                  <h3>Solutions Architecture</h3>
                  <span class="price">Starts from <span>$100/hr</span></span>
                </div>
                <div class="text">
                  <p>
                    Designing robust, extensible solutions that last the test
                    of time is not an easy task. You need a team that understands
                    your problems intuitively, how to encapsulate patterns...
                  </p>
                </div>
                <a
                  class="aali_tm_full_link"
                  href="#"
                  @click.prevent="active = 1"
                ></a>
                <img
                  class="popup_service_image"
                  src="img/service/1.jpg"
                  alt=""
                />
                <div class="service_hidden_details">
                  <div class="service_popup_informations">
                    <div class="descriptions">
                      <p>
                        Designing robust, extensible solutions that last the test
                        of time is not an easy task. You need a team that understands
                        your problems intuitively, how to encapsulate patterns, manage
                        uncertainty, and work within the constraints you have as a 
                        business operator.
                      </p>
                    <p>
                      I believe architecture should focus on enhancing the future
                      state of your IT solutions to provide a <strong>significant</strong>
                      competitive advantage while working within sustainable technical 
                      parameters. When investing in software infrastructure, you should be 
                      confident that the decisions you are making today will lead to concrete 
                      improvements in your bottom line.
                    </p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <div :class="`${active === 1 ? '' : 'service_hidden_details'}`">
              <ModalBox :close="close">
                <div class="service_popup_informations">
                  <div class="image">
                    <img src="img/thumbs/4-2.jpg" alt="" />
                    <div
                      class="main"
                      data-img-url="img/service/1.jpg"
                      style="background-image: url('img/service/1.jpg')"
                    ></div>
                  </div>
                  <div class="main_title">
                    <h3>Solutions Architecture</h3>
                    <span class="price">Starts from <span>$100/hr</span></span>
                  </div>
                  <div class="descriptions">
                      <p>
                        Designing robust, extensible solutions that last the test
                        of time is not an easy task. You need a team that understands
                        your problems intuitively, how to encapsulate patterns, manage
                        uncertainty, and work within the constraints you have as a 
                        business operator.
                      </p>
                    <p>
                      I believe architecture should focus on enhancing the future
                      state of your IT solutions to provide a <strong>significant</strong>
                      competitive advantage while working within sustainable technical 
                      parameters. When investing in software infrastructure, you should be 
                      confident that the decisions you are making today will lead to concrete 
                      improvements in your bottom line.
                    </p>
                  </div>
                </div>
              </ModalBox>
            </div>
            <li class="wow fadeInLeft" data-wow-duration="1s">
              <div class="list_inner tilt-effect">
                <span class="icon" v-if="dark">
                  <img class="svg" src="img/svg/web-dark.svg" alt="" />
                  <img class="back" src="img/svg/service-dark.png" alt="" />
                </span>
                <span class="icon" v-if="!dark">
                  <img class="svg" src="img/svg/web.svg" alt="" />
                  <img class="back" src="img/svg/service.png" alt="" />
                </span>
                <div class="title">
                  <h3>Full Stack Software Development</h3>
                  <span class="price">Open to offers<span></span></span>
                </div>
                <div class="text">
                  <p>
                    Coding is my one true love. There is nothing I love more
                    than the feeling every engineer knows...
                  </p>
                </div>
                <a
                  class="aali_tm_full_link"
                  href="#"
                  @click.prevent="active = 2"
                ></a>
                <img
                  class="popup_service_image"
                  src="img/service/2.png"
                  alt=""
                />
                <div class="service_hidden_details">
                  <div class="service_popup_informations">
                    <div class="descriptions">
                      <p>
                        Coding is my one true love. There is nothing I love more
                        than the feeling every engineer knows - when red turns to green,
                        when the thing works. This feeling has never left me since the day
                        I discovered such joy in weaving code together like it's
                        art. I grew up a pianist, maybe that's why it feels that way!
                      </p>
                      <p>
                        I'm an entirely self-taught developer. No classes, University, 
                        bootcamps, just the vast resources of the wide open internet.
                        Today, I'm highly proficient in applying a multitude of programming
                        styles and paradigms to one of the most ubiquitous languages of 
                        all time, JavaScript, and its ever-hailed typesafe younger sibling, 
                        TypeScript. I've worked with or explored nearly a dozen other languages (more below), 
                        yet still to this day I am fascinated by the pliability and universal 
                        applicability of JS. I especially love these features for their enabling
                        small teams to build entire application stacks - front, back, tooling, scripting,
                        tests, automation...all in one language.
                      </p>
                      <p>
                        Despite all this, my inital foray into programming was <i>not</i> 
                        JavaScript, or even web development - rather bash scripting and 
                        embedded languages, used to configure servers and then run on them
                        super low-latency, high-throughput gaming applications on-prem at events.
                        This somewhat regrettable introduction to programming through languages like
                        Pawn and (plain) C impressed onto me a love for low-level code. 
                        Something about there being much less between your code and the 
                        hardware it runs on was and still is very attractive to me, and informed
                        my later forays into Go and Rust for writing CLI developer utilities.
                      </p>
                      <p>
                        While never using it professionally, I regularly practice Java and 
                        am learning concepts to develop and deploy Spring applications in a 
                        variety of environments. Everything from chat bots to payment processing,
                        Java was the gateway drug for me to properly explore OOP concepts and
                        their history in depth.
                      </p>
                      <p>
                        As an experienced team leader and determined self-learner, I'm always
                        open to exciting opportunities that will challenge me to become a better
                        programmer and enable me to contribue to groundbreaking work with
                        amazing teams of people.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <div :class="`${active === 2 ? '' : 'service_hidden_details'}`">
              <ModalBox :close="close">
                <div class="service_popup_informations">
                  <div class="image">
                    <img src="img/thumbs/4-2.jpg" alt="" />
                    <div
                      class="main"
                      data-img-url="img/service/2.png"
                      style="background-image: url('img/service/2.png')"
                    ></div>
                  </div>
                  <div class="main_title">
                    <h3>Full Stack Software Development</h3>
                    <span class="price">Open to offers<span></span></span>
                  </div>
                  <div class="descriptions">
                      <p>
                        Coding is my one true love. There is nothing I love more
                        than the feeling every engineer knows - when red turns to green,
                        when the thing works. This feeling has never left me since the day
                        I discovered such joy in weaving code together like it's
                        art. I grew up a pianist, maybe that's why it feels that way!
                      </p>
                      <p>
                        I'm an entirely self-taught developer. No classes, University, 
                        bootcamps, just the vast resources of the wide open internet.
                        Today, I'm highly proficient in applying a multitude of programming
                        styles and paradigms to one of the most ubiquitous languages of 
                        all time, JavaScript, and its ever-hailed typesafe younger sibling, 
                        TypeScript. I've worked with or explored nearly a dozen other languages (more below), 
                        yet still to this day I am fascinated by the pliability and universal 
                        applicability of JS. I especially love these features for their enabling
                        small teams to build entire application stacks - front, back, tooling, scripting,
                        tests, automation...all in one language.
                      </p>
                      <p>
                        Despite all this, my inital foray into programming was <i>not</i> 
                        JavaScript, or even web development - rather bash scripting and 
                        embedded languages, used to configure servers and then run on them
                        super low-latency, high-throughput gaming applications on-prem at events.
                        This somewhat regrettable introduction to programming through languages like
                        Pawn and (plain) C impressed onto me a love for low-level code. 
                        Something about there being much less between your code and the 
                        hardware it runs on was and still is very attractive to me, and informed
                        my later forays into Go and Rust for writing CLI developer utilities.
                      </p>
                      <p>
                        While never using it professionally, I regularly practice Java and 
                        am learning concepts to develop and deploy Spring applications in a 
                        variety of environments. Everything from chat bots to payment processing,
                        Java was the gateway drug for me to properly explore OOP concepts and
                        their history in depth.
                      </p>
                      <p>
                        As an experienced team leader and determined self-learner, I'm always
                        open to exciting opportunities that will challenge me to become a better
                        programmer and enable me to contribue to groundbreaking work with
                        amazing teams of people.
                      </p>
                  </div>
                </div>
              </ModalBox>
            </div>
            <li
              class="wow fadeInRight"
              data-wow-duration="1s"
              data-wow-delay="0.2s"
            >
              <div class="list_inner tilt-effect">
                <span class="icon" v-if="dark">
                  <img class="svg" src="img/svg/pen-dark.svg" alt="" />
                  <img class="back" src="img/svg/service-dark.png" alt="" />
                </span>
                <span class="icon" v-else>
                  <img class="svg" src="img/svg/pen.svg" alt="" />
                  <img class="back" src="img/svg/service.png" alt="" />
                </span>
                <div class="title">
                  <h3>Web App Design/Development</h3>
                  <span class="price">Starts from <span>$69/hr</span></span>
                </div>
                <div class="text">
                  <p>
                    Ready to finally graduate from Shopify or SquareSpace? 
                    Have a project you need a coder for? Want a bot on steroids for your
                    Twitch or Discord?
                  </p>
                </div>
                <a
                  class="aali_tm_full_link"
                  href="#"
                  @click.prevent="active = 3"
                ></a>
                <img
                  class="popup_service_image"
                  src="img/service/3.jpg"
                  alt=""
                />
                <div class="service_hidden_details">
                  <div class="service_popup_informations">
                    <div class="descriptions">
                      <p>
                        Ready to finally graduate from Shopify or SquareSpace? 
                        Have a project you need a coder for? Want a bot on steroids for your
                        Twitch or Discord? Whatever you can think of, you've found a developer
                        who can bring your imagination to life and also make it highly 
                        available on the internet.
                      </p>
                      <p>
                        Your website is the first interaction consumers have with your business. 
                        That's why almost 95 percent of a user’s first impression
                        relates to web design. It’s also why web design services
                        can have an immense impact on your project.
                      </p>
                      <p>
                        Extensions, chatbots, SEO, creative user engagement, API design...no matter how 
                        big or small your project is, I guarantee I can bring unmatched
                        value to your work when it comes to improving it with software.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <div :class="`${active === 3 ? '' : 'service_hidden_details'}`">
              <ModalBox :close="close">
                <div class="service_popup_informations">
                  <div class="image">
                    <img src="img/thumbs/4-2.jpg" alt="" />
                    <div
                      class="main"
                      data-img-url="img/service/3.jpg"
                      style="background-image: url('img/service/3.jpg')"
                    ></div>
                  </div>
                  <div class="main_title">
                    <h3>Web App Design/Development</h3>
                    <span class="price">Starts from <span>$69/hr</span></span>
                  </div>
                  <div class="descriptions">
                      <p>
                        Ready to finally graduate from Shopify or SquareSpace? 
                        Have a project you need a coder for? Want a bot on steroids for your
                        Twitch or Discord? Whatever you can think of, you've found a developer
                        who can bring your imagination to life and also make it highly 
                        available on the internet.
                      </p>
                      <p>
                        Your website is the first interaction consumers have with your business. 
                        That's why almost 95 percent of a user’s first impression
                        relates to web design. It’s also why web design services
                        can have an immense impact on your project.
                      </p>
                      <p>
                        Extensions, chatbots, SEO, creative user engagement, API design...no matter how 
                        big or small your project is, I guarantee I can bring unmatched
                        value to your work when it comes to improving it with software.
                      </p>
                  </div>
                </div>
              </ModalBox>
            </div>
            <li class="wow fadeInLeft" data-wow-duration="1s">
              <div class="list_inner tilt-effect">
                <span class="icon" v-if="dark">
                  <img class="svg" src="img/svg/pen-dark.svg" alt="" />
                  <img class="back" src="img/svg/service-dark.png" alt="" />
                </span>
                <span class="icon" v-else>
                  <img class="svg" src="img/svg/pen.svg" alt="" />
                  <img class="back" src="img/svg/service.png" alt="" />
                </span>
                <div class="title">
                  <h3>1:1 Mentoring</h3>
                  <span class="price">Starts from <span>$29/hr*</span></span>
                </div>
                <div class="text">
                  <p>
                    Learning to code? Stuck on CS homework? I've got you covered...
                  </p>
                  <br>
                  <p><i>* = discounted/free rates available.</i></p>
                </div>
                <a
                  class="aali_tm_full_link"
                  href="#"
                  @click.prevent="active = 4"
                ></a>
                <img
                  class="popup_service_image"
                  src="img/service/4.png"
                  alt=""
                />
              </div>
            </li>
            <div :class="`${active === 4 ? '' : 'service_hidden_details'}`">
              <ModalBox :close="close">
                <div class="service_popup_informations">
                  <div class="image">
                    <img src="img/thumbs/4-2.jpg" alt="" />
                    <div
                      class="main"
                      data-img-url="img/service/4.png"
                      style="background-image: url('img/service/4.png')"
                    ></div>
                  </div>
                  <div class="main_title">
                    <h3>1:1 Mentoring</h3>
                    <span class="price">Starts from <span>$29/hr*</span></span>
                  </div>
                  <div class="descriptions">
                    <p>
                      Learning to code? Stuck on CS homework? I've got you covered. 
                      Being self-taught myself, I have a pretty good handle on pedagogy
                      when you're your own teacher. I can share resources with you, 
                      review your code, or just walk through a leetcode problem that's
                      got you scratching your head.
                    </p>
                    <p>
                      I also work with <a href="https://underdogdevs.org">Underdog Devs</a>,
                      a 501-c(3) nonprofit. We are a group of software engineers helping aspiring developers 
                      who are either formerly incarcerated or from an economically disadvantaged background.
                      We are creating opportunities in tech for people who might not otherwise get an opportunity!
                    </p>
                    <p>
                      That's why there's an asterisk on this one. Coding is something that anyone should be 
                      able to learn if they want to, and I aim to do everything to make sure nobody misses out
                      on seeing the light.
                    </p>
                  </div>
                </div>
              </ModalBox>
            </div>
            <li
              class="simple text wow fadeInRight"
              data-wow-duration="1s"
              data-wow-delay="0.2s"
            >
              <div class="list_inner">
                <div class="wrapper">
                  <div class="inner_text">
                    <h3>Just have a question?</h3>
                  </div>
                  <div class="aali_tm_button border">
                    <a class="anchor" href="#contact"
                      ><span v-html="`email is free ` + msg"></span
                    ></a>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <span
        class="square_left moving_effect"
        data-direction="y"
        data-reverse="yes"
      ></span>
      <span
        class="square_right moving_effect"
        data-direction="y"
        data-reverse="yes"
      ></span>
    </div>
  </div>
</template>

<script>
import ModalBox from "./ModalBox.vue";
import { msg } from "./svgImage";
export default {
  name: "Service",
  data() {
    return {
      msg,
      active: 0,
    };
  },
  props: {
    dark: Boolean,
  },
  mounted() {
    let VanillaTilt = require("vanilla-tilt");
    VanillaTilt.init(document.querySelectorAll(".tilt-effect"), {
      maxTilt: 6,
      easing: "cubic-bezier(.03,.98,.52,.99)",
      speed: 500,
      transition: true,
    });
  },
  methods: {
    close() {
      this.active = 0;
    },
  },
  components: { ModalBox },
};
</script>
