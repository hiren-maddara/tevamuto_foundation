<script setup>
import { RouterView } from 'vue-router'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Skeleton from './components/Skeleton.vue'

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
