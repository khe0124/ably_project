<template>
    <p>인증코드 받기</p>
    <form action="">
        <input type="text" v-model="email" placeholder="이메일을 입력하세요.">
        <p @click="getAuth">인증코드 받기</p>
        <p v-if="notMemeber">이메일이 없습니다.</p>
    </form>
</template>
<script lang="ts">
import { reactive, toRefs } from 'vue';
import { getAuthCode } from '../lib/api';

export default {
  name: 'ask-authcode',
  setup() {
    const data = reactive({
      email: '',
      notMemeber: false,
    });

    const getAuth = () => {
      console.log('test');
      getAuthCode(data.email)
        .then((res) => {
          console.log(res.data);
        })
        .catch((e) => {
          data.notMemeber = true;
          console.log(e, 'error');
        });
      //   this.$router.push({ name: '/' });
    };
    return {
      ...toRefs(data),
      getAuth,
    };
  },
};
</script>