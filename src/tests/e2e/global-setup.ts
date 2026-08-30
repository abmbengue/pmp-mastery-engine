import { execSync } from "node:child_process";

export default async function globalSetup() {
  execSync("npm run db:seed", {
    cwd: process.cwd(),
    stdio: "pipe",
    env: process.env,
  });
}
