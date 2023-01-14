<template>
  <div class="container pt-4">
    <h2 data-text="3D PRINTING">3D PRINTING</h2>
    <h2 data-text="123">123</h2>

    <p>
      Thanks to the effort contributed by teachers and education workers, STEAM
      has become a popular concept among the education industry. Many schools
      have started to implement STEAM education in their curriculum which is a
      great step forward.
    </p>

    <p data-aos="fade-left">
      However, schools may face difficulties when getting new technology into
      campus, such as:
    </p>

    <div
      class="difficult pt-4"
      data-aos="fade-up"
      data-aos-delay="0"
      data-aos-easing="linear"
      data-aos-duration="12000"
    >
      The high set up cost
    </div>
    <div
      class="difficult pt-4"
      data-aos="fade-up"
      data-aos-delay="300"
      data-aos-easing="linear"
      data-aos-duration="14000"
    >
      Ecosystem set by commercial companies
    </div>
    <div
      class="difficult pt-4"
      data-aos="fade-up"
      data-aos-delay="600"
      data-aos-easing="linear"
      data-aos-duration="16000"
    >
      Difficult for deployment
    </div>

    <br /><br />

    <h3 class="pt-2 text-white">Our 3D printing solution:</h3>

    <div class="row">
      <div class="col-sm-6 col-md-4 text-center">
        <div
          class="advantage box1 mt-4 bg-secondary text-white rounded"
          data-aos="fade-up"
        >
          <div class="advantageBox">
            <div class="advantageScroll">
              <h1 class="title1">Easy to use</h1>
              <h1 class="title2">
                Friendly to be deployed in school environment
              </h1>
            </div>
          </div>
        </div>
      </div>

      <!-- One more box like that -->
      <div class="col-sm-6 col-md-4 text-center">
        <div
          class="advantage box2 mt-4 bg-secondary text-white rounded"
          data-aos="fade-up"
        >
          <div class="advantageBox">
            <div class="advantageScroll">
              <h1 class="title1">Low cost</h1>
              <h1 class="title2">Affordable for schools</h1>
            </div>
          </div>
        </div>
      </div>

      <div class="col-sm-6 col-md-4 text-center">
        <div
          class="advantage box3 mt-4 bg-secondary text-white rounded"
          data-aos="fade-up"
        >
          <div class="advantageBox">
            <div class="advantageScroll">
              <h1 class="title1">Expandable</h1>
              <h1 class="title2">Easily customizable</h1>
            </div>
          </div>
        </div>
      </div>
    </div>

    <article class="postcard dark blue">
      <a class="postcard__img_link" href="#">
        <img
          class="postcard__img"
          src="https://picsum.photos/1000/1000"
          alt="Image Title"
        />
      </a>
      <div class="postcard__text">
        <h1 class="postcard__title blue"><a href="#">Background</a></h1>
        <!-- <div class="postcard__subtitle small"> -->
          <time datetime="2020-05-25 12:00:00">
            <i class="fas fa-calendar-alt mr-2"></i>Mon, May 25th 2020
          </time>
        <!-- </div> -->
        <div class="postcard__bar"></div>
        <div class="postcard__preview-txt">
          Thanks to the effort contributed by teachers and education workers,
          STEAM has become a popular concept among the education industry. Many
          schools have started to implement STEAM education in their curriculum
          which is a great step forward.
        </div>
      </div>
    </article>

   <!-- Part for the cards -->
    <div class="container h-100">
      <div class="row align-middle">
        <div class="col-md-6 col-lg-4 column">
          <div class="card gr-1">
            <div class="txt">
              <h1>BRANDING AND CORPORATE DESIGN</h1>
              <p>Visual communication and problem-solving</p>
            </div>
            <a href="#">more</a>
            <div class="ico-card">
              <i class="fa fa-rebel"></i>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-4 column">
          <div class="card gr-2">
            <div class="txt">
              <h1>Web Front-End SOLUTIONS</h1>
              <p>How design is implemented on the web.</p>
            </div>
            <a href="#">more</a>
            <div class="ico-card">
              <i class="fa fa-codepen"></i>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-4 column">
          <div class="card gr-3">
            <div class="txt">
              <h1>UX/UI WEBsite AND MOBILE app</h1>
              <p>User Interface and User Experience Design.</p>
            </div>
            <a href="#">more</a>
            <div class="ico-card">
              <i class="fa fa-empire"></i>
            </div>
          </div>
        </div>
      </div>
    </div>

    <br /><br />
  </div>
</template>

<script>
// @ is an alias to /src
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

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
  overflow: hidden;
}

* {
  font-family: "Poppins", sans-serif;
}

body {
  background: rgba(0, 5, 40, 0.4);
}

.difficult {
}

.advantage {
  background-color: #3f7fa1 !important;
  overflow: hidden;
  width: calc(20vw+50px);
  height: calc(30vh);
}

.advantageBox {
  position: relative;
  text-align: center;
  overflow: hidden;
  min-width: 100%;
  min-height: 300%;
}

.advantageScroll {
  padding: 50% 0%;
}

.advantageBox {
  position: relative;
  height: 200px;
  width: 100%;
  text-align: center;
  transition: 0.5s;
}

.advantage.box1 {
  /*Turn the background color deeper when the  mouse over this class.*/
  background-color: #3f7fa1 !important;
  overflow: hidden;
}

.advantage.box1:hover {
  background-color: #145376 !important;
}

.advantage.box2 {
  background-color: #3c4782 !important;
}

.advantage.box2:hover {
  background-color: #3c4782 !important;
}

.advantage.box3 {
  background-color: #c0588e !important;
}

.advantage.box3:hover {
  background-color: #8a295b !important;
}

.advantageBox:hover {
  transform: translate(0, -50%);
}

.title2 {
  padding: 60% 0% 0% 0%;
  opacity: 1;
}

.textbox {
  display: flex;
  justify-content: flex;
  align-items: center;
}

h2 {
  width: auto;
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
@import url("https://fonts.googleapis.com/css2?family=Baloo+2&display=swap");
/* This pen */
body {
  font-family: "Baloo 2", cursive;
  font-size: 16px;
  color: #ffffff;
  text-rendering: optimizeLegibility;
  font-weight: initial;
}

.dark {
  background: #110f16;
}

.light {
  background: #f3f5f7;
}

a,
a:hover {
  text-decoration: none;
  transition: color 0.3s ease-in-out;
}

/* POSTCARD */
.postcard {
  flex-wrap: wrap;
  display: flex;
  box-shadow: 0 4px 21px -12px rgba(0, 0, 0, 0.66);
  border-radius: 10px;
  margin: 0 0 2rem 0;
  overflow: hidden;
  position: relative;
  color: #ffffff;
}
.postcard.dark {
  background-color: #18151f;
}
.postcard.light {
  background-color: #e1e5ea;
}
.postcard a {
  color: inherit;
}
.postcard h1,
.postcard .h1 {
  margin-bottom: 0.5rem;
  font-weight: 500;
  line-height: 1.2;
}
.postcard .small {
  font-size: 80%;
}
.postcard .postcard__title {
  font-size: 1.75rem;
}
.postcard .postcard__img {
  max-height: 180px;
  width: 100%;
  object-fit: cover;
  position: relative;
}
.postcard .postcard__img_link {
  display: contents;
}
.postcard .postcard__bar {
  width: 50px;
  height: 10px;
  margin: 10px 0;
  border-radius: 5px;
  background-color: #424242;
  transition: width 0.2s ease;
}
.postcard .postcard__text {
  padding: 1.5rem;
  position: relative;
  display: flex;
  flex-direction: column;
}
.postcard .postcard__preview-txt {
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: justify;
  height: 100%;
}

.postcard:before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-image: linear-gradient(-70deg, #424242, transparent 50%);
  opacity: 1;
  border-radius: 10px;
}
.postcard:hover .postcard__bar {
  width: 100px;
}

@media screen and (min-width: 769px) {
  .postcard {
    flex-wrap: inherit;
  }
  .postcard .postcard__title {
    font-size: 2rem;
  }
  .postcard .postcard__tagbox {
    justify-content: start;
  }
  .postcard .postcard__img {
    max-width: 300px;
    max-height: 100%;
    transition: transform 0.3s ease;
  }
  .postcard .postcard__text {
    padding: 3rem;
    width: 100%;
  }
  .postcard .media.postcard__text:before {
    content: "";
    position: absolute;
    display: block;
    background: #18151f;
    top: -20%;
    height: 130%;
    width: 55px;
  }
  .postcard:hover .postcard__img {
    transform: scale(1.1);
  }
  .postcard:nth-child(2n + 1) {
    flex-direction: row;
  }
  .postcard:nth-child(2n + 0) {
    flex-direction: row-reverse;
  }
  .postcard:nth-child(2n + 1) .postcard__text::before {
    left: -12px !important;
    transform: rotate(4deg);
  }
  .postcard:nth-child(2n + 0) .postcard__text::before {
    right: -12px !important;
    transform: rotate(-4deg);
  }
}
@media screen and (min-width: 1024px) {
  .postcard__text {
    padding: 2rem 3.5rem;
  }

  .postcard__text:before {
    content: "";
    position: absolute;
    display: block;
    top: -20%;
    height: 130%;
    width: 55px;
  }

  .postcard.dark .postcard__text:before {
    background: #18151f;
  }

  .postcard.light .postcard__text:before {
    background: #e1e5ea;
  }
}

/* COLORS */
.postcard .postcard__tagbox .blue.play:hover {
  background: #0076bd;
}

.blue .postcard__title:hover {
  color: #0076bd;
}

.blue .postcard__bar {
  background-color: #0076bd;
}

.blue::before {
  background-image: linear-gradient(
    -30deg,
    rgba(0, 118, 189, 0.1),
    transparent 50%
  );
}

.blue:nth-child(2n)::before {
  background-image: linear-gradient(
    30deg,
    rgba(0, 118, 189, 0.1),
    transparent 50%
  );
}

@media screen and (min-width: 769px) {
  .blue::before {
    background-image: linear-gradient(
      -80deg,
      rgba(0, 118, 189, 0.1),
      transparent 50%
    );
  }

  .blue:nth-child(2n)::before {
    background-image: linear-gradient(
      80deg,
      rgba(0, 118, 189, 0.1),
      transparent 50%
    );
  }
}
</style>