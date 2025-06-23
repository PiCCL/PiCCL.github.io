const n=`const palette = [\r
    "rgb(244,208,149)",\r
    "rgb(132,182,225)",\r
    "rgb(158,216,210)",\r
    "rgb(243,157,166)",\r
    "rgb(180,197,148)",\r
    "rgb(244,187,220)",\r
];\r
\r
const whiskyUrl = "cup.jpg"\r
const whisky = new PICCL.Picture({url:whiskyUrl}).edgeBlurEffect(6)\r
const bar = new PICCL.Rect({ width: 100, height: 1200, opacity: 1 })\r
    .mapValue("height", "sold")\r
    .mapValue("fill", "country", { palette });\r
const flag = new PICCL.Picture({width:100}).mapValue("url","country")\r
const barFlag = PICCL.union([bar,flag]).orientMatch(flag,bar,90).pointSnap(flag,bar,{sourceAnchor:[1,0.5],targetAnchor:[0.5,0]})\r
const label1 = new PICCL.Text({ fontSize: 100, fontFamily: "times", suffix: "M", fontWeight: "bold", textAnchor: "end" })\r
    .mapValue("content", "sold")\r
    .fix("angle", -90);\r
\r
const glyph = PICCL.union([barFlag, label1])\r
    .pointSnap(label1, barFlag, { anchor: [1, 1], offset: [-20, 280] })\r
const collection = PICCL.replicate(glyph)\r
    .circularLayout(500, 30,270)\r
    const collectionWhisky = PICCL.union([whisky,collection]).pointSnap(collection,whisky,{anchor:[0.5,0.5]})\r
\r
await PICCL.show([\r
    [collection, data["data.csv"]],\r
    // objects to show\r
], container, { pictures, padding: [300, 300, 300, 300], background: "rgb(245,245,245)" });\r
`;export{n as default};
