<template>
    <meta charset="utf-8">
    <!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"-->
    <!--star
    <div>
        <div class="container">
            <div class="card text-left gap">
                <div class="card-header gap border-0">
                    <h3 class="goal">Our goals</h3>
                    <p> </p>
                    <p class="fa fa-star goalcontent"></p>
                    <b class="goalcontent"> All-in-one and easy deployment solution</b> <br />
                    <p class="fa fa-star goalcontent"></p>
                    <b class="goalcontent"> Lower the barrier for 3D modeling and printing</b>
                </div>
        

                <div class="row">
                    <div data-aos="flip-left" class="col-4">
                        <div class="col px-3" style="height:100%; width: 100%;">  spacing=0 
                            <h4 class="card-title goal1">Youth</h4>
                            <p class="goalcontent">Provide an entry point for talented youth</p>
                        </div>
                    </div>

                    <div data-aos="flip-left" class="col-8">
                        <div class="row" style="background:#ebbfb3; border-radius: 5px;">
                            <div class="col px-1" style="height:80%; width: 60%;">  spacing=0
                                <h4 class="card-title goal2">Society</h4>
                                <p class="goalcontent">Open source and free to use</p>
                                <p class="goalcontent">Inspire the next generation of innovators and leaders in the Tech
                                    industry</p>
                            </div>
                            <div class="col px-0">
                                <img src="../assets/goal3.jpg" class="img-fluid rounded-start" alt="Responsive image"
                                    style=" height: 100%; width: 100%;">
                            </div>
                        </div>
                    </div>
                </div>

                <div data-aos="fade-up" class="card-footer border-0">
                    <p class="text-center slogan">Bringing your ideas to life, layer by layer.</p>
                </div>

                <div>
                    <div class="row expt-holder">
                        <div class="expt-box" style="width: 100px; height: 100px;"> Box 1 </div>
                        <div class="expt-box" style="width: 100px; height: 100px;"> Box 2 </div>
                        <div class="expt-box" style="width: 100px; height: 100px;"> Box 3 </div>
                    </div>
                </div>
            </div>
        </div>

    </div-->

    <div class="container">
        <div class="row" style="background: #313aaf">
            <div class="col-6 py-5 px-5">
                <h3 class="goal">Project Goals</h3>
                <p> </p>
                <p class="goalcontent">Guide you <br/> step-by-step </p>

                <div class="col grid gap-0 row-gap-3">
                    <img src="../assets/goal3.jpg" class="img-fluid" alt="Responsive image"
                        style=" height: 100%; width: 100%; max-height: 40vw; max-width: 20vw;">
                </div>
            </div>


            <div class="col-6 py-5 px-5">
                <p class="goalcontent">• All-in-one and easy deployment solution</p>
                <p class="goalcontent">• Lower the barrier for 3D modeling and printing</p>
                <h4 class="goaltitle">Youth</h4>
                <p class="goalcontent">• Provide an entry point for talented youth</p>
                <h4 class="goaltitle">Society</h4>
                <p class="goalcontent">• Open source and free to use <br/> • Inspire the next generation of innovators and leaders in the Tech
                    industry</p>
                <h4 class="goaltitle">School</h4>
                <p class="goalcontent">• Promote the STEAM education by providing workshop materials</p>

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

/* .photocontainer {
    width: 100%;
    height: 90%;
    max-width: 300px;
    max-height: 300px;
    padding: 0;
    border-radius: 5px;
    margin-left: 25px;
} */

.goal {
    font-family: "Poppins", sans-serif;
    position: relative;
    font-weight: normal;
    font-size: 3;
    color: #FFFFFF;
}

.goaltitle {
    font-family: "Poppins", sans-serif;
    font-size: 1.2vw;
    font-weight: bold;
    line-height: 13pt;
    color: #FFFFFF;
    position: relative;
}

.goalcontent {
    font-family: "Poppins", sans-serif;
    font-size: 1.2vw;
    line-height: 13pt;
    color: #FFFFFF;
    position: relative;
}

/* .slogan {
    position: relative;
    font-style: italic;
    font-size: 1.5vw;
    font-weight: 300;
    color: #420b0b;
    background: #ffffff00;
} */

</style>