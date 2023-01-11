<template>
  <div class="home">
    <!-- create two boostrap card in a row-->
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <div class="card-body">
            <!-- craete a div at the right-->
            <div class="row">
              <div class="col-md-6">
                <h1 class="card-title">Welcome to HKBU</h1>
                All of our team members are students from the Department of Computer Science, Hong Kong Baptist University. The techniques needed for the project were learnt  in different courses before or self-learned on the internet. We hope that our project can help you to print your 3D models easily and efficiently.
                </div>
                <!-- craete a div at the left-->
                <div class="col-md-6">
                  <img src="../assets/octoprint.png" class="img-fluid" alt="Responsive image">
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  components: {

  },
  setup() {
    return {
    }
  }
}
</script>