<script setup>
const scrollToTop = () => window.scrollTo({
  top: 0,
  behavior: 'smooth',

})

</script>

<template>
    <footer class="text-gray-600 body-font relative">
      <div class="absolute end-4 top-4 sm:end-6 sm:top-6 lg:end-8 lg:top-8">
        <a
        class="inline-block rounded-full bg-indigo-500 p-2 text-white shadow transition hover:bg-indigo-600 sm:p-3 lg:p-4"
        @click="scrollToTop()">
        <span class="sr-only">Back to top</span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
            clip-rule="evenodd"
          />
        </svg>
      </a>
      </div>

      <div class="container lg:flex md:flex px-1 lg:px-5 py-12 pb-4 mx-auto">

        <div class="lg:w-1/4 flex-1 mb-4 mx-auto py-4 text-center sm:order-first md:w-1/2 w-full px-4">
          <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">SUBSCRIBE</h2>
          <div class="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
            <div class="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
              <input type="text" id="footer-field" placeholder="Email address" name="footer-field" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
            </div>
            <button class="mx-auto lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Button</button>
          </div>
          <p class="text-gray-500 text-sm mt-2 md:text-left text-center">Get regular updates from us
            <br class="lg:block hidden">Don't miss out on our services
          </p>
        </div>
        
        <div class="flex gap-4 flex-1 min-w-[65%] justify-center flex-wrap md:text-left text-center">

          <div class="w-2/5 lg:w-1/4 px-4">
            <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">QUICK LINKS</h2>
            <nav class="list-none mb-10">
              <li>
                <a class="text-gray-600 hover:text-gray-800">Contact us</a>
              </li>
              <li>
                <a class="text-gray-600 hover:text-gray-800">Blog</a>
              </li>
              <li>
                <a class="text-gray-600 hover:text-gray-800">The CEO</a>
              </li>
              <li>
                <a class="text-gray-600 hover:text-gray-800">Articles</a>
              </li>
            </nav>
          </div>

          <div class="w-2/5 lg:w-1/4 px-4">
            <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CONTACTS</h2>
            <nav class="list-none mb-10">
              <li>
                <a class="text-gray-600 hover:text-gray-800">+256708997997</a>
              </li>
              <li>
                <a class="text-gray-600 hover:text-gray-800">tevamuto@gmail.com</a>
              </li>
              <li>
                <a class="text-gray-600 hover:text-gray-800">IG: @tvmfoundation</a>
              </li>
              <li>
                <a class="text-gray-600 hover:text-gray-800">Twitter: @tvmF</a>
              </li>
            </nav>
          </div>

          <div class="w-2/5 lg:w-1/4 px-4">
            <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">TECHNICAL</h2>
            <nav class="list-none mb-10">
              <li>
                <a class="text-gray-600 hover:text-gray-800">Report Issue</a>
              </li>
              <li>
                <a class="text-gray-600 hover:text-gray-800">Help</a>
              </li>
              <li>
                <a class="text-gray-600 hover:text-gray-800">Contact Developer</a>
              </li>
            </nav>
          </div>


        </div>
    
      </div>

      <div class="bg-gray-100">
        <div class="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
          <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span class="ml-3 text-xl uppercase">tevamutto foundation</span>
          </a>
          <p class="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">© {{ (new Date()).getFullYear() }} Tevamuto —
            <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" class="text-gray-600 ml-1" target="_blank">@tevamuto</a>
          </p>
          <p class="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">Product of
            <a href="https://twitter.com/hiren" rel="noopener noreferrer" class="text-gray-600 ml-1" target="_blank">Hiren Maddara</a>
          </p>
          <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a class="text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a class="ml-3 text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a class="ml-3 text-gray-500">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a class="ml-3 text-gray-500">
              <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
</template>