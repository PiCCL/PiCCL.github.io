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
const bar = new PICCL.Rect({ width: 200, height: 160 })\r
    .mapValue("fill", "country", { palette: palette1 })\r
    .mapValue("count")\r
const budges = new PICCL.Picture({width: 150})\r
    .mapValue("url", "logo")\r
const stars = new PICCL.Picture({ url: "star.png", width: 50})\r
    .mapValue("color", "country", {palette: palette2})\r
\r
const group1 = PICCL.union([bar, stars])\r
    .pointSnap(stars, bar)\r
\r
const sum1 = PICCL.repeat(group1, "count")\r
    .stackLayout("y",0);\r
\r
const text1 = new PICCL.Text({ fontSize: 30, textAnchor: "middle" })\r
    .mapValue("content", "country");\r
\r
const colGlyph = PICCL.union([sum1, text1, budges])\r
    .pointSnap(text1, sum1, { anchor: [0.5, 0], offset: [0, -50] })\r
    .pointSnap(budges,text1, {offset: [0,-150]})\r
\r
\r
const chart = PICCL.replicate(colGlyph)\r
    .stackLayout("x", 0);\r
\r
await PICCL.show([\r
    [chart, data["data.csv"]],\r
], container, { pictures, background: "rgb(235,235,227)" });\r
`;export{r as default};
