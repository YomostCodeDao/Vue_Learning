<script setup>
import { ref } from 'vue';
const confident = ref(true)
function checkInput() {
  var empt1 = document.getElementById('userName') // [el1, el2]
  var empt2 = document.getElementById('passWord')
  if (empt1.value === '' || empt2.value === '') {
    confident.value = false
  } else {
    confident.value = true
    alert('Nhập thông tin thành công')
  }
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

  <span :class="{ ishidden: confident }">Vui lòng nhập đầy đủ thông tin</span>

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