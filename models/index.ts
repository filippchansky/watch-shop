export interface IUser {
  id: number;
  username: string;
  password: string;
  role: string;
  address: any;
  enabled: boolean;
  authorities: IAuthority[];
  accountNonLocked: boolean;
  accountNonExpired: boolean;
  credentialsNonExpired: boolean;
}

export interface IAuthority {
  authority: string;
}
