<template>
  <div class="blog">
    <h1>Blog</h1>
    <router-link to="/">Home</router-link>
    <hr/>
    <article v-for="article in articles" :key="article.slug" class="article">
      <router-link class="article__link" :to="`/blog/${ article.slug }`">
        <h2 class="article__title">{{ article.title }}</h2>
        <p class="article__description">{{article.description}}</p>
      </router-link>
    </article>
  </div>
</template>

<script>
const posts = {};
const req = require.context('../posts/', false, /\.md$/);

req.keys().forEach((key) => {
  posts[key] = req(key);
});

export default {
  name: 'blog',
  computed: {
    articles() {
      const articleArray = [];

      Object.keys(posts).forEach((key) => {
        const article = posts[key];
        article.slug = key.replace('./', '').replace('.md', '');
        articleArray.push(article);
      });

      return articleArray
        .filter(post => post.status === 'publish')
        .sort((a, b) => a.created < b.created);
    },
  },
};
</script>

<style lang="scss">
  .article {
    &__link {
      padding: 0 20px;
      text-decoration: none;

      &:hover .article__title {
        text-decoration: underline;
      }
    }

    &__title,
    &__description {
      margin: 0;
    }
  }
</style>
