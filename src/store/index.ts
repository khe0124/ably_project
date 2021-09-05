import { createStore } from "vuex";
import { ResetPassword } from './modules/resetPassword';
import { AuthCode } from "./modules/authCode";

export interface RootState { 
  data: string; 
}


export default createStore({
  modules: { AuthCode, ResetPassword },
});