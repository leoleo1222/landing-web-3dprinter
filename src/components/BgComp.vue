<template>
  <div class="container pt-4">
    <div class="textbox">
      <h2 data-text="3D PRINTING">3D PRINTING</h2>
    </div>

    <h3 class="pt-2 text-white">Barriers when facing 3D printing:</h3>

    <div class="row pt-2">
      <div class="col-sm-4">
        <div class="mt-4 p-5 bg-secondary text-white rounded" data-aos="flip-left">
          <h1>Easy to use</h1>
        </div>
      </div>
      <div class="col-sm-4">
        <div class="mt-4 p-5 bg-secondary text-white rounded" data-aos="flip-left">
          <h1>Affordable</h1>
        </div>
      </div>
      <div class="col-sm-4">
        <div class="mt-4 p-5 bg-secondary text-white rounded" data-aos="flip-left">
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
  background: #277ca9;
}

.textbox {
  display: flex;
  justify-content: flex;
  align-items: center;
}

h2 {
  position: relative;
  font-size: 8vw;
  color: #1c5f83;
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