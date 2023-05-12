import { createRouter, createWebHistory } from 'vue-router'
import AddMovie from "../views/AddMovie.vue"
import SearchMovie from "../views/SearchMovie.vue"
import StartPage from "../views/StartPage.vue"


const routes = [
    {
        path: "/",
        name: 'home',
        component: StartPage
    },
    {
        path: "/addmovie",
        name: 'addmovie',
        component: AddMovie
    },
    {
        path: "/searchmovie",
        name: 'searchmovie',
        component: SearchMovie
    },

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
