<template>
  <!--This line is for texting -->
  <!-- <div class="row" style="background: red">Hi</div> -->

  <div class="container bg pb-5">
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

@import url("https://fonts.googleapis.com/css2?family=Baloo+2&display=swap");
/* This pen */

.container.bg {
  justify-content: flex;
  overflow: hidden;
}

body {
  background: #ededed;
}

.bg_subtitle {
  margin-top: 3rem;
  margin-bottom: 3rem;
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


.dark {
  background: #313aaf;
}

a,
a:hover {
  text-decoration: none;
  transition: color 0.1s;
}

.card.gr {
  padding: 1.5rem;
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
  font-size: calc(10px + 1.5vw);
  font-weight: 700;
  font-weight: bold;
  line-height: calc(1em + 1.5vw);
}

.advantages_content {
   font-family: "Poppins", sans-serif;
    font-size: 1.8vw;
    font-weight: 400;
    font-style: normal;
    line-height: calc(0.5em + 1.5vw);
    color: #ededed;
    position: relative;
}

/*h2.effect {
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
}*/

/*@keyframes animate {
  0%,
  10%,
  100% {
    width: 0;
  }

  70%,
  90% {
    width: 100%;
  }
}*/

</style>