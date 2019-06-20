<template>
  <div id="app">
    <Navbar/>

    <router-view></router-view>
  </div>
</template>

<script>
  import Navbar from './components/Navbar.vue';
  import landing from './components/landing.vue';

  export default {
    name: 'app',
    components: {
      Navbar,
      landing
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  letter-spacing: 1px;
}
</style>
