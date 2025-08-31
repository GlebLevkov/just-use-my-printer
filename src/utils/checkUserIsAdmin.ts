import { ADMIN_ID } from "../../config.ts";

export const checkUserIsAdmin = (id?: string | number) => {
  return ADMIN_ID === id;
};
