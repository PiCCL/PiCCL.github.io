const n=`const palette1 = [\r
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
const text1 = new PICCL.Text({ fontSize: 30, textAnchor: "middle" })\r
    .mapValue("content", "country");\r
const colGlyph = PICCL.union([bar, text1])\r
    .pointSnap(text1, bar, { anchor: [0.5, 0], offset: [0, -50] })\r
\r
const gq = new PICCL.Picture({}).mapValue("url","logo")\r
\r
const xx = new PICCL.Picture({url:"star.png",width:50,colorMode:"darkness"})\r
    .mapValue("color", "country", { palette: palette2 })\r
\r
const xs = PICCL.repeat(xx,"count")\r
.stackLayout("y",100)\r
\r
const endGlyph = PICCL.union([colGlyph,gq, xs])\r
.lengthMatch(gq,colGlyph,{channel:"width"})\r
.pointSnap(gq,colGlyph,{sourceAnchor:[0.5,1],targetAnchor:[0.5,0], offset:[0,-50]})\r
.pointSnap(xs,colGlyph,{sourceAnchor:[0.5,0],targetAnchor:[0.5,0], offset:[0,100]})\r
\r
\r
\r
\r
const chart = PICCL.replicate(endGlyph)\r
    .stackLayout("x", 0);\r
\r
await PICCL.show([\r
    [chart, data["data.csv"]],\r
], container, { pictures, background: "rgb(235,235,227)" });\r
`;export{n as default};
