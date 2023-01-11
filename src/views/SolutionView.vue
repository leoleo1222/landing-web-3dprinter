<template>
    <div class="home">
        <!-- craete four boostrap card and two in a row-->
        <div class="row">
            <div class="col-md-12">
                <h1>Hardware</h1>
                <div class="card">
                    <div class="card-body">                        
                        <h1 class="card-title">Raspberry pi</h1>
                        <img src="../assets/raspberry-pi-logo.png" class="img-fluid" alt="Responsive image">
                        <p class="card-text">Raspberry Pi (/paɪ/) is a series of small single-board computers (SBCs). The project originally for promoting basic computer science education in schools and in developing countries, and then selling outside its target market for uses such as robotics.</p>
                        <router-link class="nav-link active" aria-current="page" :to="'/solution'">
                            <a href="#" class="btn btn-primary">Learn more</a>
                        </router-link>
                    </div>
                </div>
                <div class="card">
                    <div class="card-body">                        
                        <h1 class="card-title">Control Unit</h1>
                        <img src="../assets/control-unit.png" class="img-fluid" alt="Responsive image">
                        <p class="card-text">The printer will be connected to the control unit with a USB cable. The control unit will be connected to the internet with a WiFi dongle.</p>
                        <router-link class="nav-link active" aria-current="page" :to="'/solution'">
                            <a href="#" class="btn btn-primary">Learn more</a>
                        </router-link>
                    </div>
                </div>
                <div class="card">
                    <div class="card-body">
                        <h1 class="card-title">Printer Assemble</h1>
                        <!-- card image-->
                        <img src="../assets/printer.png" class="img-fluid" alt="Responsive image">
                        <p class="card-text">The printer will be a 3D printer with a build volume of 200mm x 200mm x 200mm. The printer will be controlled by a Raspberry Pi 3B+. The printer will be assembled by the team members.</p>
                        <router-link class="nav-link active" aria-current="page" :to="'/solution'">
                            <a href="#" class="btn btn-primary">Learn more</a>
                        </router-link>
                    </div>
                </div>
                <h1>Software</h1>
                <div class="card">
                    <div class="card-body">
                        <h1 class="card-title">Software manual</h1>
                        <p class="card-text">The software manual will be a document that describes how to use the website. The document will be written in English and Chinese. The document will be provided to the users through the website.</p>
                        <router-link class="nav-link active" aria-current="page" :to="'/solution'">
                            <a href="#" class="btn btn-primary">Learn more</a>
                        </router-link>
                    </div>
                </div>
                <div class="card">
                    <div class="card-body">
                        <h1 class="card-title">Front-end interface</h1>
                        <p class="card-text">The front-end interface will be a website that allows users to upload 3D models and print them. The website will also provide a tutorial for users to learn how to use the website and the printer.</p>
                        <router-link class="nav-link active" aria-current="page" :to="'/solution'">
                            <a href="#" class="btn btn-primary">Learn more</a>
                        </router-link>
                    </div>
                </div>
                
            </div>
        </div>

    </div>
  
</template>
  
  <script>
  // @ is an alias to /src
  
  export default {
    name: 'SolutionView',
    components: {
  
    },
    setup() {
      return {
      }
    }
  }
  </script>