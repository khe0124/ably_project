import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Login from "../pages/Login.vue";
import AskAuthCode from "../pages/AskAuthCode.vue";
import CheckAuthCode from "../pages/CheckAuthCode.vue";
import ResetPassword from "../pages/ResetPassword.vue";
import Main from "../pages/Main.vue";

const routes: Array<RouteRecordRaw> = [
  {
      path: "/",
      name: "Main",
      component: Main,
  },
  // 1) 인증코드 발급 페이지
  
  {
    path: "/ask-authcode",
    name: "AskAuthCode",
    component: AskAuthCode,
  },
  // 2) 인증코드 검증 페이지
  {
    path: "/check-authcode",
    name: "CheckAuthCode",
    component: CheckAuthCode,
  },
  // 3) 비밀번호 변경 페이지
  {
    path: "/reset-password",
    name: "ResetPassword",
    component: ResetPassword,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router