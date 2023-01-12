<template>
  <div>
    <section class="section section-sm position-relative" id="about">
      <div class="container">
        <div class="row row-30">
          <div class="col-lg-6">
            <div class="block-decorate-img wow fadeInLeft" data-wow-delay=".2s"
              style="visibility: visible; animation-delay: 0.2s; animation-name: fadeInLeft;">


              <div id="carouselExampleIndicators" class="carousel slide">
                <div class="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"
                    aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                    aria-label="Slide 2"></button>
                </div>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src="../assets/about_us_1.png" class="d-block w-100">
                  </div>
                  <div class="carousel-item">
                    <img src="../assets/about_us_2.png" class="d-block w-100">
                  </div>
                </div>
                <button class="carousel-control-prev" type="button" href="#carouselExampleIndicators"
                  data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>

                <button class="carousel-control-next" type="button" href="#carouselExampleIndicators"
                  data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>

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
// @ is an alias to /src
export default {
  name: "AboutComp",
  components: {
  },
};
</script>