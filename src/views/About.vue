<script setup>
  import { computed, ref } from 'vue'
import { useRouter, useRoute } from 'vue-router';
import Skeleton from '../components/Skeleton.vue';

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
                Quando cetero his ne, eum admodum sapientem ut.
              </p>
            </div>
            <div class="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
              <div>
                <h3 class="text-2xl font-bold tracki sm:text-3xl dark:text-gray-50">
                  Ad vix debet docendi
                </h3>
                
                <p class="mt-3 text-lg dark:text-gray-400">
                  Ne dicta praesent ocurreret has, diam theophrastus at pro. Eos etiam
                  regione ut, persius eripuit quo id. Sit te euismod tacimates.
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
                        Per ei quaeque sensibus
                      </h4>
                      <p class="mt-2 dark:text-gray-400">
                        Ex usu illum iudico molestie. Pro ne agam facete
                        mediocritatem, ridens labore facete mea ei. Pro id apeirian
                        dignissim.
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
                        Cu imperdiet posidonium sed
                      </h4>
                      <p class="mt-2 dark:text-gray-400">
                        Amet utinam aliquando ut mea, malis admodum ocurreret nec et,
                        elit tibique cu nec. Nec ex maluisset inciderint, ex quis.
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
                        Nulla omittam sadipscing mel ne
                      </h4>
                      <p class="mt-2 dark:text-gray-400">
                        At sed possim oporteat probatus, justo graece ne nec, minim
                        commodo legimus ut vix. Ut eos iudico quando soleat, nam
                        modus.
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
                    Eam nibh gloriatur ex
                  </h3>
                  <p class="mt-3 text-lg dark:text-gray-400">
                    Per odio fabellas consulatu cu. Utroque detracto mel ea, quo te
                    latine theophrastus. Ea his tale nibh dissentias, mei exerci
                    tamquam euripidis cu.
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
                          Cibo augue offendit has ad
                        </h4>
                        <p class="mt-2 dark:text-gray-400">
                          An per velit appellantur, ut utinam minimum nominavi sit,
                          odio nostro habemus ne nec. Ne sonet regione contentiones
                          est.
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
                          At eum ferri luptatum lobortis
                        </h4>
                        <p class="mt-2 dark:text-gray-400">
                          Te per quidam maiorum ocurreret, etiam delicatissimi usu ad.
                          Ne has quod periculis. Te sit primis iisque efficiantur.
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
                          Dicunt verterem evertitur eu sea
                        </h4>
                        <p class="mt-2 dark:text-gray-400">
                          Audire principes rationibus eam an, autem nominavi luptatum
                          per te. Sumo fabulas vim eu, sonet saperet eleifend ut vix.
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