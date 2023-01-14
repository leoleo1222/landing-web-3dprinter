<template>
  <div>
    <swiper :modules="modules" :slides-per-view="1" :space-between="50" navigation :pagination="{ clickable: true }"
      :scrollbar="{ draggable: true }" @swiper="onSwiper" @slideChange="onSlideChange">
      <!-- set a image height with 50%-->
      <swiper-slide>
        <img src="../assets/about_us_2.png" alt="Responsive image" style=" height: 50%; width: 100%;">
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/about_us_1.png" alt="Responsive image" style=" height: 50%; width: 100%;">
      </swiper-slide>

    </swiper>
  </div>


  <div
          class="advantage1 mt-2 p-2 bg-secondary text-white rounded"
          data-aos="fade-left"
        >
          <h1 class="title1">About Us</h1>
        </div>
  <h3><span class="text-primary"> Who</span> We Are</h3>
  <p>All of our team members are students from the Department of Computer Science, Hong Kong Baptist University. The
    technique needed
    for the project was learnt in different courses before or self-learned on the internet. </p>



</template>

<script>
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

AOS.init({
  duration: 1500,
});

// Import Swiper styles
export default {
  name: 'AboutComp',
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log('slide change');
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
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap");

.container {
  min-height: 100vh;
  justify-content: flex;
}

* {
  font-family: "Poppins", sans-serif;
}

body {
  background: rgba(0, 5, 40, 0.4);
}

.textbox {
  display: flex;
  justify-content: flex;
  align-items: center;
}

.advantage1 {
  /*Turn the background color deeper when the  mouse over this class.*/
  background-color: #3f7fa1 !important;
  font-size: auto;
}

.advantage1:hover {
  /*Turn the background color deeper when the  mouse over this class.*/
  background-color: #145376 !important;
  font-size: 0;
}

.advantage2 {
  /*Turn the background color deeper when the  mouse over this class.*/
  background-color: #3c4782 !important;
}

.advantage2:hover {
  /*Turn the background color deeper when the  mouse over this class.*/
  background-color: #151b3c !important;
}

.advantage3 {
  /*Turn the background color deeper when the  mouse over this class.*/
  background-color: #c0588e !important;
}

.advantage3:hover {
  /*Turn the background color deeper when the  mouse over this class.*/
  background-color: #8a295b !important;
}

.box {
  position: relative;
  height: 200px;
  background: #0bf;
  text-align: center;
}
.title1,
.title2 {
  transition: 0.3s;
}

.title2 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* HIDE SECOND TITLE */
  opacity: 0;
}

/* WHEN BOX IS HOVERED SWAP TITLES */
.box:hover .title1 {
  opacity: 0;
}
.box:hover .title2 {
  opacity: 1;
}

h1 {
  font-size: calc(10px + 1.5vw);
}

h2 {
  position: relative;
  font-size: calc(12px + 8vw);
  color: #161a52;
  -webkit-text-stroke: 0.3vw #f1b015;
  text-transform: uppercase;
  white-space: nowrap;
}

h2::before {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
  color: #f1b015;
  -webkit-text-stroke: 0vw #1c5f83;
  border-right: 2px solid #f1b015;
  overflow: hidden;
  animation: animate 2.5s linear infinite;
}

h5 {
  font-size: calc(4px + 2vw);
}

@keyframes animate {
  0%,
  10%,
  100% {
    width: 0;
  }

  70%,
  90% {
    width: 100%;
  }
}

.slideInRight {
  font-size: 3vw;
  -webkit-animation-name: slideInRight;
  animation-name: slideInRight;
  -webkit-animation-duration: 1s;
  animation-duration: 1.5s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  animation-iteration-count: 1;
  animation-direction: alternate;
}

@-webkit-keyframes slideInRight {
  0% {
    -webkit-transform: translateX(100%);
    transform: translateX(100%);
    visibility: visible;
  }
  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
}
@keyframes slideInRight {
  0% {
    -webkit-transform: translateX(100%);
    transform: translateX(100%);
    visibility: visible;
  }
  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
}

.zoomIn {
  -webkit-animation-name: zoomIn;
  animation-name: zoomIn;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}
@-webkit-keyframes zoomIn {
  0% {
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }
  50% {
    opacity: 1;
  }
}
@keyframes zoomIn {
  0% {
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }
  50% {
    opacity: 1;
  }
}
</style>