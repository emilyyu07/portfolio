import fs from "node:fs";
import path from "node:path";

const polaroidDir = path.join(
  process.cwd(),
  "public",
  "images",
  "polaroids",
);

export function hasPolaroidSunset(): boolean {
  return fs.existsSync(path.join(polaroidDir, "polaroid-sunset.jpg"));
}

export function hasPolaroidBanff(): boolean {
  return fs.existsSync(path.join(polaroidDir, "polaroid-banff.jpg"));
}
