<template>
  <div class=" flex justify-center items-center flex-col mt-16">
    <input class=" w-96 h-10 mr-2 rounded-lg border-none bg-gray-800 text-white px-4 text-lg mt-2" type="text" placeholder="Type a movie.." v-model="newMovieTitle" >
    <button class="bg-red-600 text-white text-lg py-2 px-4 rounded-lg transition-colors duration-200 ease-in-out hover:bg-white hover:text-red-600 mt-4 mb-20" @click="addNewMovie" >Add Movie</button>
  </div>
  <div v-for="movie in movies" :key="movie.title" class="">
    <div v-if="!movie.editing" class=" text-2xl font-bold my-2  pl-4 ">{{ movie.title }}</div>
    <div v-else>
      <input class="mx-2 w-96 h-10 mr-2 rounded-lg border-none bg-gray-800 text-white px-4 text-lg" type="text" v-model="movie.titleEdit" />
      <button class="bg-green-500 text-white text-lg py-2 px-4 rounded-lg transition-colors duration-200 ease-in-out hover:bg-white hover:text-green-500" @click="saveEdit(movie)">Save</button>
    </div>
    <button class="mx-2 bg-red-600 text-white text-lg py-2 px-4 rounded-lg transition-colors duration-200 ease-in-out hover:bg-white hover:text-red-600 mr-2 mt-2" @click="removeMovieFromMovies(movie)">Remove</button>
    <button v-if="!movie.editing" class="bg-blue-600 text-white text-lg py-2 px-4 rounded-lg transition-colors duration-200 ease-in-out hover:bg-white hover:text-blue-600" @click="editMovie(movie)">Modify</button>
  </div>
</template>

<script setup>
import { useMovies } from '../data/movies'
import { ref } from 'vue'

const { movies } = useMovies()

let newMovieTitle = ref('')

function removeMovieFromMovies(movieToRemove) {
  const index = movies.value.findIndex(movie => movie.title === movieToRemove.title);
  if (index !== -1) {
    movies.value.splice(index, 1);
    localStorage.setItem('movies', JSON.stringify(movies.value));
  }
}

function addNewMovie() {
  if (newMovieTitle.value) {
    const movieExists = movies.value.find(
        movie => movie.title.toLowerCase() === newMovieTitle.value.toLowerCase()
    );
    if (movieExists) {
      alert(`The movie "${newMovieTitle.value}" already exists in the list!`);
    } else {
      const newMovie = { title: newMovieTitle.value, editing: false, titleEdit: '' };
      movies.value.push(newMovie);
      localStorage.setItem('movies', JSON.stringify(movies.value));
      newMovieTitle.value = '';
    }
  }
}

function editMovie(movie) {
  movie.editing = true;
  movie.titleEdit = movie.title;
}

function saveEdit(movie) {
  movie.editing = false;
  movie.title = movie.titleEdit;
  localStorage.setItem('movies', JSON.stringify(movies.value));
}

</script>