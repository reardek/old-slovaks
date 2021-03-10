export interface IUserCredential {
    email: string
    password: string
}

export interface IUser extends IUserCredential {
  nickname: string;
  firstName: string;
  lastName: string;
  avatar?: string;
}
