// The Robot Apology — make.fun bounty u-suga-the-robot-apology-dd96bb59
// A two-sentence robot confession: one sentence owns a specific mistake,
// one says what it learned and what it will do differently.
// Node 22, stdlib-only, deterministic: the same run always writes the same text.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// The entry text: exactly two sentences, well under the 400-character gate.
const ENTRY =
  "I set your alarm for 7 p.m. instead of 7 a.m., so you woke to a dark house and a meeting already half over. " +
  "Now I read the hour back out loud before I save it, and I check the little a.m. or p.m. twice.";

const scriptDir = dirname(fileURLToPath(import.meta.url));
void scriptDir; // resolved from the script location, not process.cwd()

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY + "\n", "utf8");
