<template>
  <meta charset="utf-8" />
  <div class="container">
    <div class="row" style="background: #313aaf">
      <div class="row" style="padding: 7vw 7vw 0vw 2vw">
        <h3 class="goal">Project Goals</h3>
      </div>
      <div class="col-6 goalpadding">
        <p data-aos="flip-up" data-aos-duration="2500" class="goalcontent"
          style="font-size: 3vw; font-weight: 700;">
          Guide you <br />
          step-by-step
        </p>

        <div class="goalgap" style="background-color: #313aaf"></div>
        <div class="col">
          <img src="../assets/goal3.jpg" class="img-fluid" alt="Responsive image"
            style="height: 100%; width: 100%; max-height: 60vw; max-width: 40vw" />
        </div>
      </div>

      <div class="col-6 goalpadding">
        <ul>
          <li class="goalcontent">All-in-one and easy deployment solution</li>
          <li class="goalcontent">Lower the barrier for 3D modeling and printing</li>
        </ul>
        <h4 data-aos="zoom-in-up" data-aos-duration="1500" class="goalsubtitle">Youth</h4>
        <ul style="padding: 2vw;">
          <li data-aos="zoom-in-up" data-aos-duration="1500" class="goalcontent">Provide an entry point for talented
            youth</li>
        </ul>
        <h4 data-aos="zoom-in-up" data-aos-duration="1500" class="goalsubtitle">Society</h4>
        <ul style="padding: 2vw;">
          <li data-aos="zoom-in-up" data-aos-duration="1500" class="goalcontent">Open source and free to use</li>
          <li data-aos="zoom-in-up" data-aos-duration="1500" class="goalcontent">Inspire the next generation of
            innovators and leaders in the Tech industry</li>
        </ul>

        <h4 data-aos="zoom-in-up" data-aos-duration="1500" class="goalsubtitle">School</h4>
        <ul style="padding: 2vw;">
          <li data-aos="zoom-in-up" data-aos-duration="1500" class="goalcontent">Promote the STEAM education by
            providing workshop materials</li>
        </ul>
      </div>
    </div>
  </div>
</template>


<script>
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
AOS.init({
  duration: 1500,
});

// @ is an alias to /src
export default {
  name: "GoalComp",
  components: {},
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400&display=swap");

.goal {
  font-family: "Poppins", sans-serif;
  position: relative;
  font-weight: bold;
  font-size: 4.5vw;
  color: #ededed;
}

.goalsubtitle {
  font-family: "Poppins", sans-serif;
  font-size: 3vw;
  font-weight: 700;
  font-weight: bold;
  line-height: calc(1em + 1.5vw);
  ;
  color: #ededed;
  position: relative;
}

.goalcontent {
  font-family: "Poppins", sans-serif;
  font-size: 1.8vw;
  font-weight: 400;
  font-style: normal;
  line-height: calc(1em + 1.5vw);
  color: #ededed;
  position: relative;
}

.goalgap {
  height: 10%;
}

.goalpadding {
  padding: 7vw;
}
</style>