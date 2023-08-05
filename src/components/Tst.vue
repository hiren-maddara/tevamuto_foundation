<script setup>
import { ref } from 'vue';

const loadData = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                name: 'Matt Hiren',
                img: 'img-1.jpg',
                bio: 'bluhbluh beh beh'
            })
        }, 3000)
    })
}

const data = ref((await loadData()))
console.log(data.value)
</script>

<template>
    <div class="text-xl text-gray-900">
        <h3>{{ data.name }}</h3>
        <p>{{ data.bio }}</p>
    </div>
</template>