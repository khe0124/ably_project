<template>
    <!-- <router-link to="/">Home</router-link>
    <router-link to="/ask-authcode">인증번호발급</router-link>
    <router-link to="/check-authcode">인증번호확인</router-link>
    <router-link to="/reset-password">비밀번호 재설정</router-link> -->
    <div class="w-60 container">
        <router-view />
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  components: {},
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
