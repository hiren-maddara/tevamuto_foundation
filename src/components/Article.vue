<script setup>
import { ref, computed, watch } from 'vue';
import {useRoute} from 'vue-router'
import Skeleton from './Skeleton.vue'
import supabase from '@/data/supabase'

const route = useRoute()
const articleId = ref(route.params.id)
const sect = ref(route.params.sect)

watch(() => route, () => articleId.value = route.params.id)

const getArticleData = async (section, id) => {
    if (section === 'about') {
        const { error, data } = await supabase.from('about').select().eq('article_id', id)
        if (error) console.log(error)
        return data[0]
    }

    if (section === 'project') {
        const { error, data } = await supabase.from('projects').select('*').eq('article_id', id)
        if (error) console.log(error)
        return data[0]
    }
}

const articleData = ref(await getArticleData(sect.value, articleId.value))
// console.log(articleData.value.content)

//then get other articles
const loadArticles = async (sect) => {
    if (sect === 'about') {
        const { error, data } = await supabase.from('projects').select().order('created_at', {
            ascending: false
        })
        if (error) console.log(error)
        return data
    }

    if (sect === 'project') {
        const { error, data } = await supabase.from('projects').select().order('created_at', {
            ascending: false
        })
        if (error) console.log(error)
        return data
    }
}

const articles = ref(await loadArticles(sect.value))

const recentArticles = computed(() => articles.value.slice(5)) //select the most recent 5 articles

</script>

<template>
    <Suspense>
    <template #fallback>
        <section class="px-5 py-10 text-gray-800 dark:bg-gray-800 dark:text-gray-100">
            <div class="container grid grid-cols-12 mx-auto gap-y-6  gap-x-8">
                <Skeleton prefer="card" h="100%" w="100%" br="5px" class="col-span-12 lg:col-span-8" />
                <Skeleton prefer="card" h="100%" w="100%" br="5px" class="col-span-12 lg:col-span-4"/>
            </div>
        </section>
    </template>

    <template #default>
        <section class="px-5 py-10 text-gray-800 dark:bg-gray-800 dark:text-gray-100">
            <div class="container grid grid-cols-12 mx-auto gap-y-6  gap-x-8">
                <div class="relative flex col-span-12 dark:bg-gray-500 md:col-span-12 lg:col-span-9 min-h-96">
                    <article class="py-18 mx-auto space-y-16 text-gray-800 dark:bg-gray-800 dark:text-gray-50">
                        <div class="w-full mx-auto space-y-4">
                            <h2 class="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1 uppercase">{{ articleData.category }}
                            </h2>
    
                            <h1 class="text-5xl font-bold leadi">{{ articleData.title }}
                            </h1>
                            <div class="flex flex-wrap space-x-2 text-sm dark:text-gray-400">
                                <a v-for="tag in articleData.tags" :key="tag" rel="noopener noreferrer" href="#" class="p-1 hover:underline">#{{ tag }}</a>
                            </div>
                            <p class="text-sm dark:text-gray-400">by
                                <a href="#" target="_blank" rel="noopener noreferrer"
                                    class="hover:underline dark:text-violet-400">
                                    <span>{{ articleData.creator }}</span>
                                </a>&nbsp; on &nbsp;
                                <time :datetime="(new Date()).toUTCString()">{{ (new Date()).toUTCString() }}</time>
                            </p>
    
                            <img :src="`/src/assets/img/${articleData.img}`" class="block w-[80%] mx-auto aspect-square max-h-60" alt="">
                        </div>
    
                        <div class="container mx-auto px-4 dark:text-gray-100">
                            <div class="flex flex-wrap items-center mt-16">
                                <div class="w-full md:w-5/12 px-4 mr-auto ml-auto">
    
                                    <div v-for="p in articleData.content">
                                    <h3 class="text-3xl mb-2 font-semibold leading-normal">
                                        {{ p.heading }}
                                    </h3>
                                    <p class="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                                        {{ p.paragraph }}
                                    </p>
                                    </div>
                                </div>
    
                                <div
                                    class="w-full md:w-4/12 px-4 mx-auto relative flex flex-col min-w-0 break-words mb-2 shadow-lg rounded-lg bg-pink-500">
                                    <blockquote class="relative p-8 mb-4">
                                        <h4 class="text-xl font-bold text-white">
                                            {{ articleData.note.heading }}
                                        </h4>
    
                                        <p class="text-md font-light mt-2 text-white">
                                            {{ articleData.note.content }}
                                        </p>
                                    </blockquote>
                                </div>
                            </div>
                        </div>
    
                    </article>
                </div>
     
                <div class="py-2 col-span-12 md:col-span-10 xl:col-span-3 lg:col-span-4 lg:block">
                    <div class="mb-8 space-x-5 border-b-2 border-opacity-10 dark:border-violet-400">
                        <button type="button"
                            class="pb-5 text-xs font-bold uppercase border-b-2 dark:border-violet-400">About</button>
                        <button type="button"
                            class="pb-5 text-xs font-bold uppercase border-b-2 dark:border-transparent dark:text-gray-400">Projects</button>
                    </div>

                    <div class="flex flex-col divide-y divide-gray-700">

                        <div v-for="recentArticle in recentArticles" class="flex px-1 py-4">
                            <img alt="" class="flex-shrink-0 object-cover w-20 h-20 mr-4 dark:bg-gray-500"
                                :src="`/src/assets/img/${recentArticle.img}`">
                            <div class="flex flex-col flex-grow">
                                <a rel="noopener noreferrer" href="#" class="font-serif hover:underline">{{ recentArticle.title }}</a>
                                <p class="mt-auto text-xs dark:text-gray-400">5 minutes ago
                                    <a rel="noopener noreferrer" href="#"
                                        class="block dark:text-blue-400 lg:ml-2 lg:inline hover:underline">{{ recentArticle.category }}</a>
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
    
            </div>
    
        </section>
    
    </template>

    </Suspense>

</template>