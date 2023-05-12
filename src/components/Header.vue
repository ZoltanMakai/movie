<template>
  <header class="fixed top-0 left-0 w-full h-16 bg-blue-500 text-white flex items-center justify-center">
    <h1 class="text-lg cursor-pointer font-bold transition-colors duration-300 hover:text-gray-200" @click="goHome">My Website</h1>
  </header>
</template>


<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function goHome() {
  router.push('/')
}
</script>