const r=`const palette1 = [\r
    "rgb(224,186,79)",\r
    "rgb(52,52,52)",\r
    "rgb(223,223,223)",\r
    "rgb(38,156,204)",\r
    "rgb(6,66,120)",\r
    "rgb(141,195,223)",\r
    "rgb(231,231,231)",\r
    "rgb(135,27,24)",\r
];\r
const palette2 = [\r
    "rgb(23,93,31)",\r
    "rgb(224,186,79)",\r
    "rgb(38,156,204)",\r
    "rgb(223,223,223)",\r
    "rgb(223,223,223)",\r
    "rgb(6,66,120)",\r
    "rgb(135,27,24)",\r
    "rgb(224,186,79)",\r
];\r
const bar = new PICCL.Rect({ width: 200, height: 750 })\r
    .mapValue("fill", "country", { palette: palette1 })\r
    .mapValue("height", "count")\r
\r
const flag = new PICCL.Picture({url: "Argentina.webp", width: 200}).mapValue("url", "logo")\r
\r
const star = new PICCL.Picture({url: "star.png", width: 50, color: "rgb(23,93,31)"}).mapValue("color", "country", { palette: palette2 })\r
const starStack = PICCL.repeat(star, "count").stackLayout("y", 100)\r
const bar_with_star = PICCL.union([bar, starStack]).pointSnap(starStack, bar)\r
\r
const text = new PICCL.Text({ fontSize: 30, textAnchor: "middle" })\r
    .mapValue("content", "country");\r
const colGlyph = PICCL.union([bar_with_star, text])\r
    .pointSnap(text, bar_with_star, { anchor: [0.5, 0], offset: [0, -70] })\r
\r
const colGlyph_with_flag = PICCL.union([colGlyph, flag]).pointSnap(flag, colGlyph, {sourceAnchor: [0.5, 0.5], targetAnchor:[0.5,0], offset:[0,-190]})\r
\r
const chart = PICCL.replicate(colGlyph_with_flag)\r
    .stackLayout("x", 0);\r
\r
await PICCL.show([\r
    [chart, data["data.csv"]],\r
], container, { pictures, background: "rgb(235,235,227)" });\r
`;export{r as default};
