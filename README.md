# martendebruijn.nl

Personal portfolio / sandbox to try stuff :)

✅ index.html checked with [HTML validator](https://validator.w3.org/) and resulted without any errors or warnings (04/05/2021) \
✅ Validated with the [W3C CSS Validator](https://jigsaw.w3.org/css-validator/): CSS level 3 + SVG without errors (04/05/2021)

## Colour Contrast

| BG      | FG      | Contrast | Notes                                         |
| ------- | ------- | -------- | --------------------------------------------- |
| #7580bf | #000    | 5.60     | Normal text on blue/purple bg                 |
| #f2dac4 | #000    | 15.60    | Normal text on beige bg                       |
| #f4a82e | #000    | 10.49    | Normal text on red/yellow bg                  |
| #7580bf | #0b0037 | 5.23     | Normal link text on blue/purple bg            |
| #f2dac4 | #07288a | 9.29     | Normal link text on beige bg                  |
| #f4a82e | #07288a | 6.24     | Normal link text on red/yellow bg             |
| #7580bf | #2d0037 | 4.80     | Visited link text on blue/purple bg (special) |
| #f2dac4 | #32078a | 10.18    | Visited link text on beige bg                 |
| #f4a82e | #32078a | 6.84     | Visited link text on red bg                   |
| #7580bf | #370000 | 4.81     | Hover link text on blue/purple bg (special)   |
| #f2dac4 | #4f1417 | 10.80    | Hover link text on beige bg                   |
| #f4a82e | #4f1417 | 7.26     | Hover link text on red/yellow bg              |
| #7580bf | #020000 | 5.58     | Active link text on blue/purple bg (special)  |
| #f2dac4 | #8a070e | 7.37     | Active link text on beige bg                  |
| #f4a82e | #8a070e | 4.95     | Active link text on red/yellow bg             |

<!-- old red bg color: #f26430 -->

## Performance

<details>
<summary>Initial 4/5/2021</summary>

After setting the throttling on Slow 3G in Chrome DevTools > Network.
27 req
3.7 MB transferred
4.4 MB resources
Finish 1.3 min
DOMContentLoaded: 4.40s
Load: 1.2 min

profiel-foto.png 2.3MB 1.2min
ontdek.png 427kB 33.99s
aspektu 266kB 27.59s
ringo 218kB 24.65s
marijns 171kB 20.86s

- check which of the fonts i actually use and delete the remaining ones.

</details>

<!--
  fonts used:
  Roboto
  regular 400
  regular 400 italic
  bold 700
  bold 700 italic


  Anton
  regular 400

  https://sia.codes/posts/making-google-fonts-faster/

  The portrait picture of me takes ages (1.2min and 2.3MB) to load. And is huge.
  My CSS states that the picture can't exceed 300x400. So we can resize the image hosted to be 300x400.

  After changing the image to 300x400 and changing the google fonts:

  24 req -
  1.5MB transferred -
  2.1 MB resources -
  Finish 33.72s -
  DOMContentLoaded: 4,64s +
  Load: 29.62s -

  profiel-foto.png 121 kB 15.15s

  https://web.dev/browser-level-image-lazy-loading/

  https://webdesign.tutsplus.com/tutorials/quick-tip-how-to-use-html5-picture-for-responsive-images--cms-21015




 -->
