<template>
  <div class="operation-heading">
    <h1><b>Operations</b></h1>
  </div>
  <swiper :modules="modules" :slides-per-view="1" :space-between="3000" navigation :loop="true"
    :pagination="{ clickable: true }" :scrollbar="{ draggable: true }" @swiper="onSwiper" @slideChange="onSlideChange"
    class="operation-swiper" style="height: 70vh;">
    <swiper-slide style="height: 60vh;">
      <div class="operation-hardware-container">
        <img src="../assets/Server.jpg" class="operation-hardware-img" />
      </div>
      <div class="operation-hardware-content">
        <h1><b>Hardware</b></h1><br>
        <h2><b>Server</b></h2><br>
        <p>
          <b>
            The server will host the website for receiving the print job submitted by users. Then it will schedule and
            assign the printing job to the connected printer. Users will then receive the printing status displayed on
            the website.
          </b>
        </p>
      </div>
    </swiper-slide>
    <swiper-slide style="height: 60vh;">
      <div class="operation-hardware-container">
        <img src="../assets/hardware-pi.jpg" class="operation-hardware-img" />
      </div>
      <div class="operation-hardware-content">
        <h1><b>Hardware</b></h1><br>
        <h2><b>drives</b></h2><br>
        <h3><b>Minimum requirement</b></h3><br>
        <b>
          <p>
            • &nbsp; 4 core 64 bit CPU<br>
            • &nbsp; 4GB Ram<br>
          </p>
          <p>
            Single-board computer like Raspberry Pi will be a suggested device for the Server.
          </p>
        </b>
      </div>
    </swiper-slide>
    <swiper-slide style="height: 60vh;">
      <div class="operation-hardware-container">
        <img src="../assets/3Dprinter.jpg" class="operation-hardware-img" />
      </div>
      <div class="operation-hardware-content">
        <h1><b>Hardware</b></h1><br>
        <h2><b>Printer Assemble</b></h2><br>
        <p>
          <b>
            The 3D printer series will contain different options of printer with different print volume and
            functions.
            From 20cm x 20cm x 20cm to 40cm x 40cm x 40cm. The printer could be easily assembled by following the
            assembly guide.
          </b>
        </p>
      </div>
    </swiper-slide>
    <swiper-slide style="height: 60vh;">
      <div class="operation-software-content">
        <h1><b>Software</b></h1><br>
        <h2><b>Software Manual</b></h2><br>
        <p>
          <b>
            The software manual will be a document that describes how to use the website. The document provided in the
            website will comes in Chinese and English.
          </b>
        </p>
      </div>
      <div class="operation-software-container">
        <img src="../assets/Manual.jpg" class="operation-hardware-img" />
      </div>
    </swiper-slide>
    <swiper-slide style="height: 60vh;">
      <div class="operation-software-content">
        <h1><b>Software</b></h1><br>
        <h2><b>Front-end Interface</b></h2><br>
        <p>
          <b>
            The front-end interface will be a website that allows users to upload 3D models created via Blender software
            application and print them. The website will also provide tutorials or users to learn how to use the website
            and the printer.
          </b>
        </p>
      </div>
      <div class="operation-software-container">
        <img src="../assets/UI.jpg" class="operation-hardware-img" />
      </div>
    </swiper-slide>
    <swiper-slide style="height: 60vh;">
      <div class="operation-software-content">
        <h1><b>Software</b></h1><br>
        <h2><b>Website</b></h2><br>
        <p>
          <b>
            The website will be developed in Flask in Python and Vue, which is based on the Octoprint interface. It will
            provide functions to print and monitor the printer.
          </b>
        </p>
      </div>
      <div class="operation-software-container">
        <img src="../assets/code.png" class="operation-hardware-img" />
      </div>
    </swiper-slide>
  </swiper>
</template>

<script>
// import Swiper core and required modules
import { Navigation, Pagination } from "swiper";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// Import Swiper styles
export default {
  name: "FlowComp",
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation, Pagination],
    };
  },
  mounted() {
    var next = document.getElementsByClassName("swiper-button-next");
    var pre = document.getElementsByClassName("swiper-button-prev");
    var butlet = document.getElementsByClassName("swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal");
    // next padding left 10px
    next[0].style.paddingRight = "5%";
    // pre padding right 10px
    pre[0].style.paddingLeft = "5%";
    // butlet padding buttom 10px
    butlet[0].style.paddingBottom = "1%";
  },
};
</script>
<style>
/*------title------*/

body,
html {
  overflow-x: hidden;
}

.operation-heading {
  margin-top: 5%;
  color: #313aaf;
  /*text-transform: uppercase;*/
}

.operation-swiper {
  height: 105vh;
  width: 100%;
  margin-top: 12%;
  user-select: none;
  background-color: #313aaf;
  overflow: visible;
}

/*------swiper------*/

.operation-hardware-container {
  background-color: #ededed;
  width: 40%;
  height: 100%;
  margin-left: 10%;
  padding: 0 1.5% 1.5% 1.5%;
  display: inline-block;
}

.operation-hardware-img {
  width: 100%;
  height: 120%;
  margin-top: -11.5vh;
  object-fit: cover;
}

.operation-hardware-content {
  position: absolute;
  margin: 4% 0 0 4%;
  color: #ededed;
  display: inline-block;
  width: 35%;
}

.operation-hardware-content h1 {
  font-size: 3vw;
}

.operation-hardware-content h2 {
  font-size: 2vw;
}

.operation-hardware-content h3 {
  font-size: 1.5vw;
}

.operation-hardware-content p {
  font-size: 1.5vw;
}

.operation-software-container {
  background-color: #ededed;
  width: 40%;
  height: 100%;
  margin-left: 50%;
  padding: 0 1.5% 1.5% 1.5%;
  display: inline-block;
}

.operation-software-content {
  position: absolute;
  margin: 4% 0 0 10%;
  color: #ededed;
  display: inline-block;
  width: 35%;
}

.operation-software-content p {
  font-size: 1.5vw;
}

@media only screen and (max-width: 988px) {
  .operation-hardware-img {
    height: 110%;
    margin-top: -6vh;
  }
}

@media only screen and (max-width: 680px) {
  .operation-swiper {
    margin-top: 20%;
  }

  .operation-hardware-content {
    margin: 6% 0 0 6%;
  }

  .operation-hardware-content h1 {
    font-size: 6vw;
  }

  .operation-hardware-content h2 {
    font-size: 5vw;
  }

  .operation-hardware-content h3 {
    font-size: 4vw;
  }

  .operation-hardware-content p {
    font-size: 3vw;
  }

  .operation-software-content {
    margin: 6% 0 0 6%;
  }

  .operation-software-content h1 {
    font-size: 7vw;
  }

  .operation-software-content h2 {
    font-size: 5vw;
  }

  .operation-software-content p {
    font-size: 3vw;
  }
}
</style>