<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="bg-gray-900 min-h-screen flex justify-center items-center">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:w-96">
      <RouterLink to="/searchmovie" class="group relative flex justify-center items-center w-full h-64 rounded-lg overflow-hidden transition-all duration-300 bg-blue-500 shadow-md hover:translate-y-[-5px]">
        <img src="../assets/search_movie.webp" alt="Search Movie" class="object-contain h-full w-auto rounded-lg group-hover:brightness-100" />
        <div class="absolute bottom-0 left-0 w-full p-4 bg-blue-600 bg-opacity-80 text-white font-bold text-lg text-center rounded-bl-lg rounded-br-lg transition-all duration-300 group-hover:opacity-100 opacity-0">Search Movie</div>
      </RouterLink>
      <RouterLink to="/addmovie" class="group relative flex justify-center items-center w-full h-64 rounded-lg overflow-hidden transition-all duration-300 bg-blue-500 shadow-md hover:translate-y-[-5px]">
        <img src="../assets/1258531.png" alt="Add Movie" class="object-contain h-full w-auto rounded-lg group-hover:brightness-100" />
        <div class="absolute bottom-0 left-0 w-full p-4 bg-blue-600 bg-opacity-80 text-white font-bold text-lg text-center rounded-bl-lg rounded-br-lg transition-all duration-300 group-hover:opacity-100 opacity-0">Add Movie</div>
      </RouterLink>
    </div>
  </div>
</template>