<script setup>
import { defineAsyncComponent, ref } from 'vue';
import Skeleton from '../Skeleton.vue';

const reviews = ref(null)
const openReviewsModal = ref(false)
const loadData = async () => {
  reviews.value = await (await import('../../data/reviews.json')).default
}

await loadData()
</script>

<template>
    <section class="px-10 py-4">
      <div class="flex flex-col text-left lg:text-center w-full mb-10">
        <h2 class="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1 uppercase">what people say</h2>
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">This is what people say about us</h1>
        </div>
      <div class="mx-auto max-w-screen-xl">
          <Suspense>
            <template #fallback>
              <div class="max-h-96 gap-2 overflow-auto lg:overflow-y-hidden [column-fill:_balance] lg:columns-3 lg:gap-8">
                <div v-for="n in 10" class="mb-8 break-inside-avoid lg">
                  <Skeleton prefer="card" />
                </div>
              </div>
            </template>

            <template #default>        
              <div class="max-h-96 gap-2 overflow-auto lg:overflow-y-hidden [column-fill:_balance] lg:columns-3 lg:gap-8">
                
                <div v-for="review in reviews" class="mb-8 break-inside-avoid lg">
                  <blockquote class="rounded-xl lg:mx-auto bg-gray-50 p-6 shadow">
                    <p class="leading-relaxed text-gray-700">
                      {{ review.review }}  
                    </p>
                  </blockquote>

                  <div class="mt-4 flex items-center text-gray-600 gap-4">
                    <img
                      :alt="`Image of the reviewer: ${review.name}`"
                      src="@/assets/img/user.jpg"
                      class="h-12 w-12 rounded-full object-cover"
                    />

                    <div class="text-sm">
                      <p class="font-medium">{{ review.name }}</p>
                      <p class="mt-1">{{ review.info }}</p>
                    </div>
                  </div>
                </div>

                <!--
                <div class="mb-8 sm:break-inside-avoid">
                  <blockquote class="rounded-xl bg-gray-50 p-6 shadow">
                    <p class="leading-relaxed text-gray-700">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore vel
                      quo deserunt quos expedita minima incidunt sed tempora, a architecto
                      consectetur reprehenderit, in repellat voluptatum.
                    </p>
                  </blockquote>

                  <div class="mt-4 flex items-center text-gray-600 gap-4">
                    <img
                      alt="Woman"
                      src="@/assets/img/user.jpg"
                      class="h-12 w-12 rounded-full object-cover"
                    />

                    <div class="text-sm">
                      <p class="font-medium">Gladis Lennon</p>
                      <p class="mt-1">Head of SEO</p>
                    </div>
                  </div>
                </div>

                <div class="mb-8 sm:break-inside-avoid">
                  <blockquote class="rounded-xl bg-gray-50 p-6 shadow">
                    <p class="leading-relaxed text-gray-700">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                      beatae incidunt perferendis soluta facilis voluptas dicta
                      repudiandae quasi asperiores libero, exercitationem molestiae autem
                      sapiente dolore nulla non consequatur. Eaque, dolores.
                    </p>
                  </blockquote>

                  <div class="mt-4 flex items-center text-gray-600 gap-4">
                    <img
                      alt="Woman"
                      src="@/assets/img/user.jpg"
                      class="h-12 w-12 rounded-full object-cover"
                    />

                    <div class="text-sm">
                      <p class="font-medium">Gladis Lennon</p>
                      <p class="mt-1">Head of SEO</p>
                    </div>
                  </div>
                </div>

                <div class="mb-8 sm:break-inside-avoid">
                  <blockquote class="rounded-xl bg-gray-50 p-6 shadow">
                    <p class="leading-relaxed text-gray-700">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                      doloribus eius aut unde, dolores accusantium!
                    </p>
                  </blockquote>

                  <div class="mt-4 flex items-center text-gray-600 gap-4">
                    <img
                      alt="Woman"
                      src="@/assets/img/user.jpg"
                      class="h-12 w-12 rounded-full object-cover"
                    />

                    <div class="text-sm">
                      <p class="font-medium">Gladis Lennon</p>
                      <p class="mt-1">Head of SEO</p>
                    </div>
                  </div>
                </div>

                <div class="mb-8 sm:break-inside-avoid">
                  <blockquote class="rounded-xl bg-gray-50 p-6 shadow">
                    <p class="leading-relaxed text-gray-700">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi a
                      voluptatum quidem nulla quisquam natus velit provident earum esse,
                      odio numquam labore recusandae similique sunt.
                    </p>
                  </blockquote>

                  <div class="mt-4 flex items-center text-gray-600 gap-4">
                    <img
                      alt="Woman"
                      src="@/assets/img/user.jpg"
                      class="h-12 w-12 rounded-full object-cover"
                    />

                    <div class="text-sm">
                      <p class="font-medium">Gladis Lennon</p>
                      <p class="mt-1">Head of SEO</p>
                    </div>
                  </div>
                </div>

                <div class="mb-8 sm:break-inside-avoid">
                  <blockquote class="rounded-xl bg-gray-50 p-6 shadow">
                    <p class="leading-relaxed text-gray-700">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius ut
                      necessitatibus, repudiandae qui dolor minima.
                    </p>
                  </blockquote>

                  <div class="mt-4 flex items-center text-gray-600 gap-4">
                    <img
                      alt="Woman"
                      src="@/assets/img/user.jpg"
                      class="h-12 w-12 rounded-full object-cover"
                    />

                    <div class="text-sm">
                      <p class="font-medium">Gladis Lennon</p>
                      <p class="mt-1">Head of SEO</p>
                    </div>
                  </div>
                </div>

              -->
              </div>
            </template>
          

          </Suspense>
        </div>
        <button class="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Add your review</button>
      </section>
</template>