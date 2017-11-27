<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <router-link to="/blog">Blog</router-link>
    <router-link to="/banana">Banana</router-link>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data() {
    return {
      msg: 'Welcome to Your Vue.js PWA',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.hello {
  padding: 0 20vw;
}

h1, h2 {
  font-weight: normal;
}

a {
  color: #35495E;
}
</style>
