import { Module, ActionContext } from "vuex";
import { RootState } from "../index";

export interface ModuleAState {
  count: number;
}

export const moduleA: Module<ModuleAState, RootState> = {
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
      // console.log(rootState.ModuleB.counter);
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