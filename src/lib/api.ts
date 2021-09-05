import Axios from 'axios';

export async function getAuthCode(email: string) {
  console.log(email);
  return await Axios.get(`${process.env.VUE_APP_API_URL}api/reset-password?email=${email}`);
}

export async function postAuthCode(param: any) {
  return await Axios.post(`/api/reset-password${param}`);
}

// export async function patchPassword(password: string) {
//   return await Axios.get(`${process.env.BASE_URL}/api/reset-password?email=${email}`);
// }

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