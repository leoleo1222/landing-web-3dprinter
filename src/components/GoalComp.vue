<template>
    <div>
        <div class="card text-center border-0 gap">
            <div class="card-header gap">
                <h3>Goal</h3>
            </div>
            <div class="row">
                <div data-aos="flip-left" class="card col-md-4 card-body mx-3 my-3 goal1" style="width: 12rem;">

                    <h4 class="card-title goal1Head">School</h4>
                    <p class="card-text goalcontent">easy access to 3D printing technology</p>
                </div>

                <div data-aos="flip-left" class="card col-md-4 card-body mx-3 my-3 goal2" style="width: 12rem;">
                    <h4 class="card-title goal2Head">Students</h4>
                    <p class="card-text goalcontent">design and print their own 3D models</p>
                    <p class="card-text goalcontent">explore Creativity, Imagination, Potential in Technology</p>
                </div>

                <div data-aos="flip-left" class="card col-md-4 col-lg-4 card-body mx-3 my-3 goal3"
                    style="width: 12rem;">
                    <h4 class="card-title goal3Head">Society</h4>
                    <p class="card-text goalcontent">All-in-one deployment solution</p>
                    <p class="card-text goalcontent">More 3D printing learners</p>
                    <p class="card-text goalcontent">strengthen basics of 3D-printing learners</p>
                    
                </div>

                <div class="card-footer text-muted gap">
                    <p class="card-text slogan">Bringing your ideas to life, layer by layer.</p>
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
.goal1 {
    background: #3f7fa171;
    position: relative;
}

.goal2 {
    background: #3c47826a;
    position: relative;
}

.goal3 {
    background: #c0588e90;
    position: relative;
}

.goal1Head {
    position: relative;
    font-size: 2vw;
    color: #FFFFFF;
    background-color: #3f7fa1;
    border-radius: 5px;
}

.goal2Head {
    position: relative;
    font-size: 2vw;
    color: #FFFFFF;
    background-color: #3c4782;
    border-radius: 5px;
}

.goal3Head {
    position: relative;
    font-size: 2vw;
    color: #FFFFFF;
    background-color: #c0588e;
    border-radius: 5px;
}

.goalcontent {
    position: relative;
    font-size: 1.3vw;
    color: #FFFFFF;
}

.slogan {
    position: relative;
    font-style: italic;
    font-size: 1.3vw;
    color: #e7c87d;

}

/* "Goal" */
h3 {
    position: relative;
    font-weight: bold;
    font-size: 3.5vw;
    color: #f1b015;
}


</style>