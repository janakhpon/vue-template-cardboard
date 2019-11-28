<template>
  <header role="banner">
    <nav class="navbar navbar-expand-lg bg-dark">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">Cardboard</router-link>

        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExample05"
          aria-controls="navbarsExample05"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarsExample05">
          <ul class="navbar-nav pl-md-5 ml-auto">
            <li class="nav-item">
               <router-link  class="nav-link active" to='/'>Home</router-link>
            </li>
            <li class="nav-item">
              <router-link  class="nav-link active" to='/About'>About</router-link>
            </li>
            <li class="nav-item dropdown">
              <router-link class="nav-link dropdown-toggle"
                id="dropdown04"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false" to='/Services'>Services</router-link>
              <div class="dropdown-menu" aria-labelledby="dropdown04">
                <router-link class="dropdown-item" to='/Project'>Project</router-link>
                <a class="dropdown-item" href="#">Branding</a>
                <a class="dropdown-item" href="#">Web Design</a>
                <a class="dropdown-item" href="#">App Design</a>
                <a class="dropdown-item" href="#">Start Up</a>
              </div>
            </li>
            <li class="nav-item">
              <router-link  class="nav-link active" to='/Projects'>Projects</router-link>
            </li>
            <li class="nav-item">
              <router-link  class="nav-link active" to='/Contact'>Contact</router-link>
            </li>
          </ul>

          <div class="navbar-nav ml-auto">
            <form method="post" class="search-form">
              <span class="icon ion ion-search"></span>
              <input type="text" class="form-control" placeholder="Search..." />
            </form>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
    name: 'Header'
};
</script>

<style>
</style>