<script setup>
  import {ref, watch, computed} from 'vue'
  import { useRouter } from 'vue-router'
  import Skeleton from '../Skeleton.vue'
  import supabase from "@/data/supabase.js"

  const router = useRouter()

  const projectsData = ref([])
  const isLoading = ref(true)

  async function loadData(){
    const {data, error} = await supabase.from('projects').select().order('created_at', { ascending: false })
    if(error) alert(error)
    projectsData.value = data
    isLoading.value = false
  }
  await loadData()

  const renderProjects = computed(() => projectsData.value.slice(5))

  // watch(projectsData, () => console.log([...projectsData.value]))
  // watch(renderProjects, () => console.log(renderProjects.value))
  

</script>

<template>
    <section class="container px-5 py-24 mx-auto text-gray-800">
          <div class="flex flex-wrap w-full mb-20">
            <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Explore our projects</h1>
              <div class="h-1 w-20 bg-indigo-500 rounded"></div>
            </div>
            <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">Our projects invite you to become a part of their story. Embark on an exploration that promises inspiration and insight.</p>
          </div>

          <div v-if="isLoading" class="flex flex-wrap -m-4">
            <div v-for="n in 4" class="xl:w-1/4 md:w-1/2 p-4">
              <Skeleton prefer="card" />
            </div>
          </div>
          <div v-else class="flex flex-wrap -m-4">

            <div v-for="project in renderProjects" :key="project.article_id" class="xl:w-1/4 md:w-1/2 p-4">
              <div class="bg-gray-100 p-6 rounded-lg">
                <img class="h-56 rounded w-full object-cover object-center mb-6" src="https://fqlchsjtnuyloculwgdg.supabase.co/storage/v1/object/sign/projects/img-1.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwcm9qZWN0cy9pbWctMS5qcGciLCJpYXQiOjE2OTIxODg1NTYsImV4cCI6MjAwNzU0ODU1Nn0.S4WlKAK6u_cIu5xO6pnzWgyZzvewzQmpUphwDiqZID0" alt="content">
                <!-- <img class="h-56 rounded w-full object-cover object-center mb-6" :src="`/src/assets/img/${project.img}`" alt="content"> -->
                <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font uppercase">{{ project.category }}</h3>
                <h2 class="text-lg text-gray-900 font-medium title-font mb-4">{{project.main_tag}}</h2>
                <p class="leading-relaxed text-base">{{project.summary}}</p>
                <a @click="router.push(`/project/article/${project.article_id}`)" class="cursor-pointer text-indigo-500 inline-flex items-center transition-all duration-1000 hover:gap-1">Learn More
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>


          </div>
          <button @click="router.push('/projects')" class="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Check out all our projects</button>
      
    </section>
</template>