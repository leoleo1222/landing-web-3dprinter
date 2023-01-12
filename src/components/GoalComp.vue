<template>
    <div>
        <div class="card text-center border-0 gap">
            <div class="card-header goal">
                <h1>Goal</h1>
            </div>
            <div class="row">
                <div data-aos="flip-left" class="card col-md-4 card-body mx-3 my-3 goal" style="width: 12rem;">

                    <h5 class="card-title">School</h5>
                    <p class="card-text">get access to 3D printing technology in a human-friendly way</p>
                </div>

                <div data-aos="flip-left" class="card col-md-4 card-body mx-3 my-3 goal" style="width: 12rem;">
                    <h5 class="card-title">Students</h5>
                    <p class="card-text">design and print their own 3D models</p>
                    <p class="card-text">discover the world of 3D printing</p>
                    <p class="card-text">explore creativity, imagination and unlock their potential with 3D printing
                    </p>
                </div>

                <div data-aos="flip-left" class="card col-md-4 col-lg-4 card-body mx-3 my-3 goal"
                    style="width: 12rem;">
                    <h5 class="card-title">Society</h5>
                    <p class="card-text ">provide an additional way to strengthen the basics of 3D-printing learners
                    </p>
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

.gap {
    background: #00000000;
    position: relative;
}
.goal {
    background: #2e90a413;
    position: relative;
}

.goal p {
    position: relative;
    font-size: 1.4vw;
    color: #000000;
}

h1 {
    position: relative;
    font-size: 4vw;
    color: #000000;
    text-transform: uppercase;
}

h5 {
    position: relative;
    font-size: 2vw;
    color: #000000;
    background-color: rgb(127, 200, 255);
    border-radius: 5px;
}
</style>