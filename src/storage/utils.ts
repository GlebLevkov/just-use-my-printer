export const removeFiles = async (paths: string[]) => {
  const command = new Deno.Command("rm", {
    args: paths,
    stdin: "piped",
    stdout: "piped",
  });
  const child = command.spawn();
  await child.output();
  await child.status;
};
