import { createStore } from "vuex";
import { moduleA, ModuleAState } from "@/store/modules/ModuleA";
import { moduleB, ModuleBState } from "@/store/modules/ModuleB";

export interface RootState {
  ModuleA: ModuleAState;
  ModuleB: ModuleBState;
}

export default createStore({
  modules: { moduleA, moduleB }
});