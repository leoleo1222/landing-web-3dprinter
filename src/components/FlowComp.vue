<template>
  <div class="heading">
    <h1><b>Operation</b></h1>
  </div>
  <div class="switch">
    <div class="operation">
      <input checked id="hardware" name="operation" type="radio" value="hw" />
      <label for="hardware">Hardware</label>
    </div>
    <div class="operation">
      <input id="software" name="operation" type="radio" value="sw" />
      <label for="software">Software</label>
    </div>
  </div>
  <swiper :modules="modules" :slides-per-view="1" :space-between="50" navigation :loop="true"
    :pagination="{ clickable: true }" :scrollbar="{ draggable: true }" @swiper="onSwiper" @slideChange="onSlideChange"
    style="margin-top: 10%; user-select: none">
    <swiper-slide>
      <img src="../assets/Server.jpg" class="d-block w-100" />
      <div class="content">
        <div data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
          <h1><b>Server</b></h1>
          <p>
            <b>
              The server will host the website for receiving the print job submitted by the user. Then it will schedule
              and assign the printing job to the connected printer. It will also receive the states of the printer and
              display on the website.
            </b>
          </p>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <img src="../assets/hardware-pi.jpg" class="d-block w-100" />
      <div class="content">
        <div data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
          <h1><b>drives</b></h1>
          <h3><b>Minimum requirement</b></h3>
          <b>
            <ul>
              <li>4 core 64 bit CPU</li>
              <li>4GB Ram </li>
            </ul>
            <p>
              Single-board computer like Raspberry Pi will be a suggested device for the Server.
            </p>
          </b>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <img src="../assets/3Dprinter.jpg" class="d-block w-100" />
      <div class="content">
        <div data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
          <h1><b>Printer Assemble</b></h1>
          <p>
            <b>
              The 3D printer series will contain different options of printer with different print volume and functions.
              From 20cm x 20cm x 20cm to 40cm x 40cm x 40cm. The printer could be easily assembled by following the
              assembly guide.
            </b>
          </p>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <img src="../assets/hardware-pc.jpg" class="d-block w-100" />
      <div class="content">
        <div data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
          <h1><b>Software Manual</b></h1>
          <p>
            <b>
              The software manual will be a document that describes how to use the website. The document will be written
              in English and Chinese. The document will be provided to the users through the website.
            </b>
          </p>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <img src="../assets/front-end.jpg" class="d-block w-100" />
      <div class="content">
        <div data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
          <h1><b>Front-end Interface</b></h1>
          <p>
            <b>
              The front-end interface will be a website that allows users to upload 3D models created via the Blender
              software application and print them. The website will also provide a tutorial for users to learn how to
              use the website and the printer.
            </b>
          </p>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <img src="../assets/coding.jpg" class="d-block w-100" />
      <div class="content">
        <div data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
          <h1><b>Website</b></h1>
          <p>
            <b>
              The website will be developed in Flask in Python and also using Vue, which is based on the Octoprint
              interface. It will provide function to print and monitor the printer.
            </b>
          </p>
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script>
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// Import Swiper styles
export default {
  name: "FlowComp",
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation, Pagination, Scrollbar, A11y],
    };
  },
};
</script>

<style>
/*------title------*/

body,
html {
  background-color: #1d1d1d;
  margin: 0;
  padding: 0;
  font-family: "Century Gothic", sans-serif;
}

.heading {
  margin-top: 5%;
  color: #f1b015;
  text-transform: uppercase;
}

/*------radio button------*/

.switch {
  position: absolute;
  margin-top: 1%;
  width: 30%;
  /*height: 5%;*/
  border-bottom: 3px solid #f1b015;
  color: #ffffff;
  font-size: 150%;
  /*border-radius: 10px;*/
}

.operation {
  position: relative;
  display: inline-block;
  width: 50%;
  /*height: 101%;*/
  line-height: 150%;
}

.operation label {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 101%;
  cursor: pointer;
  /*font-style: italic;*/
  text-align: center;
  transition: transform 0.4s, color 0.4s, background-color 0.4s;
}

.operation input[type="radio"] {
  appearance: none;
  width: 0;
  height: 0;
  opacity: 0;
}

.operation input[type="radio"]:focus {
  outline: 0;
  outline-offset: 0;
}

.operation input[type="radio"]:checked~label {
  background-color: #f1b015;
  color: #1d1d1d;
}

.operation input[type="radio"]:active~label {
  transform: scale(1.05);
}

img {
  position: relative;
  width: 100%;
  height: 600px;
}

.content {
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  left: 10%;
  color: #ffffff;
  background: rgba(0, 0, 0, 0.6);
  width: 40%;
  padding: 2%;
  font-family: "Century Gothic", sans-serif;
}

.content h1 {
  text-transform: uppercase;
  color: #f1b015;
  font-size: calc(10px + 1.5vw);
}

.content h3 {
  padding-top: 5%;
  text-transform: uppercase;
  color: #f1b015;
}

.content p,
ul {
  font-size: 130%;
  line-height: 200%;
}
</style>