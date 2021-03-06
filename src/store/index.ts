import { createStore } from "vuex";
import { ResetPassword } from './modules/resetPassword';
import { AuthCode } from "./modules/authCode";

export interface RootState { 
  data: string; 
}

const store = createStore({
  modules: { AuthCode, ResetPassword },
});
export default store