<template>
    <div class="form-wrap">
        <h2>로그인</h2>
        <form>
            <input type="text" v-model="email" placeholder="이메일" class="input-md">
            <input type="password" v-model="password" placeholder="비밀번호" class="input-md">
            <a @click="login" class="btn">로그인</a>
            <a @click="changePassword">비밀번호 재설정</a>
        </form>
    </div>
</template>
<script lang="ts">
import { reactive, toRefs } from 'vue';
import { useRouter } from 'vue-router';

export default {
  name: 'login',

  setup() {
    const router = useRouter();
    const data = reactive({
      email: '',
      password: '',
    });

    const changePassword = () => {
      router.push({
        name: 'AskAuthCode',
      });
    };

    const login = () => {
      console.log('login');
    };

    return {
      ...toRefs(data),
      changePassword,
      login,
    };
  },
};
</script>