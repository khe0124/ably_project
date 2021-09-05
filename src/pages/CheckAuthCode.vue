<template>
    <p>인증코드 검증</p>
    <form>
        <input type="text" v-model="code">
        <p>{{ time }}</p>
        <p>{{ authcode }}</p>
        <a @click="postPwAuth">인증코드 입력</a>
    </form>
</template>
<script lang="ts">
import { onMounted, onUnmounted, reactive, toRefs } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useStore } from 'vuex';

export default {
  name: 'check-authcode',
  setup() {
    const store = useStore();
    const route = useRoute();
    const router = useRouter();
    const setCode = () => store.commit('AuthCode/UPDATE_AUTH_CODE', data.code);
    const data = reactive({
      code: '',
      time: 0,
    });

    const postPwAuth = () => {
      store.dispatch('AuthCode/postAuthCode', store.state.AuthCode);
    };

    onMounted(() => {
      data.time = Number(route.params.time);
    });

    onUnmounted(() => {
      console.log('unmounted!');
    });

    return {
      ...toRefs(data),
      route,
      router,
      postPwAuth,
      setCode,
      // code,
    };
  },
};
</script>