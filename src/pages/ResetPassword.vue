<template>
    <p>비밀번호 재설정</p>
    <form action="">
        <input type="text">
        <button>인증코드 받기</button>
    </form>
</template>
<script lang="ts">
import { reactive, toRefs } from 'vue';

export default {
  name: 'reset-password',
  setup() {
    const data = reactive({
      email: '',
    });

    return {
      ...toRefs(data),
    };
  },
};
</script>
// {
//     "email": "ably452@dummy.com",
//     "password": "!abc321#$"
// }