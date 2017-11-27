<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <router-link to="/">Home</router-link>
  </div>
</template>

<script>
export default {
  name: 'banana',
  data() {
    return {
      msg: 'Welcome to Your Vue.js Banana',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: normal;
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
  color: #35495E;
}
</style>
