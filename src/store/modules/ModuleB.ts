import { Module, ActionContext } from "vuex";
import { RootState } from "../index";

export interface ModuleBState {
  count: number;
}

export const moduleB: Module<ModuleBState, RootState> = {
  namespaced: true,
  state: () => ({
    count: 0
  }),
  mutations: {
    increment(state) {
      state.count++;
    }
  },
  getters: {
    doubleCount(state, getters, rootState) {
      // 다른 store state 추론 가능
      return state.count * 2;
    }
  },
  actions: {
    incrementIfOddOnRootSum({ state, commit, rootState }) {
      // if ((state.count + rootState.Counter.counter) % 2 === 1) {
      //   commit("increment");
      // }
    }
  }
};