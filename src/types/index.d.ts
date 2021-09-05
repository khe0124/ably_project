export interface User {
  _id: string;
  name: string;
  email: string;
  profileImage: string;
  lastConnectedAt: Date;
}

export interface AuthCode {
  email: string;
  authCode: string;
  issueToken: string;
}

export interface PassWordParams {
  email: string;
  confirmToken: string;
  newPassword: string;
  newPasswordConfirm: string;
}

export interface LoginParams {
  email: string;
  password: string;
}
