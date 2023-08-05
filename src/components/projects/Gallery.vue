<script setup>
    import bgImg from '@/assets/img/img-2.jpg'
    import {useRouter} from 'vue-router'
    const router = useRouter()
</script>

<template>
    <!-- gallery -->
    
    <div class="max-w-screen-xl p-5 mx-auto bg-transparent text-gray-100 dark:bg-gray-800 dark:text-gray-100">
        <div class="flex flex-col text-left w-full mb-20">
            <h2 class="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1 uppercase">our projects</h2>
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">You can view and read about all our projects</h1>
        </div>
        <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 md:gap-0 lg:grid-rows-2">
            <div class="relative flex items-end justify-start w-full text-left bg-center bg-cover cursor-pointer h-96 md:col-span-2 lg:row-span-2 lg:h-full group dark:bg-gray-500" :style="{backgroundImage: `url(${bgImg})`}">
                <div @click="$router.push('projects/hgjfj')" class="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-tr from-neutral-950 to-transparent dark:via-transparent dark:from-gray-900 dark:to-gray-900">
                </div>
                <div class="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
                    <a rel="noopener noreferrer"
                        class="px-3 py-2 text-xs font-semibold tracki uppercase hover:underline dark:text-gray-100 bg-violet-400 dark:bg-violet-400">Art</a>
                    <div class="flex flex-col justify-start text-center dark:text-gray-100">
                        <span class="text-3xl font-semibold leadi tracki">31</span>
                        <span class="leading-4 uppercase">Jul</span>
                    </div>
                </div>
                 <h2 class="z-10 p-5">
                    <a rel="noopener noreferrer" href="#"
                        class="font-medium text-md group-hover:underline lg:text-2xl lg:font-semibold dark:text-gray-100">Fuga
                        ea ullam earum assumenda, beatae labore eligendi.</a>
                </h2>
            </div>
            <div class="relative flex items-end justify-start w-full text-left bg-center bg-cover cursor-pointer h-96 group dark:bg-gray-500"
                :style="{ backgroundImage: `url(${bgImg})` }">
                <div @click="router.push('/projects/jhfg')"
                    class="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-tr from-neutral-950 to-transparent dark:via-transparent dark:from-gray-900 dark:to-gray-900">
                </div>
                <div class="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
                    <a rel="noopener noreferrer" href="#"
                        class="px-3 py-2 text-xs font-semibold tracki uppercase hover:underline bg-gray-800 dark:text-gray-100 dark:bg-violet-400">Politics</a>
                    <div class="flex flex-col justify-start text-center dark:text-gray-100">
                        <span class="text-3xl font-semibold leadi tracki">04</span>
                        <span class="leadi uppercase">Aug</span>
                    </div>
                </div>
                <h2 class="z-10 p-5">
                    <a rel="noopener noreferrer" href="#"
                        class="font-medium text-md group-hover:underline dark:text-gray-100"> Autem sunt tempora mollitia
                        magnam non voluptates</a>
                </h2>
            </div>
            <div class="relative flex items-end justify-start w-full text-left bg-center bg-cover cursor-pointer h-96 group dark:bg-gray-500"
                :style="{ backgroundImage: `url(${bgImg})` }">
                <div @click="router.push('/projects/jhfg')"
                    class="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-tr from-neutral-950 to-transparent dark:via-transparent dark:from-gray-900 dark:to-gray-900">
                </div>
                <div class="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
                    <a rel="noopener noreferrer" href="#"
                        class="px-3 py-2 text-xs font-semibold tracki uppercase hover:underline bg-red-600 dark:text-gray-100 dark:bg-violet-400">Health</a>
                    <div class="flex flex-col justify-start text-center dark:text-gray-100">
                        <span class="text-3xl font-semibold leadi tracki">01</span>
                        <span class="leadi uppercase">Aug</span>
                    </div>
                </div>
                <h2 class="z-10 p-5">
                    <a rel="noopener noreferrer" href="#"
                        class="font-medium text-md group-hover:underline dark:text-gray-100">Inventore reiciendis aliquam
                        excepturi</a>
                </h2>
            </div>
            <div class="relative flex items-end justify-start w-full text-left bg-center bg-cover cursor-pointer h-96 group dark:bg-gray-500"
                    :style="{ backgroundImage: `url(${bgImg})` }">
                    <div @click="router.push('/projects/jhfg')"
                        class="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-tr from-neutral-950 to-transparent dark:via-transparent dark:from-gray-900 dark:to-gray-900">
                    </div>
                    <div class="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
                        <a rel="noopener noreferrer" href="#"
                            class="px-3 py-2 text-xs font-semibold tracki uppercase hover:underline bg-teal-800 dark:text-gray-100 dark:bg-violet-400">Science</a>
                        <div class="flex flex-col justify-start text-center dark:text-gray-100">
                            <span class="text-3xl font-semibold leadi tracki">28</span>
                            <span class="leadi uppercase">Jul</span>
                        </div>
                </div>
                <h2 class="z-10 p-5">
                    <a rel="noopener noreferrer" href="#"
                        class="font-medium text-md group-hover:underline dark:text-gray-100">Officiis mollitia dignissimos
                        commodi optio vero animi</a>
                </h2>
            </div>
            <div class="relative flex items-end justify-start w-full text-left bg-center bg-cover cursor-pointer h-96 group dark:bg-gray-500"
                :style="{ backgroundImage: `url(${bgImg})` }">
                <div @click="router.push('/projects/jhfg')"
                    class="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-tr from-neutral-950 to-transparent dark:via-transparent dark:from-gray-900 dark:to-gray-900">
                </div>
                <div class="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
                    <a rel="noopener noreferrer" href="#"
                        class="px-3 py-2 text-xs font-semibold tracki uppercase hover:underline bg-indigo-600 dark:text-gray-100 dark:bg-violet-400">Sports</a>
                    <div class="flex flex-col justify-start text-center dark:text-gray-100">
                        <span class="text-3xl font-semibold leadi tracki">19</span>
                        <span class="leadi uppercase">Jul</span>
                    </div>
                </div>
                <h2 class="z-10 p-5">
                    <a rel="noopener noreferrer" href="#"
                        class="font-medium text-md group-hover:underline dark:text-gray-100">Doloribus sit illo
                        necessitatibus architecto exercitationem enim</a>
                </h2>
            </div>
        </div>
    </div>
</template>