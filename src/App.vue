<template>
  <!-- boostrap navbar-->
  <nav class="navbar sticky-top navbar-expand-lg navbar-dark bg-dark" >
    <div class="container-fluid">
      <router-link class="navbar-brand" aria-current="page" to="/">HKBU</router-link>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/louis">
              Louis
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/leo">
              Leo
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/raymond">
              Raymond
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/jenny">
              Jenny
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
  color: #ffffff;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #ededed;
}

nav a.router-link-exact-active:hover {
  color: #313aaf;
}

</style>
