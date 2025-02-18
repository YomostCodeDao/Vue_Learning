<script setup>
// const { ref } = require('vue')



// const confition = ref(true)
function checkInput() {
    var empt1 = document.getElementsByID('userName') // [el1, el2]
    var empt2 = document.getElementById('passWord')
    if (empt1.value === '' && empt2.value === '') {
        alert('Bạn đã điền đầy đủ thông tin')
    } else {
        alert('Nhập thông tin thành công')
    }
    console.log(empt1.value)
}
</script>

<template>
    <div class="login-container">
        <div class="user-name">
            <span class="login-title">Tài khoản</span>
            <input type="text" class="input" id="userName">
        </div>

        <div class="user-name">
            <span class="login-title">mật khẩu</span>
            <input type="password" class="input" id="passWord">
        </div>
    </div>
    <!-- <span v-if="true">Bạn hãy điền đúng thông tin</span> -->
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
</style>