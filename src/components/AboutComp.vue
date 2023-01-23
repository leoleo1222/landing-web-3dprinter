<template>
  <div class="aboutus_bg">
    <div style="padding: 1rem"></div>
    <h2 class="aboutus_subtitle p-3">About us</h2>

    <div class="aboutus_container">
      <img
        src="../assets/about_us_1.png"
        alt="Responsive image"
        style="height: 50%; width: 100%"
      />
    </div>

    <h1 class="aboutus_text text-center" style="padding: 5px">
      We are a group of students from the Department of Computer Science, HKBU.
      We saw the difficulties for promoting STEAM and 3D Printing in schools. We
      think it was a pity for the students to miss out on the opportunities to
      learn about these technologies. Therefore, we come with this project
      - Printify.
    </h1>

    <br />
    <div class="text-center">
      <button type="button" class="btn btn-light" style="color: #313aaf">
        Contact us &#8594;
      </button>
    </div>
    <br /><br /><br />
    <div class="aboutus_bottom text-center">HKBU</div>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap");

body {
  background: #313aaf;
}

.container_aboutus {
  position: relative;
  text-align: center;
  color: white;
}

/* Top left text */
.top-left-aboutus {
  position: absolute;
  top: 8px;
  left: 16px;
}

.aboutus_bg {
  background-color: #313aaf;
  margin: 0px !important;
}

.aboutus_subtitle {
  margin-bottom: 2rem;
  font-family: "Poppins";
  color: #ededed;
  text-align: center;
  font-family: "Poppins", sans-serif;
  position: relative;
  font-weight: bold;
  font-size: 4.5vw;
}

.aboutus_text {
  font-family: "Poppins", sans-serif;
  font-size: 1.8vw;
  font-weight: 400;
  font-style: normal;
  line-height: calc(1em + 2vw);
  color: #ededed;
  position: relative;
  margin-left: 2rem;
  margin-right: 2rem;
}

.aboutus_container {
  display: block;
  margin: 15px auto;
  width: 75%;
}

.aboutus_bottom {
  font-family: "Poppins", sans-serif;
  font-size: 1.8vw;
  font-weight: 600;
  font-style: normal;
  line-height: calc(1em + 2vw);
  background: #ededed;
  color: #313aaf;
  position: relative;
}
</style>