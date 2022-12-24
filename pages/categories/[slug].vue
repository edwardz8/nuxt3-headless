<script lang="ts" setup>
const route = useRoute();

// Get Category ID
const { data: category } = await useWpApi().get<any>(
  `categories?slug=${route.params.slug}`
);

// Get Post Related to category Id
const { data: posts } = await useWpApi().getPosts<any>(category.value[0].id);

</script>

<template>
  <PageHeader :title="`Archive: ${category[0].name}`"></PageHeader>
  <section class="blogs blogs-archive">
    <div class="container py-10">
      <div class="grid sm:grid-cols-3 gap-10">
        <blog-card v-for="post in posts" :key="post.id" :title="post.title.rendered"
          :image="post._embedded['wp:featuredmedia'][0]?.source_url" :excerpt="post.excerpt.rendered" :slug="post.slug" />
      </div>
    </div>
  </section>
</template>