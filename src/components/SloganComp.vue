<template>
    <meta charset="utf-8">
    <div style="background: black; ">
        <img src="../assets/slogan.jpg" class="img-fluid" alt="Responsive image"
            style="opacity: 65% ; height: 100%; width: 100%;">
        <div data-aos="fade-up" class="slogan text-center"> Bringing your ideas to life, <br/> layer by
            layer. </div>
    </div>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
AOS.init({
    duration: 2000,
});

// @ is an alias to /src
export default {
    name: "GoalComp",
    components: {
    },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap");

.slogan {
    font-family: "Poppins", sans-serif;
    position: absolute;
    top: 33vh;
    left: 22vw;
    transform: translate(0, -50%);
    height: auto;
    font-size: 4vw;
    font-weight: 700;
    color: #ededed;
    text-align: left;    
}
</style>