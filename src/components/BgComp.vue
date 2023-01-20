<template>
  <!--This line is for texting -->
  <!-- <div class="row" style="background: red">Hi</div> -->

  <div class="container bg" style="margin: 0px">
    <br />
    <!-- <div class="just for margin" style="margin-top:10px"></div> -->

    <h2 class="bg_subtitle fw-bolder">Background</h2>

    <p
      class="bg_content"
      data-aos="zoom-out"
      data-aos-duration="1000"
      style="margin-top: 10px"
    >
      Thanks to the effort contributed by teachers and education workers, STEAM
      has become a popular concept among the education industry. Many schools
      have started to implement STEAM education in their curriculum which is a
      great step forward.
    </p>

    <p class="bg_content" data-aos="zoom-out" data-aos-duration="2000">
      We noticed the difficulties of attempting to bring 3D printing technology
      into campus attributed to concerns such as high set up cost and knowing
      where to start.
    </p>

    <p
      class="bg_content"
      data-aos="zoom-out"
      data-aos-duration="3000"
      style="margin-bottom: 10px"
    >
      To solve this problem, we developed an whole package for 3D printing.
      Tutorials will also be provided for the schools will guide through the
      processing from setting up the lab to beginner level tutorials of 3D
      modelling software (Blender).
    </p>

    <div style="margin-bottom: 40px"></div>

    <!-- Part for the cards -->
    <div class="advantage_container" style="padding: 0px">
      <div class="row align-middle">
        <div
          class="col-md-4 col-lg-4"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <div class="card gr">
            <div class="advantages_text">
              <h2 class="advantages_title">
                Easy, <br />
                Convenient
              </h2>
              <h5
                class="advantages_content"
                data-aos="zoom-in"
                data-aos-duration="1200"
              >
                The printer is designed to be easy to use in school environment.
              </h5>
            </div>
          </div>
        </div>
        <div
          class="col-md-4 col-lg-4"
          data-aos="fade-up"
          data-aos-duration="2250"
        >
          <div class="card gr">
            <div class="advantages_text">
              <h2 class="advantages_title"><br />Affordable</h2>
              <h5
                class="advantages_content"
                data-aos="zoom-in"
                data-aos-duration="1200"
              >
                Schools could start their 3D printing lab with only one costy printer.
              </h5>
            </div>
          </div>
        </div>
        <div
          class="col-md-4 col-lg-4"
          data-aos="fade-up"
          data-aos-duration="2750"
        >
          <div class="card gr">
            <div class="advantages_text">
              <h2 class="advantages_title"><br />Expandable</h2>
              <h5
                class="advantages_content"
                data-aos="zoom-in"
                data-aos-duration="1200"
              >
                Possible to further upgrade and expand the lab with more printers.
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div style="margin-bottom: 40px"></div>

    <p
      class="bg_content fw-light"
      style="text-align: center"
      data-aos="zoom-out"
    >
      We hope through this project, we could help schools to get access of 3D
      printing technologies, help students to explore their possibilities,
      potentials and creativity which can help them explore their future career.
    </p>

    <!-- <div class="text-center" style="background: #ededed; color: #313aaf">HKBU</div> -->
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
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap");

.container.bg {
  min-height: 100vh;
  justify-content: flex;
  overflow: hidden;
}

body {
  background: #ededed;
}

.bg_subtitle {
  margin-top: 1rem;
  margin-bottom: 2rem;
  font-family: "Poppins";
  color: #313aaf;
  text-align: center;
  font-family: "Poppins", sans-serif;
  position: relative;
  font-weight: bold;
  font-size: 4.5vw;
}

.bg_content {
  text-align: left;
  color: #313aaf;
  margin-bottom: 20px;
  font-family: "Poppins", sans-serif;
  font-size: 1.8vw;
  font-weight: 500;
  font-style: normal;
  line-height: calc(1em + 1.5vw);
  position: relative;
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

h2.effect {
  position: relative;
  font-size: calc(12px + 8vw);
  color: #161a52;
  -webkit-text-stroke: 0.3vw #313aaf;
  text-transform: uppercase;
  white-space: nowrap;
}

h2.effect::before {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
  color: #313aaf;
  -webkit-text-stroke: 0vw #161a52;
  border-right: 2px solid #313aaf;
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

@import url("https://fonts.googleapis.com/css2?family=Baloo+2&display=swap");
/* This pen */
body {
  color: #ededed;
}

.dark {
  background: #313aaf;
}

a,
a:hover {
  text-decoration: none;
  transition: color 0.1s;
}

.card.gr {
  padding: 1rem;
  margin-bottom: 0.5rem;
  border: none;
  border-radius: 10px;
  color: rgba(0, 0, 0, 1);
  background: hsl(236, 56%, 44%);
  color: #ededed;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.27);
}

.card.gr:hover {
  background: #11187b;
}

.advantages_title {
  /*min-height:4rem;*/
  font-weight: bold;
  margin-bottom: 1rem;
  font-size: calc(10px + 2vw);
  font-weight: 700;
  font-weight: bold;
  line-height: calc(1em + 1.5vw);
}

.advantages_content{
  /*height: 8vh;*/
}

/*.navbar {
  position: fixed;
  transition: 1s;
}
.navbar-brand {
  color: #fff;
  font-size: 45px;
  font-family: Germania;
  cursor: pointer;
}
.icon-bar {
  background-color: #000;
}
.nav {
  font-family: Lithos Pro;
  color: #fff;
  padding: 10px 20px;
}

.nav li {
  padding: 10px;
  cursor: pointer;
  font-size: 16px;
}
.nav li:after {
  content: "";
  display: block;
  border-bottom: 2px solid #38fd07;
  transform: scaleX(0);
  transition: 0.2s ease-in-out;
}
.nav li:hover:after {
  transform: scaleX(1);
}
.para {
  min-height: 500px;
}
.para h3 {
  text-align: center;
  margin-top: 15%;
  color: #fff;
  font-family: nyala;
  font-size: 44px;
}
body::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}
body::-webkit-scrollbar {
  width: 14px;
}

body::-webkit-scrollbar-thumb {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
  background: #501e27;
}
@media (max-width: 720px) {
  body {
    background-size: 100% 100%;
  }
  .navbar-collapse {
    background: #501e27;
  }
  .para {
    min-height: 800px;
  }
}*/

/*
.postcard {
  flex-wrap: wrap;
  display: flex;
  box-shadow: 0 4px 21px -12px rgba(0, 0, 0, 0.66);
  border-radius: 0px;
  margin: 0 0 2rem 0;
  overflow: hidden;
  position: relative;
  color: #313aaf;
  background: #ffffff;
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
  padding: 1rem 1rem;
  position: relative;
  display: flex;
  flex-direction: column;
}
.postcard .postcard__preview-txt {
  font-size: 0.9vw + 15px;
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
    background: #313aaf;
    top: -20%;
    height: 130%;
    width: 55px;
  }
  .postcard:hover .postcard__img {
    transform: scale(1.05);
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
    width: 35px;
  }

  .postcard.dark .postcard__text:before {
    background: #313aaf;
  }

  .postcard.light .postcard__text:before {
    background: #e1e5ea;
  }
}

/*
.postcard .postcard__tagbox .blue.play:hover {
  background: #313aaf;
}

.blue .postcard__title:hover {
  color: #11187b;
}

.blue .postcard__bar {
  background-color: #313aaf;
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
} */
</style>
