<script lang="ts" setup>
const { params } = useRoute();
const { data: posts } = await useWpApi().getPost<any>(params.slug as string);
const post = posts.value[0];
</script>

<template>
    <section class="container mx-auto py-10 py-4 px-4">
        <div class="sm:px-20">
            <!-- Blog Title  -->
            <h1 class="blog_title text-3xl sm:text-5xl font-bold text-center mb-5">
                {{ post.title.rendered }}
            </h1>
            <!-- Blog Meta  -->
            <div class="flex mb-10 justify-center gap-5">
                <span>Written by:
                    <span class="text-primary-500">{{
                            post._embedded["author"][0]?.name
                    }}</span></span>

                <span>Published on:
                    <span class="text-primary-500">{{ post.date }}</span></span>
            </div>
            <!-- Blog Image  -->
            <div class="blog_image h-[250px] sm:h-[500px] w-full rounded shadow-xl relative overflow-hidden mb-12">
                <img :src="post._embedded['wp:featuredmedia'][0]?.source_url" alt="blog thumbnail"
                    class="absolute w-full h-full object-cover" />
            </div>
            <div>
                <div v-html="post.content.rendered"></div>
            </div>
        </div>
    </section>
</template>