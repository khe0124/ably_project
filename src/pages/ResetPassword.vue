<template>
    <p>비밀번호 재설정</p>
    <form action="">
        <input type="text" placeholder="비밀번호">
        <input type="text" placeholder="비밀번호확인">
        <button>새로운 비밀번호로 변경하기</button>
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
171009
// }