<script setup>
    import {computed, ref} from 'vue'
    import {useRouter} from 'vue-router'
    import supabase from '@/data/supabase.js'
    
    const router = useRouter()
    const projectsData = ref([])
    const {data, error} = await supabase.from('projects').select().order('created_at', { ascending: false })
    
    if (error) console.log(error)
    if(data) projectsData.value = data

    const latestProject = computed(() => projectsData.value[0])
    const topProjects = computed(() => projectsData.value.slice(1, 5))

    const months = ['Jan', "Feb", "Mar", 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    const getCategoryBg = cat => {
        if(cat.toLowerCase() == 'health') return 'bg-red-600'
        if(cat.toLowerCase() == 'art') return 'bg-violet-600'
        if(cat.toLowerCase() == 'education') return 'bg-violet-400'
        if(cat.toLowerCase() == 'science') return 'bg-indigo-500'
        if(cat.toLowerCase() == 'environment') return 'bg-teal-600'
        return 'bg-gray-800'
    }

</script>

<template>
    <!-- gallery -->
    
    <div class="max-w-screen-xl mb-6 p-5 mx-auto bg-transparent text-gray-100 dark:bg-gray-800 dark:text-gray-100">
        <div class="flex flex-col text-left w-full mb-20">
            <h2 class="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1 uppercase">our projects</h2>
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">You can view and read about all our projects</h1>
        </div>
        <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 md:gap-0 lg:grid-rows-2">
            <div class="relative flex items-end justify-start w-full text-left bg-center bg-cover cursor-pointer h-96 md:col-span-2 lg:row-span-2 lg:h-full group dark:bg-gray-500" :style="{backgroundImage: `url(${latestProject.img})`}">
                <div @click="router.push(`/project/article/${latestProject.article_id}`)" class="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-tr from-neutral-950 to-transparent dark:via-transparent dark:from-gray-900 dark:to-gray-900">
                </div>
                <div class="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
                    <a rel="noopener noreferrer" @click.prevent=""
                        class="px-3 py-2 text-xs font-semibold tracki uppercase hover:underline dark:text-gray-100 bg-violet-400 dark:bg-violet-400">{{ latestProject.category }}</a>
                    <div class="flex flex-col justify-start text-center dark:text-gray-100">
                        <span class="text-3xl font-semibold leadi tracki">{{ (new Date(latestProject.created_at)).getDate() }}</span>
                        <span class="leading-4 uppercase">{{ months[(new Date(latestProject.created_at)).getMonth()] }}</span>
                    </div>
                </div>
                 <h2 class="z-10 p-5">
                    <a rel="noopener noreferrer" @click.prevent=""
                        class="font-medium text-md group-hover:underline lg:text-2xl lg:font-semibold dark:text-gray-100">{{ latestProject.title }}</a>
                </h2>
            </div>



            <div v-for="(n, index) in topProjects" class="relative flex items-end justify-start w-full text-left bg-center bg-cover cursor-pointer h-96 group dark:bg-gray-500"
                :style="{ backgroundImage: `url(${n.img})` }">
                <div @click="router.push(`/project/article/${n.article_id}`)"
                    class="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-tr from-neutral-950 to-transparent dark:via-transparent dark:from-gray-900 dark:to-gray-900">
                </div>
                <div class="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
                    <a rel="noopener noreferrer" @click.prevent=""
                        class="px-3 py-2 text-xs font-semibold tracki uppercase hover:underline text-gray-100" :class="getCategoryBg(n.category)">{{n.category}}</a>
                    <div class="flex flex-col justify-start text-center dark:text-gray-100">
                        <span class="text-3xl font-semibold leadi tracki">{{ (new Date(n.created_at)).getDate() }}</span>
                        <span class="leadi uppercase">{{ months[(new Date(n.created_at)).getMonth()] }}</span>
                    </div>
                </div>
                <h2 class="z-10 p-5">
                    <a rel="noopener noreferrer" @click.prevent=""
                        class="font-medium text-md group-hover:underline dark:text-gray-100">{{ n.title }}</a>
                </h2>
            </div>
        </div>
    </div>
</template>
