<script setup>
import {ref, onUpdated, onMounted, onBeforeUpdate, watch} from 'vue'
import { RouterView } from 'vue-router'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

const stickNav = ref(false)
const mainContent = ref(null)
const articles = ref([])

onMounted(async () => {
      articles.value = await import('@/data/articles.json')
})

watch(articles, () => console.log(articles.value))

</script>

<template>
  <Suspense>
    <template #default>
      <div>
        <Header />
        <main class="app_content">
          <RouterView />
        </main>
        <Footer />
      </div>
    </template>
    <template #fallback>
      <h1 classs="text-center">Loading...</h1>
    </template>
  </Suspense>

</template>

<style scoped>
</style>
