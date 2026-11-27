import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "Buy the bitcoin, skip the haircut, and stop rehearsing conversations with people who never think about you twice.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
console.log(line);

// One line in, one line out: the entry is the whole program.
