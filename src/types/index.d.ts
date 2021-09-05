export interface User {
  _id: string;
  name: string;
}

export interface AuthCode {
  email: string;
  authCode: string;
  issueToken: string;
}
