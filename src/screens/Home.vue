<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <h3>Navigation</h3>
    <ul>
      <li>
        <router-link to="/news">News</router-link>
      </li>
      <li>
        <router-link to="/classes">Classes</router-link>
      </li>
      <li>
        <router-link to="/about-us">About Us</router-link>
      </li>
    </ul>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Home",
  props: {
    msg: String
  },
  mounted: function() {
    this.$store.dispatch("getPrice").then(response => console.log(response));
  }
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
