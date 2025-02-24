<script setup>
import { ref } from 'vue';
// const data = ref({
//     id: 1,
//     image: '	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
//     name: 'heheh',
//     types: [
//         'smile',
//         'cry'
//     ]
// })
let start = 0
let step = 12
async function getAPI(start, step) {
    const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`;
    const response = await fetch(url);
    const data = await response.json();

    displayPokemon(data.results)
}

async function displayPokemon(pkmArr) {
    const pkmList = document.getElementById('container')
    for (pokemon in pkmArr) {
        const pokemonResponse = await fetch(pokemon.url);
        const pokemonDetails = await pokemonResponse.json();

        const id = pokemon.url.split('/').filter(Boolean).pop();
        const detailUrl = `https://restfulpokemon.netlify.app/${pokemon.name}`;

        const pokemonElement = document.createElement('div');
        pokemonElement.className = 'card';
        pokemonElement.setAttribute('data-url', detailUrl);
    }
    
}




</script>

<template>
    <div class="container" id="container">
        <p>#{{ data.id }}</p>
        <img :src="data.image" :alt="data.name" height="100" width="100">
        <div class="container-mini">
            <span>${{ data.name }}</span>
            <p class="type-list">
                <span class="types" v-for="(item, index) in data.types" :key=index>
                    {{ item }}

                </span>
            </p>
        </div>
    </div>
</template>

<style>
.types {
    border: 1px solid #000;
    border-radius: 10%;
    margin: 0 5px;
}

.container {
    border-radius: 10%;
    border: 1px solid #000;
}
</style>
