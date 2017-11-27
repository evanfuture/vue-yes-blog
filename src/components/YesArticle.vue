<template>
  <div class="hello">
    <h1 class="blog__title">{{article.title}}</h1>
    <router-link to="/blog">Back to Blog</router-link>
    <hr/>
    <div class="article__body" v-html="article.body"></div>
  </div>
</template>

<script>
  export default {
    name: 'YesArticle',
    props: {
      id: {
        type: String,
        required: true,
      },
    },
    data() {
      return {
        article: {
          title: this.id,
          body: '<h2>Testing</h2><p>Ok, let\'s do more now!</p>',
        },
      };
    },
  };
</script>

<style lang="scss">
  @import '../assets/highlight_theme.css';

  .article__body {
    text-align: left;
  }
</style>
