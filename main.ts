// Confession entry (Node 22, standard library only).
// The confession lives in confession.txt beside this file; the program
// copies it verbatim to /output/entry.txt, byte for byte, adding nothing.
// The gate wants UTF-8 text of 1 to 200 characters, not only white space,
// and the judge reads exactly the bytes copied, so this file writes no
// trailing line end of its own: confession.txt carries none either.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL('./confession.txt', import.meta.url), join(outDir, 'entry.txt'));
