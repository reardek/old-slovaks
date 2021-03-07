import { spawn, SpawnOptions } from "child_process";

const args = ["start"];
const opts: SpawnOptions = { stdio: "inherit", cwd: "server", shell: true };

spawn("yarn", args, opts);
