<script setup lang="ts">
import useWpApi from "~~/composables/useWpApi";

useHead({
    title: "Home",
    meta: [
        {
            name: "description",
            content: "Home",
        },
    ],
    titleTemplate: "wordpress + nuxt 3 = headless - %s",
});

const { data: posts } = await useWpApi().getPosts();
</script>

<template>
    <main>
        <PageHeader>
            <div class="w-[200px] relative h-[200px] ml-5 mr-5 rounded overflow-hidden">
                <img src="~/assets/img/image.jpg" alt="image" class="w-full h-full absolute object-cover" />
            </div>
            <!-- header text -->
            <div>
                <h1 class="text-4xl font-bold mb-2">Headless WP & Nuxt 3</h1>
                <p class="mb-3">This is a faux description of the blog.</p>
                <a class="btn bg-gray-900 text-gray-100 py-2 px-4 rounded inline-block">Let's Connect</a>
            </div>
        </PageHeader>

        <!-- Blog Section Starts -->
        <section class="container mx-auto py-16 px-2">
            <div class="grid sm:grid-cols-3 gap-5">
                <blog-card v-for="post in posts"
                    :key="post.id"
                    :title="post.title.rendered"
                    :excerpt="post.excerpt.rendered"
                    :slug="post.slug"
                    :image="post._embedded['wp:featuredmedia'][0].source_url"
                    />
                    <!-- :image="post._embedded['wp:featuredmedia'][0]?.source_url" -->
            </div>
        </section>
        <!-- Blog Section Ends  -->
    </main>
</template>