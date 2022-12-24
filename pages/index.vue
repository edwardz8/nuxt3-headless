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
    titleTemplate: "dfs graphs - %s",
});


const { data: posts } = await (await useWpApi()).getPosts();

// const { data: posts } = useFetch('https://wp-nuxt-demo/wp-json/wp/v2/posts')
</script>

<template>
    <main>
        <PageHeader>
            <div class="flex items-center flex-wrap">

                <div class="w-[200px] relative h-[200px] mr-5 rounded overflow-hidden">
                    <img src="~/assets/img/image.jpg" alt="image" class="w-full h-full absolute object-cover" />
                </div>
                <!-- header text -->
                <div>
                    <h1 class="text-4xl font-bold mb-2">wp + vue nuxt blog</h1>
                    <p class="mb-3">This is a faux description of the blog.</p>
                    <a class="btn bg-gray-900 text-gray-100 py-2 px-4 rounded inline-block">Let's Connect</a>
                </div>

            </div>
        </PageHeader>

        <!-- Blog Section Starts -->
        <section class="blogs">
            <div class="container py-10">
                <div class="grid sm:grid-cols-3 gap-10">
                    <BlogCard v-for="post in posts" :key="post.id" :title="post.title.rendered"
                        :excerpt="post.excerpt.rendered"
                        :slug="post.slug"></BlogCard>
                        <!-- :image="post._embedded['wp:featuredmedia'][0]?.source_url" -->
                </div>
            </div>
        </section>
        <!-- Blog Section Ends  -->
    </main>
</template>