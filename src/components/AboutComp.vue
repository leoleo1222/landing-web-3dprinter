<template>
  <div>
    <section class="section section-sm position-relative" id="about">
      <div class="container">
        <div class="row row-30">
          <div class="col-lg-6">
            <div class="block-decorate-img wow fadeInLeft" data-wow-delay=".2s"
              style="visibility: visible; animation-delay: 0.2s; animation-name: fadeInLeft;">

              <swiper :modules="modules" :slides-per-view="1" :space-between="50" navigation
                :pagination="{ clickable: true }" :scrollbar="{ draggable: true }" @swiper="onSwiper"
                @slideChange="onSlideChange">
                <swiper-slide> <img src="../assets/about_us_2.png" class="d-block w-100" /></swiper-slide>
                <swiper-slide> <img src="../assets/about_us_1.png" class="d-block w-100" /></swiper-slide>
              </swiper>

            </div>
          </div>
          <div class="col-lg-6 col-12">
            <div class="block-sm offset-top-45">
              <div class="section-name wow fadeInRight" data-wow-delay=".2s"
                style="visibility: visible; animation-delay: 0.2s; animation-name: fadeInRight;">About us</div>
              <h3 class="wow fadeInLeft text-capitalize devider-bottom" data-wow-delay=".3s"
                style="visibility: visible; animation-delay: 0.3s; animation-name: fadeInLeft;"><span
                  class="text-primary"> Who</span> We Are</h3>
              <p class="offset-xl-40 wow fadeInUp" data-wow-delay=".4s"
                style="visibility: visible; animation-delay: 0.4s; animation-name: fadeInUp;">All of our team members
                are students from the Department of Computer Science, Hong Kong Baptist University. The technique needed
                for the project was learnt in different courses before or self-learned on the internet. </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
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