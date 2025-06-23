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
const badge = new PICCL.Picture({width:100}).mapValue("url", "logo")\r
const bar = new PICCL.Rect({ width: 200, height: 750 })\r
    .mapValue("fill", "country", { palette: palette1 })\r
    .mapValue("height", "count")\r
const K = new PICCL.Rect({ width: 200, height: 750 })\r
    .mapValue("fill", "country", { palette: palette2 })\r
    .mapValue("height", "count")\r
const star = new PICCL.Picture({url:"star.png","width":50})\r
const starK = PICCL.intersect(star,K)\r
const stars = PICCL.repeat(starK, "count").stackLayout("y", 100)\r
const starBarK = PICCL.union([bar,stars]).pointSnap(bar,stars,{anchor:[0.5,0], offset:[0,-50]})\r
const text1 = new PICCL.Text({ fontSize: 30, textAnchor: "middle" })\r
    .mapValue("content", "country");\r
const text2 = PICCL.union([text1, badge]).pointSnap(badge, text1,{ sourceAnchor : [0.5,1], targetAnchor:[0.5,0]})\r
const colGlyph = PICCL.union([starBarK, text2])\r
    .pointSnap(text2, starBarK, { sourceAnchor : [0.5,1], targetAnchor:[0.5,0], offset: [0, -50] })\r
const chart = PICCL.replicate(colGlyph)\r
    .stackLayout("x", 0);\r
\r
await PICCL.show([\r
    [chart, data["data.csv"]],\r
], container, { pictures, background: "rgb(235,235,227)" });\r
`;export{r as default};
