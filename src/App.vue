<template>
  <!-- boostrap navbar-->
  <nav class="navbar navbar-expand-lg bg-light" >
    <div class="container-fluid">
      <router-link class="nav-link active" aria-current="page" :to="'/'">
        <a class="navbar-brand" href="#">HKBU</a>
      </router-link>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/solution">
              Solution
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/about">
              About Us
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/product">
              Product
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/contact">
              Contact Us
            </router-link>
          </li>
        </ul>

      </div>
    </div>
  </nav>
  <div class="container text-start">
    <router-view />
  </div>
</template>



<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
