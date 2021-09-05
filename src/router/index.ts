import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { useStore } from "vuex";

const store = useStore();

const routes: Array<RouteRecordRaw> = [
  {
      path: "/",
      name: "Main",
      component: () => import('../pages/Main.vue'),
      redirect: '/ask-authcode'
  },
  // 1) 인증코드 발급 페이지
  
  {
    path: "/ask-authcode",
    name: "AskAuthCode",
    component: () => import('../pages/AskAuthCode.vue'),
  },
  // 2) 인증코드 검증 페이지
  {
    path: "/check-authcode",
    name: "CheckAuthCode",
    component: () => import('../pages/CheckAuthCode.vue'),
  },
  // 3) 비밀번호 변경 페이지
  {
    path: "/reset-password",
    name: "ResetPassword",
    component: () => import('../pages/ResetPassword.vue'),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import('../pages/Login.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router