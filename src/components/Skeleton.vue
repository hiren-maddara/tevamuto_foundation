<script setup>
import { ref } from 'vue';

const props = defineProps(["prefer", "h", "w", "br"])

const randOrder = () => `order-[${Math.round(Math.random() * 9)}]`


</script>

<template>
    <div v-if="prefer === 'card'" class="card mx-auto" :class="`h-[${props.h}] w-[${props.w}] br-[${props.br}]`">
      <div :class="`card__header`" :style="{ order: Math.round(Math.random() * 9) }">
        <div class="header__img skeleton"></div>
        <h3 class="header__title w-4/5 mt-4">
          <div class="skeleton skeleton-text"></div>
          <div class="skeleton skeleton-text"></div>
        </h3>
      </div>

      <div :class="`card__body h-[10rem]`" :style="{ order: Math.round(Math.random() * 9) }">
        <div class="card__body body__text">
          <div class="skeleton skeleton-text skeleton-text__body"></div>
        </div>

        <div :class="`card__body skeleton h-5/6`">
        </div>
      </div>

      <div :class="`card__footer`" :style="{ order: Math.round(Math.random() * 9) }">
        <div class="skeleton skeleton-text skeleton-footer"></div>
      </div>
    </div>

    <div v-else-if="prefer === 'text'" class="flex justify-evenly">
      <h1 class="w-1/4 skeleton skeleton__text"></h1>
      <h1 class="w-1/2 skeleton skeleton__text"></h1>
    </div>

    <div v-else class="skeleton">
    </div>
</template>

<style scoped lang="scss">

.card {
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  transition: all 0.2s ease;
  margin: 1rem auto;

  &__header {
    margin-bottom: 1rem;
    display: flex;
    // flex-direction: column;
    margin: 0.5rem 0 0.5rem 0.5rem;

    .header__img {
      height: 2rem;
      width: 2rem;
      object-fit: cover;
      border-radius: 50%;
    }

    .header__title {
      font-size: 1.0625rem;
      line-height: 1.375rem;
      color: #0e1217;
      font-weight: 700;
      margin: 0.5rem;
    }
  }

  &__body {
    margin: 0 0.5rem;

    .body__text {
      color: #525866;
      font-size: 0.8125rem;
    }

  }

  &__footer {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 0.5rem;
    width: 60%;
  }
}


//Hides the broken image icon
img[alt] {
  text-indent: -10000px;
}


.skeleton {
  animation: skeleton-loading 1s linear infinite alternate;
}

@keyframes skeleton-loading {
  0% {
    background-color: hsla(200, 20%, 80%, 0.7);
  }
  100% {
    background-color: hsla(200, 20%, 95%, 1);
  }
}

.skeleton-text {
  width: 100%;
  height: 0.7rem;
  margin-bottom: 0.5rem;
  border-radius: 0.25rem;
}


</style>