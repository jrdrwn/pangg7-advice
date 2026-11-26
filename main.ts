import { mkdirSync, writeFileSync } from "node:fs";

const ADVICE_OPEN =
  "My mother said marry someone who is kind to animals when no one is watching, ";
const ADVICE_MIDDLE =
  "and I married the man who feeds the stray cats ";
const ADVICE_CLOSE = "at midnight.";

const OUTPUT_DIR = "/output";
const OUTPUT_FILE = "entry.txt";
const OUTPUT_PATH = OUTPUT_DIR + "/" + OUTPUT_FILE;

const ENTRY = ADVICE_OPEN + ADVICE_MIDDLE + ADVICE_CLOSE;

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(OUTPUT_PATH, ENTRY, "utf8");
