<script setup>
import { ref } from 'vue';
import Tst from './Tst.vue'
import Skeleton from './Skeleton.vue'

</script>

<template>
    <Suspense>
    <template #fallback>
        <section class="px-5 py-10 text-gray-800 dark:bg-gray-800 dark:text-gray-100">
            <Skeleton preferCard="true" h="10rem" w="10rem" br="5px"/>
        </section>
    </template>
    <template #default>
    <section class="px-5 py-10 text-gray-800 dark:bg-gray-800 dark:text-gray-100">
         <Skeleton />
        <div class="container grid grid-cols-12 mx-auto gap-y-6  gap-x-8">
            <div class="relative flex col-span-12 dark:bg-gray-500 lg:col-span-9 min-h-96"
                style="background-image: url('@/assets/img/img-2.jpg');">
                <article class="py-18 mx-auto space-y-16 text-gray-800 dark:bg-gray-800 dark:text-gray-50">
                    <div class="w-full mx-auto space-y-4">
                        <h2 class="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1 uppercase">Health
                        </h2>

                        <h1 class="text-5xl font-bold leadi">Interdum et malesuada fames ac ante ipsum primis in faucibus?
                        </h1>
                        <div class="flex flex-wrap space-x-2 text-sm dark:text-gray-400">
                            <a rel="noopener noreferrer" href="#" class="p-1 hover:underline">#MambaUI</a>
                            <a rel="noopener noreferrer" href="#" class="p-1 hover:underline">#TailwindCSS</a>
                            <a rel="noopener noreferrer" href="#" class="p-1 hover:underline">#Angular</a>
                        </div>
                        <p class="text-sm dark:text-gray-400">by
                            <a href="#" target="_blank" rel="noopener noreferrer"
                                class="hover:underline dark:text-violet-400">
                                <span>Leroy Jenkins</span>
                            </a>on
                            <time datetime="2021-02-12 15:34:18-0200">Feb 12th 2021</time>
                        </p>

                        <img src="@/assets/img/img-3.jpg" class="block w-[80%] mx-auto aspect-square max-h-60" alt="">
                    </div>

                    <div class="container mx-auto px-4 dark:text-gray-100">
                        <div class="flex flex-wrap items-center mt-16">
                            <div class="w-full md:w-5/12 px-4 mr-auto ml-auto">

                                <h3 class="text-3xl mb-2 font-semibold leading-normal">
                                    Working with us is a pleasure
                                </h3>
                                <p class="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                                    Don't let your uses guess by attaching tooltips and popoves to
                                    any element. Just make sure you enable them first via
                                    JavaScript.
                                </p>
                                <p class="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-600">
                                    The kit comes with three pre-built pages to help you get started
                                    faster. You can change the text and images and you're good to
                                    go. Just make sure you enable them first via JavaScript.
                                </p>
                            </div>

                            <div
                                class="w-full md:w-4/12 px-4 mx-auto relative flex flex-col min-w-0 break-words mb-2 shadow-lg rounded-lg bg-pink-500">
                                <blockquote class="relative p-8 mb-4">
                                    <h4 class="text-xl font-bold text-white">
                                        Top Notch Services
                                    </h4>

                                    <p class="text-md font-light mt-2 text-white">
                                        The Arctic Ocean freezes every winter and much of the
                                        sea-ice then thaws every summer, and that process will
                                        continue whatever happens.
                                    </p>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </article>
            </div>

            <div class="py-2 col-span-12 xl:col-span-3 lg:col-span-4 lg:block">
                <div class="mb-8 space-x-5 border-b-2 border-opacity-10 dark:border-violet-400">
                    <button type="button"
                        class="pb-5 text-xs font-bold uppercase border-b-2 dark:border-violet-400">Latest</button>
                    <button type="button"
                        class="pb-5 text-xs font-bold uppercase border-b-2 dark:border-transparent dark:text-gray-400">Popular</button>
                </div>
                <div class="flex flex-col divide-y divide-gray-700">
                    <div class="flex px-1 py-4">
                        <img alt="" class="flex-shrink-0 object-cover w-20 h-20 mr-4 dark:bg-gray-500"
                            src="@/assets/img/img-2.jpg">
                        <div class="flex flex-col flex-grow">
                            <a rel="noopener noreferrer" href="#" class="font-serif hover:underline">Aenean ac tristique
                                lorem, ut mollis dui.</a>
                            <p class="mt-auto text-xs dark:text-gray-400">5 minutes ago
                                <a rel="noopener noreferrer" href="#"
                                    class="block dark:text-blue-400 lg:ml-2 lg:inline hover:underline">Politics</a>
                            </p>
                        </div>
                    </div>
                    <div class="flex px-1 py-4">
                        <img alt="" class="flex-shrink-0 object-cover w-20 h-20 mr-4 dark:bg-gray-500"
                            src="@/assets/img/img-2.jpg">
                        <div class="flex flex-col flex-grow">
                            <a rel="noopener noreferrer" href="#" class="font-serif hover:underline">Nulla consectetur
                                efficitur.</a>
                            <p class="mt-auto text-xs dark:text-gray-400">14 minutes ago
                                <a rel="noopener noreferrer" href="#"
                                    class="block dark:text-blue-400 lg:ml-2 lg:inline hover:underline">Sports</a>
                            </p>
                        </div>
                    </div>
                    <div class="flex px-1 py-4">
                        <img alt="" class="flex-shrink-0 object-cover w-20 h-20 mr-4 dark:bg-gray-500"
                            src="@/assets/img/img-2.jpg">
                        <div class="flex flex-col flex-grow">
                            <a rel="noopener noreferrer" href="#" class="font-serif hover:underline">Vitae semper augue
                                purus tincidunt libero.</a>
                            <p class="mt-auto text-xs dark:text-gray-400">22 minutes ago
                                <a rel="noopener noreferrer" href="#"
                                    class="block dark:text-blue-400 lg:ml-2 lg:inline hover:underline">World</a>
                            </p>
                        </div>
                    </div>
                <div class="flex px-1 py-4">
                    <img alt="" class="flex-shrink-0 object-cover w-20 h-20 mr-4 dark:bg-gray-500"
                        src="@/assets/img/img-2.jpg">
                    <div class="flex flex-col flex-grow">
                        <a rel="noopener noreferrer" href="#" class="font-serif hover:underline">Suspendisse
                            potenti.</a>
                        <p class="mt-auto text-xs dark:text-gray-400">37 minutes ago
                            <a rel="noopener noreferrer" href="#"
                                class="block dark:text-blue-400 lg:ml-2 lg:inline hover:underline">Business</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>

        </div>
        <Tst />
    </section>

    
    </template>

    </Suspense>
</template>