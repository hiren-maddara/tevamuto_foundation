<script setup>
</script>

<template>
    <!-- personal content -->
      <section class="text-gray-600 body-font px-5">
        <div class="flex flex-col text-left w-full">
            <h2 class="lg:mx-auto text-xs text-indigo-500 tracking-widest font-medium title-font mb-1 uppercase">A word from the CEO</h2>
            <h1 class=" lg:mx-auto sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">The community that has us</h1>
        </div>
        <div class="container px-5 py-18 lg:py-20 mx-auto flex flex-col">
          <div class="lg:w-4/6 mx-auto">
            <div class="rounded-lg h-64 overflow-hidden">
              <img alt="content" class="object-cover object-center h-full w-full" src="@/assets/img/img-3.jpg">
            </div>
            <div class="flex flex-col sm:flex-row mt-10">
              <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div class="w-20 h-20 overflow-hidden object-contain rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                  <!-- <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10" viewBox="0 0 24 24">
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                </svg>  -->
                <img src="@/assets/img/user.jpg" class="block w-full h-full " alt="">

                </div>
                <div class="flex flex-col items-center text-center justify-center">
                  <h2 class="font-medium title-font mt-4 text-gray-900 text-lg">Wabalanda Wilson</h2>
                  <div class="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                  <p class="text-base">I'm humbled by the remarkable transformation our community-based organization has achieved through our projects.</p>
                </div>
              </div>
              <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <p class="leading-relaxed text-lg mb-4">The transformation goes beyond the physical changes we see. It's in the smiles of pupils, village residents, farmers among others achieving their dreams, in the bustling energy of local markets, and in the voices of our youth confidently shaping their futures. These projects have become touchstones of inspiration, reminding us that when we come together with a shared purpose, we can surmount challenges and shape our own destiny.</p>
                <a class="text-indigo-500 inline-flex items-center">Learn More
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
</template>