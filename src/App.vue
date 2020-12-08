<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/images/logo.png" width="300" height="300" />
    <br />
    <Home :msg="'Welcome'"></Home>
  </div>
</template>

<script>
import { Home } from "@/screens";
export default {
  name: "App",
  components: {
    Home
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.svg {
  width: 45px;
}
</style>
