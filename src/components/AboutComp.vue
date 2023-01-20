<template>
  <h2 class="aboutus_subtitle fw-bolder">Background</h2>

  <div class="aboutus_container">
    <img
      src="../assets/about_us_1.png"
      alt="Responsive image"
      style="height: 50%; width: 100%"
    />
  </div>

  <center class="aboutus_text">
    We are a group of students from the Department of Computer Science, HKBU. We
    saw the difficulties for promoting STEAM and 3D Printing in schools. We
    think it was a pity for the students to miss out on the opportunities to
    learn about these technologies. Therefore, we come with this project
    “Printify”.
  </center>

  <br />
  <div class="text-center">
    <button type="button" class="btn btn-light" style="color: #313aaf">
      Contact us &#8594;
    </button>
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

.aboutus_subtitle {
  font-family: "Poppins";
  color: #ededed;
  min-height: calc(9vh + 20px);
  position: relative;
  text-align: center;
  transform: translateY(40%);
}

.aboutus_text {
  font-family: "Poppins", sans-serif;
  font-size: 1.8vw;
  font-weight: 400;
  font-style: normal;
  line-height: calc(1em + 1.5vw);
  color: #ededed;
  position: relative;
}

.aboutus_container {
  display: block;
  margin: 15px auto;
  width: 75%;
}
</style>