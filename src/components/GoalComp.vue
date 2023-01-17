<template>
    <meta charset="utf-8">
    <link href='open-sans.css' rel='stylesheet' type='text/css'>

    <div>
        <div class="container">
            <div class="card text-left gap">
                <div class="card-header gap border-0">
                    <h3 class="goal">Our goals</h3>
                    <p>     </p>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
                    <p class="fa fa-star goalcontent"></p>
                    <b class="goalcontent"> All-in-one and easy deployment solution</b> <br/>
                    <p class="fa fa-star goalcontent"></p>
                    <b class="goalcontent"> Lower the barrier for 3D modeling and printing</b>
                </div>
                <div class="row">
                    <div data-aos="flip-left" class="cardgoal goal1">
                        <h4 class="card-title goal1">Youth</h4>
                        <p class="goalcontent">Provide an entry point for talented youth</p>
                    </div>

                    <!-- card-overlay BUG -->
                    <div data-aos="flip-left" class="cardgoal goal2">
                        <h4 class="card-title goal2">Society</h4>
                        <p class="goalcontent">Open source and free to use</p> 
                        <p class="goalcontent">Inspire the next generation of innovators and leaders in the Tech industry</p>
                    </div>

                    <div data-aos="flip-left" class="photocontainer goal3">
                        <img src="../assets/goal3.jpg" class="img-fluid rounded-start" alt="Responsive image" style=" height: 100%; width: 100%;">
                    </div>

                    <div data-aos="fade-up" class="card-footer border-0">
                        <p class="text-center slogan">Bringing your ideas to life, layer by layer.</p>
                    </div>
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

* {
    font-family: "Poppins", sans-serif;
    font-style: normal;
    font-weight: 700; /* BUG */
}

.cardgoal {
    width: 100%;
    height: 100%;
    max-width: 300px;
    max-height: 300px;
    margin: 1rem;
    border: 0px;
    border-radius: 5px;
}

.photocontainer {
    width:100%;
    height:90%;
    max-width: 300px;
    max-height: 300px;
    margin: 1rem;
    padding: 0;    
    border-radius: 5px;
}

.goal {
    /*font-weight BUG*/
    position: relative;
    font-weight: normal;
    font-size: 3;
    color: #420b0b;
}

.gap {
    background: #D78873;
    position: relative;
}

.goalabove {
    font-size: 1.2.5;
    line-height: 3pt;
    color: #000000;
    position: relative;
}

.goal1 {
    font-size: 2vw;
    color: #420b0b;
    background: #D78873;
    position: relative;
}

.goal2 {
    font-size: 2vw;
    color: #420b0b;
    background: #ebbfb3;
    position: relative;
}

.goal3 {
    background: #FFFFFF;
    position: relative;
}

.goalcontent {
    font-size: 1.2vw;
    line-height: 13pt;
    color: #000000;
    position: relative;
}

.slogan {
    position: relative;
    font-style: italic;
    font-size: 1.5vw;
    font-weight: 300;
    color: #420b0b;
    background: #ffffff00;
}
</style>