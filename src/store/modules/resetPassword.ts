import * as types from "../../types";
import { Module, ActionContext } from "vuex";
import router from '../../router'
import { RootState } from "../index";
import { patchPassword } from '../../lib/api';

export const ResetPassword: Module<types.PassWordParams, RootState> = {
  namespaced: true,
  state: () => ({
    email: "",
    confirmToken: "",
    newPassword: "",
    newPasswordConfirm: "",
  }),
  mutations: {
    INIT_DATA(state) {
      state.email = "";
      state.confirmToken = "";
      state.newPassword = "";
      state.newPasswordConfirm = "";
    },
    CONFIRM_AUTH_CODE(state, payload) {
      state.email = payload.email;
      state.confirmToken = payload.confirmToken;
    },
    CHANGE_PASSWORD(state, password: string) {
      state.newPassword = password;
    },
    CHANGE_PASSWORD_CONFIRM(state, passwordConfirm: string) {
      state.newPasswordConfirm = passwordConfirm;
    }
  },
  getters: {

  },
  actions: {
    changeNewPassword({ commit }, payload: types.PassWordParams) {
      patchPassword(payload)
        .then((res) => {
          router.push({
            name: 'Login',
          });
        })
        .catch((e) => {
          console.log(e, 'error');
        });
    },
  }
};