import { db } from "./init.ts";
import { userFilesKey, userIdByUsername } from "@src/utils/keys.ts";

export const getUserFiles = async (userId: number) => {
  return (await db.get<string[]>(userFilesKey(userId))).value ?? [];
};

export const addUserFiles = async (userId: number, newFiles: string[]) => {
  await db.set(userFilesKey(userId), [
    ...new Set([...(await getUserFiles(userId)), ...newFiles]),
  ]);
};

export const cleanUserFiles = async (userId: number) => {
  const files = await getUserFiles(userId);
  await db.set(userFilesKey(userId), []);
  return files;
};

export const updateIdByUsername = async (username: string, id: number) => {
  await db.set(userIdByUsername(username), id);
};

export const getIdByUsername = async (username: string) => {
  return (await db.get<number>(userIdByUsername(username))).value;
};
