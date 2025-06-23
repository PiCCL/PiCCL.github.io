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
\r
const bar = new PICCL.Rect({ width: 100, height: 1200, opacity: 1 })\r
    .mapValue("height", "sold")\r
    .mapValue("fill", "country", { palette });\r
\r
const label1 = new PICCL.Text({ fontSize: 100, fontFamily: "times", suffix: "M", fontWeight: "bold", textAnchor: "end" })\r
    .mapValue("content", "sold")\r
    .fix("angle", -90);\r
\r
const flag = new PICCL.Picture({url: "canada.webp"}).mapValue("url", "country")\r
const cup = new PICCL.Picture({url: "cup.jpg", width: 520})\r
\r
const glyph = PICCL.union([bar, label1, flag]).lengthMatch(flag, bar, {channel: "width"})\r
    .pointSnap(label1, bar, { anchor: [1, 1], offset: [-20, 280] })\r
const collection = PICCL.replicate(glyph)\r
    .circularLayout(500, 10 ,250)\r
\r
const final_pic = PICCL.union([collection, cup]).pointSnap(cup, collection)\r
\r
await PICCL.show([\r
    [collection, data["data.csv"]],\r
    // objects to show\r
], container, { pictures, padding: [300, 300, 300, 300], background: "rgb(245,245,245)" });\r
`;export{n as default};
