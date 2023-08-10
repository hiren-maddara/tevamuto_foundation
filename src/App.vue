<script setup>
import {ref, onUpdated, onMounted, onBeforeUpdate, watch} from 'vue'
import { RouterView } from 'vue-router'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Skeleton from './components/Skeleton.vue'
// import supabase from './data/supabase'

const mainContent = ref(null)
const articles = ref([])
const articlesDb = ref([])


onMounted(async () => {
  try{
    // articles.value = await import('@/data/articles.json')
    // const {data, error} = await supabase.from('test').select()
    // if(data) articlesDb.value = await supabase.from('projects').select()
    // if(error) alert(error.message)

  }catch(e){
    alert(e)
  }
})

// watch(articles, () => console.log(articles.value))
// watch(articlesDb, () => console.log(articlesDb.value))

</script>

<template>
  <Header />
  <main class="app_content">
    <Suspense>
      <RouterView #default />

      <template #fallback>
          <Skeleton prefer="card" :h="'auto'" :w="'auto'" class="m-16" />
      </template>
    </Suspense>
  </main>
  <Footer />
</template>

<style scoped>
</style>
