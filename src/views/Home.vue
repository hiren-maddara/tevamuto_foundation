<script setup>
import Hero from '@/components/home/Hero.vue'
import About from '@/components/home/AboutSect.vue'
import Projects from '@/components/home/ProjectsSect.vue'
import Contact from '@/components/home/Contact.vue'
import Reviews from '@/components/home/Reviews.vue'

const just = `

  <!-- blog/about -->
  <section class="pt-20 lg:pt-[120px] pb-10 lg:pb-20">
     <div class="container">
        <div class="flex flex-wrap justify-center -mx-4">
           <div class="w-full px-4">
              <div class="text-center mx-auto mb-[60px] lg:mb-20 max-w-[510px]">
                 <span class="font-semibold text-lg text-primary mb-2 block">
                 Our Blogs
                 </span>
                 <h2
                    class="
                  font-bold
                  text-3xl
                  sm:text-4xl
                  md:text-[40px]
                  text-dark
                  mb-4
                  "
                    >
                    Our Recent News
                 </h2>
                 <p class="text-base text-body-color">
                    There are many variations of passages of Lorem Ipsum available
                    but the majority have suffered alteration in some form.
                 </p>
              </div>
           </div>
        </div>
        <div class="flex flex-wrap -mx-4">
           <div class="w-full md:w-1/2 lg:w-1/3 px-4">
              <div class="max-w-[370px] mx-auto mb-10">
                 <div class="rounded overflow-hidden mb-8">
                    <img
                       src="https://cdn.tailgrids.com/1.0/assets/images/blogs/blog-01/image-01.jpg"
                       alt="image"
                       class="w-full"
                       />
                 </div>
                 <div>
                    <span
                       class="
                     bg-primary
                     rounded
                     inline-block
                     text-center
                     py-1
                     px-4
                     text-xs
                     leading-loose
                     font-semibold
                     text-white
                     mb-5
                     "
                       >
                    Dec 22, 2023
                    </span>
                    <h3>
                       <a
                          href="javascript:void(0)"
                          class="
                        font-semibold
                        text-xl
                        sm:text-2xl
                        lg:text-xl
                        xl:text-2xl
                        mb-4
                        inline-block
                        text-dark
                        hover:text-primary
                        "
                          >
                       Meet AutoManage, the best AI management tools
                       </a>
                    </h3>
                    <p class="text-base text-body-color">
                       Lorem Ipsum is simply dummy text of the printing and
                       typesetting industry.
                    </p>
                 </div>
              </div>
           </div>
           <div class="w-full md:w-1/2 lg:w-1/3 px-4">
              <div class="max-w-[370px] mx-auto mb-10">
                 <div class="rounded overflow-hidden mb-8">
                    <img
                       src="https://cdn.tailgrids.com/1.0/assets/images/blogs/blog-01/image-02.jpg"
                       alt="image"
                       class="w-full"
                       />
                 </div>
                 <div>
                    <span
                       class="
                     bg-primary
                     rounded
                     inline-block
                     text-center
                     py-1
                     px-4
                     text-xs
                     leading-loose
                     font-semibold
                     text-white
                     mb-5
                     "
                       >
                    Mar 15, 2023
                    </span>
                    <h3>
                       <a
                          href="javascript:void(0)"
                          class="
                        font-semibold
                        text-xl
                        sm:text-2xl
                        lg:text-xl
                        xl:text-2xl
                        mb-4
                        inline-block
                        text-dark
                        hover:text-primary
                        "
                          >
                       How to earn more money as a wellness coach
                       </a>
                    </h3>
                    <p class="text-base text-body-color">
                       Lorem Ipsum is simply dummy text of the printing and
                       typesetting industry.
                    </p>
                 </div>
              </div>
           </div>
           <div class="w-full md:w-1/2 lg:w-1/3 px-4">
              <div class="max-w-[370px] mx-auto mb-10">
                 <div class="rounded overflow-hidden mb-8">
                    <img
                       src="https://cdn.tailgrids.com/1.0/assets/images/blogs/blog-01/image-03.jpg"
                       alt="image"
                       class="w-full"
                       />
                 </div>
                 <div>
                    <span
                       class="
                     bg-primary
                     rounded
                     inline-block
                     text-center
                     py-1
                     px-4
                     text-xs
                     leading-loose
                     font-semibold
                     text-white
                     mb-5
                     "
                       >
                    Jan 05, 2023
                    </span>
                    <h3>
                       <a
                          href="javascript:void(0)"
                          class="
                        font-semibold
                        text-xl
                        sm:text-2xl
                        lg:text-xl
                        xl:text-2xl
                        mb-4
                        inline-block
                        text-dark
                        hover:text-primary
                        "
                          >
                       The no-fuss guide to upselling and cross selling
                       </a>
                    </h3>
                    <p class="text-base text-body-color">
                       Lorem Ipsum is simply dummy text of the printing and
                       typesetting industry.
                    </p>
                 </div>
              </div>
           </div>
        </div>
     </div>
  </section>


  <!-- sect 3 -->
  <section class="dark:bg-gray-800 dark:text-gray-100">
      <div
        class="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl"
      >
        <div>
          <h2
            class="text-3xl font-bold tracki text-center sm:text-5xl dark:text-gray-50"
          >
            Aliquip definiebas ad est
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

  <!-- sect 4 -->
  

  
  <!-- blog card -->
  <article class="flex bg-white transition hover:shadow-xl">
  <div class="rotate-180 p-2 [writing-mode:_vertical-lr]">
    <time
      datetime="2022-10-10"
      class="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
    >
      <span>2022</span>
      <span class="w-px flex-1 bg-gray-900/10"></span>
      <span>Oct 10</span>
    </time>
  </div>

  <div class="hidden sm:block sm:basis-56">
    <img
      alt="Guitar"
      src="https://images.unsplash.com/photo-1609557927087-f9cf8e88de18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
      class="aspect-square h-full w-full object-cover"
    />
  </div>

  <div class="flex flex-1 flex-col justify-between">
    <div class="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
      <a href="#">
        <h3 class="font-bold uppercase text-gray-900">
          Finding the right guitar for your style - 5 tips
        </h3>
      </a>

      <p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
        dolores, possimus pariatur animi temporibus nesciunt praesentium dolore
        sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta,
        voluptates neque explicabo tempora nisi culpa eius atque dignissimos.
        Molestias explicabo corporis voluptatem?
      </p>
    </div>

    <div class="sm:flex sm:items-end sm:justify-end">
      <a
        href="#"
        class="block bg-yellow-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400"
      >
        Read Blog
      </a>
    </div>
  </div>
  </article>

  <!-- feature comp -->
  <section class="bg-white dark:bg-gray-900">
    <div class="container px-6 py-10 mx-auto">
        <h1 class="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">explore our <br> awesome <span class="underline decoration-blue-500">Components</span></h1>
        
        <p class="mt-4 text-gray-500 xl:mt-6 dark:text-gray-300">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum quam voluptatibus
        </p>
        
        <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
            <div class="p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl">
                <span class="inline-block text-blue-500 dark:text-blue-400">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                    </svg>
                </span>

                <h1 class="text-2xl font-semibold text-gray-700 capitalize dark:text-white">elegant Dark Mode</h1>

                <p class="text-gray-500 dark:text-gray-300">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
                </p>

                <a href="#" class="inline-flex p-2 text-blue-500 capitalize transition-colors duration-200 transform bg-blue-100 rounded-full dark:bg-blue-500 dark:text-white hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </a>
            </div>

            <div class="p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl">
                <span class="inline-block text-blue-500 dark:text-blue-400">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                    </svg>
                </span>

                <h1 class="text-2xl font-semibold text-gray-700 capitalize dark:text-white">Easy to customiztions</h1>

                <p class="text-gray-500 dark:text-gray-300">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
                </p>

                <a href="#" class="inline-flex p-2 text-blue-500 capitalize transition-colors duration-200 transform bg-blue-100 rounded-full dark:bg-blue-500 dark:text-white hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </a>
            </div>

            <div class="p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl">
                <span class="inline-block text-blue-500 dark:text-blue-400">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                </span>

                <h1 class="text-2xl font-semibold text-gray-700 capitalize dark:text-white">Simple & clean designs</h1>

                <p class="text-gray-500 dark:text-gray-300">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
                </p>

                <a href="#" class="inline-flex p-2 text-blue-500 capitalize transition-colors duration-200 transform bg-blue-100 rounded-full dark:bg-blue-500 dark:text-white hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </a>
            </div>
        </div>
    </div>
</section>

<!-- blog comp 2  -->
  <div class="flex justify-center items-center">
    <!--- more free and premium Tailwind CSS components at https://tailwinduikit.com/ --->
    <div class="2xl:mx-auto 2xl:container lg:px-20 lg:py-16 md:py-12 md:px-6 py-9 px-4 w-96 sm:w-auto">
      <div role="main" class="flex flex-col items-center justify-center">
        <h1 class="text-4xl font-semibold leading-9 text-center text-gray-800 dark:text-gray-50">This Week Blogs</h1>
        <p class="text-base leading-normal text-center text-gray-600 dark:text-white mt-4 lg:w-1/2 md:w-10/12 w-11/12">If you're looking for random paragraphs, you've come to the right place. When a random word or a random sentence isn't quite enough</p>
      </div>
      <div class="lg:flex items-stretch md:mt-12 mt-8">
        <div class="lg:w-1/2">
          <div class="sm:flex items-center justify-between xl:gap-x-8 gap-x-6">
            <div class="sm:w-1/2 relative">
              <div>
                <p class="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">12 April 2021</p>
                <div class="absolute bottom-0 left-0 p-6">
                  <h2 class="text-xl font-semibold 5 text-white">The Decorated Ways</h2>
                  <p class="text-base leading-4 text-white mt-2">Dive into minimalism</p>
                  <a href="javascript:void(0)" class="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                    <p class="pr-2 text-sm font-medium leading-none">Read More</p>
                    <svg class="fill-stroke" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </a>
                </div>
              </div>
              <img src="https://i.ibb.co/DYxtCJq/img-1.png" class="w-full" alt="chair" />
            </div>
            <div class="sm:w-1/2 sm:mt-0 mt-4 relative">
              <div>
                <p class="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">12 April 2021</p>
                <div class="absolute bottom-0 left-0 p-6">
                  <h2 class="text-xl font-semibold 5 text-white">The Decorated Ways</h2>
                  <p class="text-base leading-4 text-white mt-2">Dive into minimalism</p>
                  <a href="javascript:void(0)" class="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                    <p class="pr-2 text-sm font-medium leading-none">Read More</p>
                    <svg class="fill-stroke" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </a>
                </div>
              </div>
              <img src="https://i.ibb.co/3C5HvxC/img-2.png" class="w-full" alt="wall design" />
            </div>
          </div>
          <div class="relative">
            <div>
              <p class="md:p-10 p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">12 April 2021</p>
              <div class="absolute bottom-0 left-0 md:p-10 p-6">
                <h2 class="text-xl font-semibold 5 text-white">The Decorated Ways</h2>
                <p class="text-base leading-4 text-white mt-2">Dive into minimalism</p>
                <a href="javascript:void(0)" class="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                  <p class="pr-2 text-sm font-medium leading-none">Read More</p>
                  <svg class="fill-stroke" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </a>
              </div>
            </div>
            <img src="https://i.ibb.co/Ms4qyXp/img-3.png" alt="sitting place" class="w-full mt-8 md:mt-6 hidden sm:block" />
            <img class="w-full mt-4 sm:hidden" src="https://i.ibb.co/6XYbN7f/Rectangle-29.png" alt="sitting place" />
          </div>
        </div>
        <div class="lg:w-1/2 xl:ml-8 lg:ml-4 lg:mt-0 md:mt-6 mt-4 lg:flex flex-col justify-between">
          <div class="relative">
            <div>
              <p class="md:p-10 p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">12 April 2021</p>
              <div class="absolute bottom-0 left-0 md:p-10 p-6">
                <h2 class="text-xl font-semibold 5 text-white">The Decorated Ways</h2>
                <p class="text-base leading-4 text-white mt-2">Dive into minimalism</p>
                <a href="javascript:void(0)" class="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                  <p class="pr-2 text-sm font-medium leading-none">Read More</p>
                  <svg class="fill-stroke" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </a>
              </div>
            </div>
            <img src="https://i.ibb.co/6Wfjf2w/img-4.png" alt="sitting place" class="w-full sm:block hidden" />
            <img class="w-full sm:hidden" src="https://i.ibb.co/dpXStJk/Rectangle-29.png" alt="sitting place" />
          </div>
          <div class="sm:flex items-center justify-between xl:gap-x-8 gap-x-6 md:mt-6 mt-4">
            <div class="relative w-full">
              <div>
                <p class="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">12 April 2021</p>
                <div class="absolute bottom-0 left-0 p-6">
                  <h2 class="text-xl font-semibold 5 text-white">The Decorated Ways</h2>
                  <p class="text-base leading-4 text-white mt-2">Dive into minimalism</p>
                  <a href="javascript:void(0)" class="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                    <p class="pr-2 text-sm font-medium leading-none">Read More</p>
                    <svg class="fill-stroke" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </a>
                </div>
              </div>
              <img src="https://i.ibb.co/3yvZBpm/img-5.png" class="w-full" alt="chair" />
            </div>
            <div class="relative w-full sm:mt-0 mt-4">
              <div>
                <p class="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">12 April 2021</p>
                <div class="absolute bottom-0 left-0 p-6">
                  <h2 class="text-xl font-semibold 5 text-white">The Decorated Ways</h2>
                  <p class="text-base leading-4 text-white mt-2">Dive into minimalism</p>
                  <a href="javascript:void(0)" class="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                    <p class="pr-2 text-sm font-medium leading-none">Read More</p>
                    <svg class="fill-stroke" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </a>
                </div>
              </div>
              <img src="https://i.ibb.co/gDdnJb5/img-6.png" class="w-full" alt="wall design" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


`
</script>

<template>

<!-- hero -->
<Hero />

<!-- about -->
<About />

<!-- Projects -->
<Projects />

<!-- Reviews -->
<Reviews />

<!-- Reach out form -->
<Contact />

</template>


<style scoped>
</style>
