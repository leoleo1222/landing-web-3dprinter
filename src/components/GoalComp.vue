<template>
    <div class="bg">
        <div class="card text-center border-0 bg-0">
            <div class="card-header">
                <h1>Goal</h1>
            </div>
            <div class="row">
                <div data-aos="flip-left" class="card col-md-4 card-body border-info mx-3 my-3" style="width: 12rem;">
                    <h5 class="card-title badge text-bg-info">School</h5>
                    <p class="card-text">get access to 3D printing technology in a human-friendly way</p>
                </div>

                <div data-aos="flip-left" class="card col-md-4 card-body border-info mx-3 my-3" style="width: 12rem;">
                    <h5 class="card-title badge text-bg-info">Students</h5>
                    <p class="card-text">design and print their own 3D models</p>
                    <p class="card-text">discover the world of 3D printing</p>
                    <p class="card-text">explore creativity, imagination and unlock their potential with 3D printing</p>
                </div>

                <div data-aos="flip-left" class="card col-md-4 col-lg-4 card-body border-info mx-3 my-3"
                    style="width: 12rem;">
                    <h5 class="card-title badge text-bg-info">Society</h5>
                    <p class="card-text ">provide an additional way to strengthen the basics of 3D-printing learners</p>
                </div>

                <div class="card-footer text-muted">
                    slogan like "Child can gains high" lol?
                </div>
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
    components: {
    },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap");

.bg {
    background-color: rgba(0, 0, 0, .25);
    opacity: 0.2;
    color: white;
}

h1 {
    position: relative;
    font-size: 6vw;
    color: #000000;
    text-transform: uppercase;
    white-space: nowrap;
}

h5 {
    position: relative;
    font-size: 8vw;
    color: #000000;
    text-transform: uppercase;
    white-space: nowrap;
}
</style>