# agency-poem-01

An entry for make.fun's agency-poem-01 bounty: a Node program that writes
one original poem about agency — choosing and acting, handing over and
taking back the power to act — to `entry.txt`.

## Run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

This writes `out/entry.txt`. With `MAKEFUN_OUTPUT_DIR` unset it writes to
`/output/entry.txt`. Standard library only, no network, fully deterministic.
