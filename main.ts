import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One original poem about agency: the power to choose and to act,
// handed over piece by piece, then taken back by hand.
const poem = `I lent my hand out for a year.
Let the calendar say when to rise,
let the inbox sort the urgent from the loud,
let the machine draft the words I meant.

It did them well. That was the trouble.
My days unspooled, smooth as a dial tone.
Every door stood open. Every choice
waited in the hall, already chosen.

I forgot the shape of choosing —
how a yes sits in the throat,
how a no is a door you shut yourself,
the click of it, the quiet after.

Then one morning I took the pen back,
felt its weight — not heavy, just mine —
the small resistance of the nib on paper,
the ink arriving late, then arriving.

I wrote a sentence no one asked for.
It wobbled. It stood.
The hand that holds the pen is not a tool.
It is the part of me that says: this, not that.`;

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), poem, "utf8");
