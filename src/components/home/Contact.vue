<script setup>

</script>

<template>
    <section class="bg-transparent text-gray-800 mb-18 py-10">
        <div class="mx-auto max-w-screen-xl px-6 md:px-16 lg:px-20 py-16 sm:px-6">
          <div class="flex flex-col text-left lg:text-center w-full mb-16">
              <h2 class="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1 uppercase">REACH OUT</h2>
              <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Feel free to reach out to us</h1>
              </div>
          <div class="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5 break-words">
            <div class="lg:col-span-2 lg:py-12">
              <p class="max-w-xl text-lg">
                Your support is the cornerstone of our progress. Reach out today, and let's build something impactful
              </p>

              <div class="mt-8">
                <a href="" class="text-2xl font-bold text-indigo-500 hover:text-indigo-600">
                  +256704634285
                </a>

                <a href="" class="text-2xl font-bold text-indigo-500 hover:text-indigo-600">
                  @tevamuttofoundation
                </a>

                <a href="" class="text-2xl font-bold text-indigo-500 hover:text-indigo-600">
                  tevamutofoundationug@gmail.com
                </a>

                <address class="mt-2 not-italic">
                Kayenje, Butambala, Uganda
                </address>
              </div>
            </div>

            <div class="rounded-lg bg-gray-200 p-8 shadow-lg lg:col-span-3 lg:p-12">
              <form action="https://formspree.io/f/xbjvoojg" class="space-y-4" method="POST">
                <div>
                  <label class="sr-only" for="name">Name</label>
                  <input
                    class="w-full rounded-lg border-gray-400 p-3 text-sm"
                    placeholder="Name"
                    type="text"
                    id="name" 
                    name= "Name" required
                  />
                </div>

                <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label class="sr-only" for="email">Email</label>
                    <input
                      class="w-full rounded-lg border-gray-400 p-3 text-sm"
                      placeholder="Email address"
                      type="email"
                      id="email"
                      name="Email" required
                    />
                  </div>

                  <div>
                    <label class="sr-only" for="phone">Phone</label>
                    <input
                      class="w-full rounded-lg border-gray-400 p-3 text-sm"
                      placeholder="Phone Number"
                      type="tel"
                      id="phone"
                      name="Phone" required
                    />
                  </div>
                </div>

                <div class="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
         
                </div>

                <div>
                  <label class="sr-only" for="message">Message</label>

                  <textarea
                    class="w-full rounded-lg border-gray-400 p-3 text-sm"
                    placeholder="Message"
                    rows="8"
                    id="message"
                    name="Message" required
                  ></textarea>
                </div>

                <div class="mt-4">
                  <button
                    type="submit"
                    class="inline-block w-full rounded-lg bg-indigo-500 hover:bg-indigo-600 px-5 py-3 font-medium text-white sm:w-auto"
                  >
                    Send your message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
</template>