import Axios from 'axios';
import * as types from "../types"

export async function getAuthCode(email: string) {
  return await Axios.get(`${process.env.VUE_APP_API_URL}api/reset-password?email=${email}`);
}

export async function postAuthCode(params: types.AuthCode) {
  return await Axios.post(`${process.env.VUE_APP_API_URL}api/reset-password`, params);
}

export async function patchPassword(params: types.PassWordParams) {
  const data = JSON.stringify(params)
  return await Axios.post(`${process.env.VUE_APP_API_URL}/api/reset-password`, data);
}

/* 
인증코드 발급요청
/api/reset-password?email=
안중코드 검증
post /api/reset-password
비밀번호 변경
patch /api/reset-password
로그인
post /api/login
로그아웃
post /api/logout
회원정보조회
get /api/user

*/