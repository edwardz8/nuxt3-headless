<template>
    <nav class="bg-gray-700 text-white py-5 px-5">
        <div class="container flex justify-between">
            <NuxtLink to="/" class="logo text-xl font-bold">WP + Nuxt Blog</NuxtLink>
            <ul class="inline-flex gap-2">
                <li><NuxtLink to="/">Home</NuxtLink></li>
                <li><NuxtLink to="/categories">Categories</NuxtLink></li>
            </ul>
        </div>
    </nav>
</template>