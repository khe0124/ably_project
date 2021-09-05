import Axios from 'axios';
import * as types from "../types"

//인증코드 발급요청
export async function getAuthCode(email: string) {
  return await Axios.get(`${process.env.VUE_APP_API_URL}api/reset-password?email=${email}`);
}
//안중코드 검증
export async function postAuthCode(params: types.AuthCode) {
  return await Axios.post(`${process.env.VUE_APP_API_URL}api/reset-password`, params);
}
//비밀번호 변경
export async function patchPassword(params: types.PassWordParams) {
  console.log(params);
  return await Axios.patch(`${process.env.VUE_APP_API_URL}api/reset-password`, params);
}