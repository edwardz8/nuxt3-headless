<script setup lang="ts">
const params = useRoute().params;

// Get Category ID
const { data: categories, error } = await useWpApi().getCategory(
  params.slug as string
);

// Get Post Related to category Id
const category = categories.value[0];
const { data: posts } = await useWpApi().getPosts(category.id);

useHead({
  title: `Archive: ${category.name}`,
  meta: [
    {
      name: "description",
      content: `Category ${params.slug}`,
    },
  ],
});
</script>

<template>
  <PageHeader :title="`Archive: ${category.name}`"></PageHeader>
  <section class="blogs-archive">
    <div class="container py-10">
      <div class="grid sm:grid-cols-3 gap-10">
        <blog-card v-for="post in posts" :key="post.id" :title="post.title.rendered"
          :image="post._embedded['wp:featuredmedia'][0]?.source_url" :excerpt="post.excerpt.rendered" :slug="post.slug" />
      </div>
    </div>
  </section>
</template>