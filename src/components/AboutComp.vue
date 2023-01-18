<template>
  <h2 class="sub_title">About Us</h2>

  <div class="aboutus_container">
    <img
      src="../assets/about_us_1.png"
      alt="Responsive image"
      style="height: 50%; width: 100%;"
    />
  </div>

  <center class="aboutus_text">
  We are a group of students from the Department of Computer Science,
   HKBU. We saw the difficulties for promoting STEAM and 3D Printing 
   in schools. We think it was a pity for the students to miss out on 
   the opportunities to learn about these technologies. Therefore, 
   we come with this project “Printify”.
  </center>
</template>

<style>
* {
  font-family: "Poppins";
}

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

.sub_title {
  text-align: center;
  color: white;
  font-weight: bold;
  margin-top: 10px;
}

.aboutus_text{
  color: white;
}

.aboutus_container{
  
}

</style>