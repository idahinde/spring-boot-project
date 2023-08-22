import {CreateUserAccount} from "./create.user.account";
import {UserLoginComp} from "./user.login.comp";
import {UserDetailsComp} from "./user.details.comp";

export const userComp: any[] = [
  CreateUserAccount, UserLoginComp, UserDetailsComp
]

export * from "./create.user.account";
export * from "./user.login.comp";
export * from "./user.details.comp";
