<template>
  <div class="container pt-4">
    <p data-aos="fade-left">
    The promotion of STEM education was first proposed in the 2015 Policy Address and 
    further supported in the 2016 Policy Address. Art was soonly added to the program
     and became STEAM. Thanks to the effort contributed by teachers and education workers, 
     STEAM has become a popular concept among the education industry. Many schools have 
     started to implement STEAM education in their curriculum which is a great step forward.
    </p>

    <p data-aos="fade-right">
    However, schools had faced difficulties when getting new technology into campus. 
    The high set up cost, ecosystem set by commercial companies, difficult for deployment etc. 
    It taken away the treasurable opportunity for students to have a taste of 3D printing. 
    All these barriers limit schools from getting access to such powerful and convenient technology.
    </p>
    
    <div class="textbox">
      <h2 data-text="3D PRINTING">3D PRINTING</h2>
    </div>

    <p>
      Thanks to the effort contributed by teachers and education workers, STEAM
      has become a popular concept among the education industry. Many schools
      have started to implement STEAM education in their curriculum which is a
      great step forward.
    </p>

    <br /><br />

    <h3 class="pt-2 text-white">Our 3D printing solution:</h3>

    <div class="row">
      <div class="col-sm-6 col-md-4 text-center">
        <div
          class="advantage1 mt-4 p-5 bg-secondary text-white rounded"
          data-aos="fade-up"
        >
          <h1 class="title1">Easy to use</h1>
          <h1 class="title2"></h1>
        </div>
      </div>
      <div class="col-sm-6 col-md-4 text-center">
        <div
          class="advantage2 mt-4 p-5 bg-secondary text-white rounded"
          data-aos="fade-up"
        >
          <h1 class="title1">Affordable</h1>
          <h1 class="title2"></h1>
        </div>
      </div>
      <div class="col-sm-6 col-md-4 text-center">
        <div
          class="advantage3 mt-4 p-5 bg-secondary text-white rounded"
          data-aos="fade-up"
        >
          <h1>Expendable</h1>
          <h1 class="title2"></h1>
        </div>
      </div>
    </div>

    <br><br>

    <div class="box pt-4">
      <h3 class="title1">Some title!</h3>
      <h3 class="title2">THIS IS COOL</h3>
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