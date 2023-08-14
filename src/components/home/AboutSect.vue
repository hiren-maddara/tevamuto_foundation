<script setup>
import { computed, ref } from "vue";
import { useRouter } from "vue-router";
import Skeleton from "../Skeleton.vue";
import supabase from '@/data/supabase'

const router = useRouter();

const aboutData = ref([]);
const isLoadingData = ref(true);

const loadAboutData = async () => {
  // aboutData.value = (await import("@/data/about.json")).default;
  const {data, error} = await supabase.from('about').select().order('created_at', { ascending: false })
  if(error) alert(error)
  aboutData.value = data
  isLoadingData.value = false;
};

const formatWord = (w) => w.replace(w[0], w[0].toUpperCase());

loadAboutData();

const renderAboutData = computed(() => {
  return aboutData.value.slice(0, 4);
});
</script>

<template>
  <section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-col text-left lg:text-center w-full mb-10">
        <h2
          class="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1 uppercase"
        >
        About Us
        </h2>
        <h1
          class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900"
        >
          Community Building and Transformation
        </h1>
        <p class="lg:w-2/3 lg:mx-auto leading-relaxed text-base">
          Through community events, workshops, and cultural celebrations, the organization fosters a sense of belonging and togetherness. By facilitating interactions among diverse groups, CommunityCare Alliance nurtures an environment where people can learn from one another and celebrate their differences.
        </p>
      </div>

      <div v-if="isLoadingData" class="flex flex-wrap">
        <div
          v-for="n in 4"
          class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60"
        >
          <Skeleton prefer="card" h="auto" w="auto" />
        </div>
      </div>

      <div v-else class="flex flex-wrap">
        <div
          v-for="item in renderAboutData"
          :key="item.article_id"
          class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60"
        >
          <h2
            class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2"
          >
            {{ formatWord(item.category) }}
          </h2>
          <p class="leading-relaxed text-base mb-4">{{ item.summary }}</p>
          <a
            @click="router.push(`about/article/${item.article_id}`)"
            class="text-indigo-500 inline-flex items-center transition-all hover:gap-2"
            >Learn More
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-4 h-4 ml-2 transition-transform delay-500"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>

      </div>
      <button @click="router.push('/about')"
        class="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        Read all about us
      </button>
    </div>
  </section>
</template>

<style scoped></style>
