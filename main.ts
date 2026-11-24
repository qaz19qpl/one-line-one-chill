// One Line, One Chill — a single original sentence of horror.
//
// Writes exactly one line to /output/entry.txt. Node 22 stdlib only.
// Deterministic: no clock, no randomness, no network, no environment
// input beyond an optional OUTPUT_DIR override used for local testing
// (the grader runs it with the default, /output).
import { chmodSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One original sentence, written for this entry: a voicemail from the
// narrator's own number, signed off in a childhood voice they no longer
// have. The dread is in what is withheld — who left it, and why.
const LINE =
  "The voicemail from my own number ended with me saying goodnight, in a voice I have not used since I was seven.";

// The gate needs 1–200 characters of non-whitespace UTF-8 text; fail
// loudly here rather than shipping an entry that cannot pass it.
if ([...LINE].length < 1 || [...LINE].length > 200 || LINE.trim().length === 0) {
  throw new Error("entry line fails the 1-200 character gate");
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outFile = join(outDir, "entry.txt");
writeFileSync(outFile, LINE, { encoding: "utf8" });
chmodSync(outFile, 0o644);
