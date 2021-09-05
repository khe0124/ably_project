<template>
    <h2>비밀번호 재설정</h2>
    <form>
        <p>{{ resetpw }}</p>
        <input type="password" v-model="newPassword" placeholder="비밀번호" @input="setNewPassword" class="input-md">
        <input type="password" v-model="newPasswordConfirm" placeholder="비밀번호확인" @input="setNewPasswordConfirm" class="input-md">
        <p v-if="warning">{{ warning }}</p>
        <a @click="changeNewPassword" class="cursor-pointer btn">새로운 비밀번호로 변경하기</a>
    </form>
</template>
<script lang="ts">
import { computed, reactive, toRefs } from 'vue';
import { useStore } from 'vuex';

export default {
  name: 'reset-password',

  setup() {
    const store = useStore();
    const resetpw = computed(() => store.state.ResetPassword);
    const data = reactive({
      newPassword: '',
      newPasswordConfirm: '',
      warning: '',
    });

    const setNewPassword = () => {
      store.commit('ResetPassword/CHANGE_PASSWORD', data.newPassword);
    };

    const setNewPasswordConfirm = () => {
      if (data.newPassword !== data.newPasswordConfirm) {
        data.warning = '비밀번호가 일치하지 않습니다. 확인해주세요.';
      } else {
        data.warning = '';
      }
      store.commit(
        'ResetPassword/CHANGE_PASSWORD_CONFIRM',
        data.newPasswordConfirm,
      );
    };

    const changeNewPassword = () => {
      store.dispatch(
        'ResetPassword/changeNewPassword',
        store.state.ResetPassword,
      );
    };

    return {
      ...toRefs(data),
      resetpw,
      changeNewPassword,
      setNewPassword,
      setNewPasswordConfirm,
    };
  },
};
</script>