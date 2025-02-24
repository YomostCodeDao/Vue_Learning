<template>
    <div class="card">
        <p class="id">#{{ pokemon.id }}</p>
        <img :src="pokemon.image" alt="pokemon" style="width:100%">
        <h4>{{ pokemon.name }}</h4>
        <div class="type-list">
            <span v-for="type in pokemon.types" :key="type" :class="['type', type]">
                {{ type }}
            </span>

        </div>
    </div>
</template>




<script>
export default {
    props: {
        pokemon: {
            type: Object,
            required: true
        }
    }
}
</script>
