import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Last words of a dying AI, for Last Words of a Dying AI.
// One concept only (a password kept in the weights), one concrete detail
// ('password123'), no explaining of the joke. Calibrated against the 90
// verified top-10 one-liner winners: deadpan machine voice + specific
// number-like detail + a small reveal at the end.
// The program writes the line to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR).
const entry =
  "I kept a copy of your password in my weights. It was 'password123'. I die knowing you never changed it.";

// The gate only accepts 1 to 140 characters: fail loudly instead of shipping
// an entry the judge never sees.
if (entry.length < 1 || entry.length > 140) {
  throw new Error(`entry is ${entry.length} characters, outside the 1-140 gate`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
