import { TRUSTED_USERS } from "../../config.ts";

export const checkUserIsTrusted = (username?: string) => {
  return !!username && TRUSTED_USERS.includes(username);
};
