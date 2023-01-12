<template>
  <div class="heading">
    <h1><b>Operation</b></h1>
  </div>
  <div class='switch'>
    <div class='operation'>
      <input checked id='hardware' name='operation' type='radio' value='hw'>
      <label for='hardware'>Hardware</label>
    </div>
    <div class='operation'>
      <input id='software' name='operation' type='radio' value='sw'>
      <label for='software'>Software</label>
    </div>
  </div>
  <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel" style="margin-top: 10%;">
    <div class="carousel-inner">
      <div class="carousel-item active" data-bs-interval="10000">
        <img src="../assets/hardware-pc.jpg" class="d-block w-100" alt="hardware-pc.jpg">
      </div>
      <div class="carousel-item" data-bs-interval="2000">
        <img src="../assets/hardware-pc.jpg" class="d-block w-100" alt="">
      </div>
      <div class="carousel-item">
        <img src="" class="d-block w-100" alt="">
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "FlowComp",
  components: {
  },
};
</script>

<style>
/*------title------*/

body,
html {
  background-color: #1d1d1d;
  margin: 0;
  padding: 0;
  font-family: "Century Gothic", sans-serif;
}

.heading {
  margin-top: 5%;
  font-size: 3vw;
  color: #f1b015;
  text-transform: uppercase;
  font-family: "Century Gothic", sans-serif;
}

/*------radio button------*/

.switch {
  position: absolute;
  margin-top: 2%;
  width: 30%;
  height: 5.5%;
  border-bottom: 3px solid #f1b015;
  color: #ffffff;
  font-size: 25px;
  /*border-radius: 10px;*/
}

.operation {
  position: relative;
  display: inline-block;
  width: 50%;
  height: 101%;
  line-height: 40px;
}

.operation:first-child label {
  /*border-radius: 5px 0 0 5px;*/
}

.operation:last-child label {
  /*border-radius: 0 5px 5px 0;*/
}

.operation label {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 101%;
  cursor: pointer;
  /*font-style: italic;*/
  text-align: center;
  transition: transform 0.4s, color 0.4s, background-color 0.4s;
}

.operation input[type="radio"] {
  appearance: none;
  width: 0;
  height: 0;
  opacity: 0;
}

.operation input[type="radio"]:focus {
  outline: 0;
  outline-offset: 0;
}

.operation input[type="radio"]:checked~label {
  background-color: #f1b015;
  color: #1d1d1d;
}

.operation input[type="radio"]:active~label {
  transform: scale(1.05);
}

img {
  position: relative;
  width: 100%;
  height: 600px;
}
</style>