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
const starBasic = new PICCL.Picture({width: 50, url: 'star.png', colorMode: 'darkness'})\r
    .mapValue('color', 'country', { palette: palette2 })\r
\r
const stars = PICCL.repeat(starBasic, 'count').stackLayout('y', 100)\r
\r
const text1 = new PICCL.Text({ fontSize: 30, textAnchor: "middle" })\r
    .mapValue("content", "country");\r
\r
const logo = new PICCL.Picture({width: 150})\r
    .mapValue('url', 'logo')\r
const colGlyph = PICCL.union([bar, stars, text1, logo])\r
    .pointSnap(text1, bar, { anchor: [0.5, 0], offset: [0, -50] })\r
    .pointSnap(logo, text1, {sourceAnchor: [0.5, 1]})\r
    .pointSnap(stars, bar)\r
\r
const chart = PICCL.replicate(colGlyph)\r
    .stackLayout("x", 0);\r
\r
await PICCL.show([\r
    [chart, data["data.csv"]],\r
], container, { pictures, background: "rgb(235,235,227)" });\r
`;export{r as default};
