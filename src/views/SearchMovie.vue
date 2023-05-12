<template>
  <div class="my-5 flex justify-center items-center mt-20">
    <input type="text" placeholder="Search a movie.." v-model="searchQuery" class="px-4 py-2 text-lg rounded-md border-none bg-gray-200 text-gray-700 w-80 focus:outline-none focus:ring-2 focus:ring-blue-500">
  </div>
  <div class="flex flex-wrap justify-center">
    <div v-for="movie in filteredMovies" :key="movie.id" class="mb-4 mx-2 py-2 px-4 rounded-md  bg-gray-200 text-gray-700 font-bold text-lg ">{{ movie.title }}</div>
  </div>
</template>

<script setup>
import { useMovies } from '../data/movies'
import { ref, computed } from 'vue'

const { movies } = useMovies()
const searchQuery = ref('')

const filteredMovies = computed(() => {
  if (!searchQuery.value) {
    return movies.value
  } else {
    const query = searchQuery.value.toLowerCase()
    return movies.value.filter(movie => movie.title.toLowerCase().includes(query))
  }
})
</script>