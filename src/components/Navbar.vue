<template>
  <div>
    <nav class="navbar navbar-expand navbar-light bg-light">
      <a class="navbar-brand" href="#">
        <img alt="logo" src="./../assets/ehealth.png" class="imgSize img-fluid">
      </a>
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
</style>

<script>

export default {
  name: 'Navbar',
}
</script>