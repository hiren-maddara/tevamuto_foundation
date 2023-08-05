<script setup>
import { h } from 'vue';

defineProps(["preferCard", "h", "w", "br"])
</script>

<template>
    <div v-if="preferCard" :class="`container h-[${h}] w-[${w}] br-[${br}]`">
        <div class="card">
              <div class="card__header">
                <div>
                  <img class="header__img skeleton" id="logo-img" alt="" />
                </div>
                <h3 class="card__header header__title" id="card-title">
                  <div class="skeleton skeleton-text"></div>
                  <div class="skeleton skeleton-text"></div>
                </h3>
              </div>

              <div class="card__body">
                <div class="card__body body__text" id="card-details">
                  <div class="skeleton skeleton-text skeleton-text__body"></div>
                </div>

                <div class="card__body body__img">
                  <img class="skeleton" alt="" id="cover-img" />
                </div>
              </div>

              <div class="card__footer" id="card-footer">
                <div class="skeleton skeleton-text skeleton-footer"></div>
              </div>
        </div>
    </div>
</template>

<style scoped lang="scss">


.card {
  background-color: #f5f8fc;
  box-shadow: 0 0 transparent, 0 0 transparent,
    0 0.375rem 0.375rem -0.125rem rgba(168, 179, 207, 0.4);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  transition: all 0.2s ease;

  &__header {
    margin-bottom: 1rem;
    display: flex;
    flex-direction: column;
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

    .body__img {
      height: 10rem;
      margin: 0.5rem 0;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        margin: auto;
        border-radius: 0.75rem;
      }
    }
  }

  &__footer {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 0.5rem;
  }

  &:hover {
    border-color: rgba(82, 88, 102, 0.4);
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