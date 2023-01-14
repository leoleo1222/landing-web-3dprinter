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
  <swiper
    :modules="modules"
    :slides-per-view="1"
    :space-between="50"
    navigation
    :loop="true"
    :pagination="{ clickable: true }"
    :scrollbar="{ draggable: true }"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
    style="margin-top: 10%; user-select: none"
  >
    <swiper-slide>
      <img src="../assets/hardware-pc.jpg" class="d-block w-100"
    /></swiper-slide>
    <swiper-slide>
      <img src="../assets/hardware-pi.jpg" class="d-block w-100"
    /></swiper-slide>
    <swiper-slide>
      <img src="../assets/3Dprinter.jpg" class="d-block w-100"
    /></swiper-slide>
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
  font-family: "Century Gothic", sans-serif;
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

.operation input[type="radio"]:checked ~ label {
  background-color: #f1b015;
  color: #1d1d1d;
}

.operation input[type="radio"]:active ~ label {
  transform: scale(1.05);
}

img {
  position: relative;
  width: 100%;
  height: 600px;
}
</style>