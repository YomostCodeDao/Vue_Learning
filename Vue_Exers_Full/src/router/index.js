import { createRouter, createWebHistory } from 'vue-router';
import PokemonDetails from '../components/PokemonDetail.vue';
import App from '../App.vue';

const routes = [
    {
        path: '/:name',
        name: 'PokemonDetails',
        component: PokemonDetails,
        props: true
    },
    {
        path: '/',
        name: 'App',
        component: App
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
