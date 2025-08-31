type PrinterParams = {
  filepath: string;
};

export const addToPrintQueue = async (params: PrinterParams) => {
  console.log("execute: lp " + params.filepath);
  const command = new Deno.Command("lp", {
    args: [params.filepath],
    stdin: "piped",
    stdout: "piped",
  });
  const child = command.spawn();
  await child.output();
  await child.status;
};
