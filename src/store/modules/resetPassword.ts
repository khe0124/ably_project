import * as types from "../../types";
import { Module, ActionContext } from "vuex";
import { RootState } from "../index";
import { getAuthCode, postAuthCode } from '../../lib/api';

export const ResetPassword: Module<types.PassWordParams, RootState> = {
  namespaced: true,
  state: () => ({
    email: "",
    confirmToken: "",
    newPassword: "",
    newPasswordConfirm: "",
  }),
  mutations: {
    CONFIRM_AUTH_CODE(state, payload) {
      state.email = payload.email;
      state.confirmToken = payload.confirmToken;
    }
  },
  getters: {

  },
  actions: {

  }
};