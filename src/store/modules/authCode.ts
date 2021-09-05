import * as types from "../../types";
import { Module, ActionContext } from "vuex";
import router from '../../router'
import { RootState } from "../index";
import { getAuthCode, postAuthCode } from '../../lib/api';


export const AuthCode: Module<types.AuthCode, RootState> = {
  namespaced: true,
  state: () => ({
    email: "",
    authCode: "",
    issueToken: "",
  }),
  mutations: {
    INIT_DATA(state) {
      state.email = "";
      state.authCode = "";
      state.issueToken = "";
    },
    SET_AUTH_CODE(state, payload) {
      state.email = payload.email;
      state.authCode = payload.authCode;
      state.issueToken = payload.issueToken;
    },
    UPDATE_AUTH_CODE(state, payload) {
      state.authCode = payload;
    }
  },
  getters: {

  },
  actions: {
    getAuthCode({ commit }, email: string) {
      const vm = this;
      getAuthCode(email)
        .then((res) => {
          console.log(res.data);
          const data = {
            email: email,
            authCode: "",
            issueToken: res.data.issueToken,
          }
          commit("SET_AUTH_CODE", data);
          router.push({
            name: 'CheckAuthCode',
            params: {time: res.data.remainMillisecond}
          });
        })
        // .catch((e) => {
        //   console.log(e, 'error');
        // });
    },
    postAuthCode({ commit }, payload: types.AuthCode) {
      postAuthCode(payload)
        .then((res) => {
          const data = {
            email: payload.email,
            ...res.data
          }
          commit("ResetPassword/CONFIRM_AUTH_CODE", data, { root: true });
        })
        .then(() => {
          router.push({
            name: 'ResetPassword',
          });
        })
        .catch((e) => {
          console.log(e, 'error');
        });
    },
  }
};