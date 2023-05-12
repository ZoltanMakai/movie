import { ref } from 'vue';

export function useMovies() {
    const movies = ref(JSON.parse(localStorage.getItem('movies')) || []);



    return {
        movies
    };
}