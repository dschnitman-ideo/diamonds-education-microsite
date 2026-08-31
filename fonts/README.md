# Fonts

This site is built for **GT Canon** (display serif, headlines) and **GT Standard**
(UI sans, everything else) from Grilli Type. These are paid, licensed fonts and are
not included in this repo — drop your licensed woff2 files into this folder using
these exact filenames and they'll activate automatically (see `@font-face` rules at
the top of `css/styles.css`):

```
fonts/GTCanon-Light.woff2
fonts/GTCanon-Regular.woff2
fonts/GTCanon-Medium.woff2
fonts/GTStandard-Regular.woff2
fonts/GTStandard-Medium.woff2
fonts/GTStandard-Bold.woff2
```

If you have a webfont kit from Grilli Type / fonts.com with different static
weights, either rename the files to match above or update the `src` paths in
`css/styles.css`.

Until real files are added, the site falls back to system serif/sans stacks that
approximate the same proportions, so everything still reads correctly.
