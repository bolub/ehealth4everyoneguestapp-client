<template>
  <div>
    <nav class="navbar navbar-expand-md navbar-light bg-light">
      <router-link to="/" class="navbar-brand">
        <img alt="logo" src="./../assets/ehealth.png" class="imgSize img-fluid">
      </router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link to="/" class="nav-link link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/new-guest" class="nav-link link">Add New Guest</router-link>
          </li>
      
        </ul>
        
      </div>
    </nav>

    </div>
</template>

<style>
    .link{
      font-size: 15px;
      color: #027BA0 !important;
    }

    .imgSize{
      width: 200px;
    }

    .navbar-toggler-icon{
      width: 1rem;
      height: 1.3rem;
    }
</style>

<script>

export default {
  name: 'Navbar',
}
</script>