<script setup>
import { ref } from 'vue';

// let offset = 0
// let limit = 6

// async function fetchPokemonData(offset, limit, clearList = false) {
//     const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`;
//     try {
//         const response = await fetch(url);
//         const data = await response.json();

//         if (clearList) {
//             document.getElementById('pokemon-list').innerHTML = '';
//         }

//         displayPokemon(data.results);
//     } catch (error) {
//         console.error('Error fetching data: ', error);
//     }
// }

const condition = ref(true)
const username = ref('ahihi_huhu_haha')
const password = ref('1234')
// function checkInput() {
//     var empt1 = document.getElementById('userName') // [el1, el2]
//     var empt2 = document.getElementById('passWord')
//     if (empt1.value === '' || empt2.value === '') {
//         condition.value = false
//     } else {
//         condition.value = true
//         alert('Nhập thông tin thành công')
//     }
// }

function handleClick() {

}




</script>

<template>
    <div class="nav-container">

    </div>

    <div class="login-container">
        <div class="user-name">
            <span class="login-title">Tài khoản</span>
            <input v-model="username" type="text" class="input" id="userName">
        </div>

        <div class="user-name">
            <span class="login-title">mật khẩu</span>
            <input v-model="password" type="password" class="input" id="passWord">
        </div>
    </div>

    <span :class="{ ishidden: condition }">Vui lòng nhập đầy đủ thông tin</span>

    <div>{{ username }} + {{ password }}</div>

    <button @click="checkInput">Submit</button>
</template>

<style scoped>
.login-container {
    display: flex;
    flex-direction: column;
}

.user-name {
    padding: 20px 0;
}

.ishidden {
    display: none;
}
</style>