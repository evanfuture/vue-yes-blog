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
        article: require(`../posts/${this.id}.md`), // eslint-disable-line global-require, import/no-dynamic-require
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
