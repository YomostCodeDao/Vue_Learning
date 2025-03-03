<template>
    <div class="pokemon-details" v-if="pokemon">
        <img :src="pokemon.image" :alt="pokemon.name" class="pokemon-image">
        <div class="pokemon-types">
            <span v-for="type in pokemon.types" :key="type" class="pokemon-type">{{ type }}</span>
        </div>
        <h2>{{ pokemon.name }}</h2>

        <p class="pokemon-description">{{ pokemon.description }}</p>
        <div class="pokemon-stats">
            <div class="stat-item">
                <label>Height</label>
                <div class="stat-value">{{ pokemon.height }}</div>
            </div>
            <div class="stat-item">
                <label>Weight</label>
                <div class="stat-value">{{ pokemon.weight }}</div>
            </div>
        </div>
        <div class="pokemon-abilities">
            <h3>Abilities</h3>
            <ul>
                <li v-for="ability in pokemon.abilities" :key="ability">{{ ability }}</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    props: ['name'],
    data() {
        return {
            pokemon: null
        };
    },
    async created() {
        const url = `https://pokeapi.co/api/v2/pokemon/${this.id}`;
        const response = await fetch(url);
        const data = await response.json();
        this.pokemon = {
            id: data.id,
            name: data.name,
            image: data.sprites.front_default,
            types: data.types.map(type => type.type.name),
            height: data.height,
            weight: data.weight,
            abilities: data.abilities.map(ability => ability.ability.name),
            description: data.flavor_text_entries
        };
    }
}
</script>
