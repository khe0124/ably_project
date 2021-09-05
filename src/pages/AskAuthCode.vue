<template>
    <div>
        <p>인증코드 받기</p>
        <form>
            <input type="text" v-model="email" placeholder="이메일을 입력하세요.">
            <a @click="getPwAuth">인증코드 받기</a>
            <p>ably452@dummy.com</p>
            <p v-if="notMemeber">이메일이 없습니다.</p>
        </form>
    </div>
</template>
<script lang="ts">
import { reactive, toRefs } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

export default {
  name: 'ask-authcode',
  setup() {
    const store = useStore();
    const router = useRouter();
    const data = reactive({
      email: '',
      notMemeber: false,
    });

    const getPwAuth = () => {
      store.dispatch('AuthCode/getAuthCode', data.email);
    };

    return {
      ...toRefs(data),
      getPwAuth,
      router,
    };
  },
};
</script>