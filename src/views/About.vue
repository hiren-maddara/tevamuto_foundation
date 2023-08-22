<script setup>
  import { computed, ref, watch} from 'vue'
import { useRouter, useRoute } from 'vue-router';
import Skeleton from '../components/Skeleton.vue';
import supabase from '@/data/supabase.js'
import Mission from "@/components/projects/Mission.vue"
const router = useRouter()

const aboutData = ref([])
const isLoading = ref(true)

async function loadData() {
  const { data, error } = await supabase.from('about').select().order('created_at', { ascending: false })
  if (error) alert(error)
  aboutData.value = data
  isLoading.value = false
}
await loadData()

// const renderabout = computed(() => aboutData.value.slice(5))
// watch(aboutData, () => console.log([...aboutData.value]))
// watch(renderabout, () => console.log(renderabout.value))


const months = ['Jan', "Feb", 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

watch(aboutData, console.log(aboutData.value))
</script>

<template>
    <section class="text-gray-600 body-font">
        <div class="container px-5 pb-24 pt-6 mx-auto">
            <div class="flex flex-col text-left lg:text-center w-full mb-10">
            <h2 class="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1 uppercase">about us</h2>
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Fueling Positive Change, One Step at a Time</h1>
            <p class="lg:w-2/3 lg:mx-auto leading-relaxed text-base">Our articles are a testament to our commitment to sharing meaningful insights. Join us in exploring ideas that ignite curiosity and foster growth.</p>
            </div>

            <div v-if="isLoadingData" class="flex flex-wrap">
              <Skeleton v-for="n in 8" :key="n" class="xl:w-1/4 lg:w-1/2 md:w-full" prefer="card" />
            </div>

            <div v-else class="flex flex-wrap">

                <div v-for="article in aboutData" :key="article.article_id" class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                    <article class="flex bg-white transition hover:shadow-xl">
                        <div class="rotate-180 p-2 [writing-mode:_vertical-lr]">
                            <time
                            :datetime="(new Date(article.created_at)).getUTCDate()"
                            class="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
                            >
                            <span>{{ (new Date(article.created_at)).getUTCDate() }}</span>
                            <span class="w-px flex-1 bg-gray-900/10"></span>
                            <span>{{ `${months[(new Date(article.created_at)).getMonth()]} ${(new Date(article.created_at)).getDate()}` }}</span>
                            </time>
                        </div>

                        <div class="hidden sm:block sm:basis-56">
                            <img
                            :alt="article.category"
                            :src="`../src/assets/img/${article.img}`"
                            class="aspect-square h-full w-full object-cover"
                            />
                        </div>

                        <div class="flex flex-1 flex-col justify-between">
                            <div class="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                            <a @click="router.push(`/article/${article.article_id}`)">
                                <h3 class="font-bold uppercase text-gray-900">
                                {{ article.title }}
                                </h3>
                            </a>

                            <p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
                                {{ article.summary }}
                            </p>
                            </div>

                            <div class="sm:flex sm:items-end sm:justify-end">
                            <a
                                @click="router.push(`/about/article/${article.article_id}`)"
                                class="block bg-indigo-400 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-indigo-500"
                            >
                                Read article
                            </a>
                            </div>
                        </div>
                    </article>
                </div>

            </div>
            <button class="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">More articles</button>
        </div>
    </section>

    <Mission />

    <section class="text-gray-700 px-5">
          <div
            class="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl"
          >
            <div>
              <h2
                class="text-xl font-bold tracki text-center sm:text-5xl dark:text-gray-50"
              >
                A brief history of the foundation
              </h2>
              <p
                class="max-w-3xl mx-auto mt-4 text-xl text-center dark:text-gray-400"
              >
              From humble beginnings to global impact, this is the inspiring journey of a foundation dedicated to shaping a brighter future for all
              </p>
            </div>
            <div class="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
              <div>
                <h3 class="text-2xl font-bold tracki sm:text-3xl dark:text-gray-50">
                 Founder
                </h3>
                
                <p class="mt-3 text-lg dark:text-gray-400">
                  The Foundation was started  by Wabalanda Wilson, the Headteacher of Kayenje Primary School. It started with the major aim of solving the problems faced by people in the community through acquiring help from the pioneers of change globally.
                </p>
                <div class="mt-12 space-y-12">
                  <div class="flex">
                    <div class="flex-shrink-0">
                      <div
                        class="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          class="w-7 h-7"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div class="ml-4">
                      <h4 class="text-lg font-medium leadi dark:text-gray-50">
                      
                        Inception and Vision
                      </h4>
                      <p class="mt-2 dark:text-gray-400">
                        The Foundation was born with vibrant passion emerging from a group of visionary minds determined to bring about positive change. Fuelled by a shared vision of a better world, the foundation's founder laid the cornerstone with a focus on education, community development, and social well-being.
                      </p>
                    </div>
                  </div>
                  <div class="flex">
                    <div class="flex-shrink-0">
                      <div
                        class="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          class="w-7 h-7"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div class="ml-4">
                      <h4 class="text-lg font-medium leadi dark:text-gray-50">
                        
                       Expanding Horizons
                      </h4>
                      <p class="mt-2 dark:text-gray-400">
                        The organization expects to broaden its scope to encompass wider societal issues. Scholarships, health clinics, and skill workshops continued to flourish, while new initiatives for environmental conservation and disaster relief were added to the foundation's palette.
                      </p>
                    </div>
                  </div>
                  <div class="flex">
                    <div class="flex-shrink-0">
                      <div
                        class="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          class="w-7 h-7"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div class="ml-4">
                      <h4 class="text-lg font-medium leadi dark:text-gray-50">
                        Enduring Legacy (Present)
                      </h4>
                      <p class="mt-2 dark:text-gray-400">
                        Today, the Foundation Heading stands as a testament to the power of determination. Its journey, from modest beginnings to global influence, underscores the significance of compassion, collaboration, and community-led endeavors
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div aria-hidden="true" class="mt-10 lg:mt-0">
                <img
                  src="https://source.unsplash.com/random/360x480"
                  alt=""
                  class="mx-auto rounded-lg shadow-lg dark:bg-gray-500"
                />
              </div>
            </div>
            <div>
              <div class="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                <div class="lg:col-start-2">
                  <h3 class="text-2xl font-bold tracki sm:text-3xl dark:text-gray-50">
                    Achievements
                  </h3>
                  <p class="mt-3 text-lg dark:text-gray-400">
                    The Tevamuto Foundation has worked hand in hand with different organisations aound the world and volunteers to build the community under various sectors.
                  </p>
                  <div class="mt-12 space-y-12">
                    <div class="flex">
                      <div class="flex-shrink-0">
                        <div
                          class="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            class="w-7 h-7">
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M5 13l4 4L19 7"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <div class="ml-4">
                        <h4 class="text-lg font-medium leadi dark:text-gray-50">
                          Patnerships
                        </h4>
                        <p class="mt-2 dark:text-gray-400">
                         We have worked with a number of Individuals and organisations to work on several projects aimed at benefiting and impacting the lives of the people in the community.
                        </p>
                      </div>
                    </div>
                    <div class="flex">
                      <div class="flex-shrink-0">
                        <div
                          class="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            class="w-7 h-7"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M5 13l4 4L19 7"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <div class="ml-4">
                        <h4 class="text-lg font-medium leadi dark:text-gray-50">
                          Projects
                        </h4>
                        <p class="mt-2 dark:text-gray-400">
                          
                          Currently, the foundation has registered a number of projects that it has worked on as described in the various sections of the wesbite.The projects are categories such as Health, Water and Sanitation, Environment, Science among others.                        </p>
                      </div>
                    </div>
                    <div class="flex">
                      <div class="flex-shrink-0">
                        <div
                          class="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            class="w-7 h-7"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M5 13l4 4L19 7"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <div class="ml-4">
                        <h4 class="text-lg font-medium leadi dark:text-gray-50">
                          Members
                        </h4>
                        <p class="mt-2 dark:text-gray-400">
                          The foundation consists of a group of its members who are dedicated to ensure that everything is accomplished.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
                  <img
                    src="https://source.unsplash.com/random/361x481"
                    alt=""
                    class="mx-auto rounded-lg shadow-lg dark:bg-gray-500"
                  />
                </div>
              </div>
            </div>
          </div>
      </section>


</template>