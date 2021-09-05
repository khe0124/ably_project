<template>
    <div class="form-wrap">
        <h2>인증코드 검증</h2>
        <form>
            <input type="text" v-model="code" @input="setCode" maxlength="6" class="input-md">
            <span class="p-2">{{ stamp }}</span>
            <p>{{ authcode }}</p>
            <a @click="postPwAuth" class="btn">인증코드 입력</a>
        </form>
    </div>
</template>
<script lang="ts">
import { computed, onMounted, onUnmounted, reactive, toRefs } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useStore } from 'vuex';

export default {
  name: 'check-authcode',
  setup() {
    const store = useStore();
    const route = useRoute();
    const router = useRouter();
    const authcode = computed(() => store.state.AuthCode);
    const data = reactive({
      code: '',
      time: 0,
      stamp: '',
    });

    const postPwAuth = () => {
      store.dispatch('AuthCode/postAuthCode', store.state.AuthCode);
    };

    const initData = () => {
      store.commit('AuthCode/INIT_DATA', store.state.AuthCode);
    };

    const setCode = () => {
      store.commit('AuthCode/UPDATE_AUTH_CODE', data.code);
    };

    const startTimer = (duration: any) => {
      var timer: any = duration;
      let minutes: any;
      let seconds: any;
      setInterval(function () {
        minutes = parseInt(`${timer / 60}`, 10);
        seconds = parseInt(`${timer % 60}`, 10);

        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;

        data.stamp = minutes + ':' + seconds;

        if (--timer < 0) {
          timer = duration;
        }
      }, 1000);
    };

    onMounted(() => {
      data.time = Number(route.params.time);
      startTimer(data.time / 1000);
    });

    onUnmounted(() => {
      initData;
    });

    return {
      ...toRefs(data),
      route,
      router,
      authcode,
      startTimer,
      initData,
      postPwAuth,
      setCode,
    };
  },
};
</script>