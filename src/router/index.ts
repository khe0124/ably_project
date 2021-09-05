import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
      path: "/",
      name: "Main",
      component: () => import('../pages/Main.vue'),
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
    // beforeEnter: ((to, from, next) => {
    //   from.router.params
    // }
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
    meta: { authRequired: true }
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

// router.beforeEach((to, from, next) => {
//   //스토어에서 확인 후 라우트
//   if (to.name == 'CheckAuthCode') next({ name: 'AskAuthCode' })
//   else next()
//   // if (to.name == 'ResetPassword') next({ name: 'AskAuthCode' })
//   // else next()
// })

export default router