<template>
    <div class="form-wrap">
        <h2>인증코드 받기</h2>
        <form>
            <input type="text" v-model="email" placeholder="이메일을 입력하세요." class="input-md">
            <a @click="getPwAuth" class="btn">인증코드 받기</a>
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