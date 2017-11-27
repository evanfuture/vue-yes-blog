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

export default {
  name: 'blog',
  computed: {
    articles() {
      return [
        {
          slug: 'first-article',
          title: 'Article One',
          description: 'This is article one\'s description',
        },
        {
          slug: 'second-article',
          title: 'Article Two',
          description: 'This is article two\'s description',
        },
      ];
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
