# martendebruijn.nl

Personal portfolio / sandbox to try stuff :)

✅ index.html checked with [HTML validator](https://validator.w3.org/) and resulted without any errors or warnings (04/05/2021) \
✅ Validated with the [W3C CSS Validator](https://jigsaw.w3.org/css-validator/): CSS level 3 + SVG without errors (04/05/2021)

## Colour Contrast

| BG                 | FG                  | Contrast | Notes                                         | AA Large | AAA Large | AA Normal | AAA Normal |
| ------------------ | ------------------- | -------- | --------------------------------------------- | -------- | --------- | --------- | ---------- |
| hsl(231, 37%, 60%) | #000                | 5.60     | Normal text on blue/purple bg                 | ✅       | ✅        | ✅        | ❌         |
| hsl(29, 64%, 86%)  | #000                | 15.60    | Normal text on beige bg                       | ✅       | ✅        | ✅        | ✅         |
| hsl(37, 90%, 57%)  | #000                | 10.49    | Normal text on red/yellow bg                  | ✅       | ✅        | ✅        | ✅         |
| hsl(231, 37%, 60%) | hsl(252, 100%, 11%) | 5.23     | Normal link text on blue/purple bg            | ✅       | ✅        | ✅        | ❌         |
| hsl(29, 64%, 86%)  | hsl(225, 90%, 28%)  | 9.29     | Normal link text on beige bg                  | ✅       | ✅        | ✅        | ✅         |
| hsl(37, 90%, 57%)  | hsl(225, 90%, 28%)  | 6.24     | Normal link text on red/yellow bg             | ✅       | ✅        | ✅        | ❌         |
| hsl(231, 37%, 60%) | hsl(289, 100%, 11%) | 4.80     | Visited link text on blue/purple bg (special) | ✅       | ✅        | ✅        | ❌         |
| hsl(29, 64%, 86%)  | hsl(260, 90%, 28%)  | 10.18    | Visited link text on beige bg                 | ✅       | ✅        | ✅        | ✅         |
| hsl(37, 90%, 57%)  | hsl(0, 100%, 11%)   | 6.84     | Visited link text on red bg                   | ✅       | ✅        | ✅        | ❌         |
| hsl(231, 37%, 60%) | hsl(0, 100%, 11%)   | 4.81     | Hover link text on blue/purple bg (special)   | ✅       | ✅        | ✅        | ❌         |
| hsl(29, 64%, 86%)  | hsl(357, 60%, 19%)  | 10.80    | Hover link text on beige bg                   | ✅       | ✅        | ✅        | ✅         |
| hsl(37, 90%, 57%)  | hsl(357, 60%, 19%)  | 7.26     | Hover link text on red/yellow bg              | ✅       | ✅        | ✅        | ✅         |
| hsl(231, 37%, 60%) | hsl(0, 100%, 0%)    | 5.58     | Active link text on blue/purple bg (special)  | ✅       | ✅        | ✅        | ❌         |
| hsl(29, 64%, 86%)  | hsl(357, 90%, 28%)  | 7.37     | Active link text on beige bg                  | ✅       | ✅        | ✅        | ✅         |
| hsl(37, 90%, 57%)  | hsl(357, 90%, 28%)  | 4.95     | Active link text on red/yellow bg             | ✅       | ✅        | ✅        | ❌         |

<!-- old red bg color: #f26430 -->

## Performance

- Only load in the Google Fonts that are actually being used
- Changed all images sizes to the maximum possible size
- Minified and concatenated CSS
- Added compression (NPM package)
- Changed the main title from Anton (google font) to the web safe font Impact to prevent FAUC
  - Used this tool [link needed](#) to make a close match with the Anton Font
