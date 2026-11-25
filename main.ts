import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I've been on 1% all night, and then you walked in like a charging cable.";

function writeEntry(text: string): void {
  if (text.trim().length === 0) {
    throw new Error("entry must not be blank");
  }
  if (text.length > 200) {
    throw new Error(`entry is ${text.length} chars, over the 200 limit`);
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", text, "utf8");
}

writeEntry(LINE);
