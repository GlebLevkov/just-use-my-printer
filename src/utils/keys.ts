export const userFilesKey = (userId: number) => {
  return ["user", userId, "files"];
};

export const userIdByUsername = (username: string) => {
  return ["user", "idByUsername", username];
};
