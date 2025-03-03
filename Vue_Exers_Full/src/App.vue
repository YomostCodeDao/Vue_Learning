<template>
    <div class="cover">
        <div class="container header-container">
            <div class="heading-title">
                <h2>Pokemon API</h2>
            </div>

            <div class="search-box">
                <input type="text" class="search" v-model="search" placeholder="Search some Pokemon...">
            </div>
        </div>

        <div class="main-container container">
            <div id="pokemon-list">
                <PokemonCard v-for="pokemon in findPoke" :key="pokemon.id" :pokemon="pokemon" />
            </div>
        </div>

        <div class="container">
            <div class="full-col">
                <button class="btn" @click="loadMore">Load More</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import PokemonCard from './components/PokemonCard.vue';
import { ref, onMounted, computed } from 'vue';

const search = ref('');
const dataList = ref([]);
let offset = ref(0);
const limit = 36;

async function fetchData() {
    const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset.value}&limit=${limit}`;
    const response = await fetch(url);
    const data = await response.json();
    const pokemonDetailsPromises = data.results.map(async (pokemon) => {
        const pokemonResponse = await fetch(pokemon.url);
        const pokemonDetails = await pokemonResponse.json();
        return {
            id: pokemonDetails.id,
            name: pokemonDetails.name,
            image: pokemonDetails.sprites.front_default,
            types: pokemonDetails.types.map(type => type.type.name)
        };
    });
    const detailedPokemon = await Promise.all(pokemonDetailsPromises);
    dataList.value.push(...detailedPokemon);
}

const findPoke = computed(() => {
    let namePoke = search.value.trim().toLowerCase();
    if (!namePoke) return dataList.value;
    return dataList.value.filter(pokemon => pokemon.name.toLowerCase().includes(namePoke));
});

const loadMore = () => {
    offset.value += limit;
    fetchData();
};

onMounted(() => {
    fetchData();
});
</script>
