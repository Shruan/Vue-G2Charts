<template>
  <div id="app">
    <div class="nav">
      <tp-nav></tp-nav>
    </div>
    <!-- <img src="./assets/logo.png"> -->
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import TpNav from '@/components/TpNav'

export default {
  name: 'app',
  components: {
    TpNav
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  width: 100%;
  height: 100%;
  position: relative;
}
.nav {
  position: fixed;
}
.content {
  margin-left: 200px;
}
</style>
