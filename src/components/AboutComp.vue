<template>
  <div>
    <swiper :modules="modules" :slides-per-view="1" :space-between="50" navigation :pagination="{ clickable: true }"
      :scrollbar="{ draggable: true }" @swiper="onSwiper" @slideChange="onSlideChange">
      <!-- set a image height with 50%-->
      <swiper-slide>
        <img src="../assets/about_us_1.png" alt="Responsive image" style=" max-height: 200px; width: 100%;">
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/about_us_1.png" alt="Responsive image" style=" max-height: 200px; width: 100%;">
      </swiper-slide>

    </swiper>
  </div>


  <div class="section-name wow fadeInRight" data-wow-delay=".2s"
    style="visibility: visible; animation-delay: 0.2s; animation-name: fadeInRight;">
    <p class="text-muted">About us</p>
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