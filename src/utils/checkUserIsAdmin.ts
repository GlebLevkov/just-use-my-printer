import { ADMIN_ID } from "@config";

export const checkUserIsAdmin = (id?: string | number) => {
  return Number(ADMIN_ID) === Number(id);
};
