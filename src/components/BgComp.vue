<template>
  <div class="container pt-4">
    <div class="textbox">
      <h2 data-text="3D PRINTING">3D PRINTING</h2>
    </div>

    <h5 class="text-white">Thanks to the effort contributed by teachers and education workers, STEAM has become a popular concept among the education industry. Many schools have started to implement STEAM education in their curriculum which is a great step forward.
</h5>

    <h3 class="pt-2 text-white">3D printing solution:</h3>

    <div class="row pt-2">
      <div class="col-sm-6 col-md-4 text-center">
        <div class="mt-4 p-5 bg-secondary text-white rounded" data-aos="fade-up">
          <h1 >Easy to use</h1>
        </div>
      </div>
      <div class="col-sm-6 col-md-4 text-center">
        <div class="mt-4 p-5 bg-secondary text-white rounded" data-aos="fade-up">
          <h1>Affordable</h1>
        </div>
      </div>
      <div class="col-sm-6 col-md-4 text-center">
        <div class="mt-4 p-5 bg-secondary text-white rounded" data-aos="fade-up">
          <h1>Expendable</h1>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init({
  duration: 1500,
});

export default {
  name: "BgComp",
  components: {},
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
  background: #161a52;
}

.textbox {
  display: flex;
  justify-content: flex;
  align-items: center;
}

h1 {
  font-size: 3rem;
}

h2 {
  position: relative;
  font-size: calc(12px + 8vw) ;
  
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

h5{
   font-size: calc(4px + 2vw) ;
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