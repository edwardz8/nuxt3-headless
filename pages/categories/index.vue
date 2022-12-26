<script lang="ts" setup>
import colorGenerator from "~~/utils/colorGenerator";

useHead({
  title: "Categories",
  meta: [
    {
      name: "description",
      content: "Categories",
    },
  ],
});

const { data: categories } = await useWpApi().getCategories<any>();

</script>
<template>
  <PageHeader title="Categories"> </PageHeader>
  <section class="p-10">
    <div class="container">
      <div class="flex flex-wrap gap-4">
        <NuxtLink
          v-for="category in categories"
          :key="(category as any).id"
          :to="`/categories/${(category as any).slug}`"
          class="flex items-center justify-center py-2 px-2 rounded text-white shadow-md hover:shadow-lg duration-200 text-sm uppercase"
          :style="{ backgroundColor: colorGenerator() }"
        >
          <span class="font-md">#{{ (category as any).name }}</span>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>