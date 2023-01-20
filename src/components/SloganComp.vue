<template>
    <meta charset="utf-8">

    <div class="container py-0 px-0">
        <img src="../assets/slogan.jpg" class="img-fluid" alt="Responsive image"
            style="opacity: 65% ; height: 100%; width: 100%;">
        <div data-aos="fade-up" class="slogan"> Bringing your ideas to life, <br/> layer by
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
    top: 21vw;
    left: 22vw;
    width: 100%;
    height: 100%;
    font-size: 4vw;
    font-weight: 700;
    color: #ededed;
    text-align: left;    
}
</style>