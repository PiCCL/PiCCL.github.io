const n=`const shapeUrl = "human_shape.png"\r
const borderUrl = "human_border.png"\r
\r
const humanShape=new PICCL.Picture({url:shapeUrl})\r
const humanBorder=new PICCL.Picture({url:borderUrl})\r
\r
const bar = new PICCL.Rect({ fill: "skyblue", height: 450 })\r
    .mapValue("height", "amount");\r
\r
const humanBar=PICCL.intersect(humanShape,bar)\r
    .lineSnap(bar,humanShape,'y',{sourceAnchor:"bottom",targetAnchor:"bottom"})\r
    .lengthMatch(bar,humanShape,{channel:'width'})\r
const humanBarWithBorder=PICCL.union([humanBar,humanBorder])\r
    .lineSnap(humanBorder,humanBar,'y',{sourceAnchor:"bottom",targetAnchor:"bottom"})\r
\r
const label = new PICCL.Text({fontSize: 50, textAnchor: "middle"})\r
    .mapValue("content", "category")\r
const barWithLabel = PICCL.union([humanBarWithBorder, label])\r
    .pointSnap(label, humanBarWithBorder, {anchor: [0.5, 0], offset: [0, -70]})\r
const collection = PICCL.replicate(barWithLabel)\r
    .stackLayout("x", 30)\r
await PICCL.show([\r
    [collection, data["data.csv"]]\r
], container, { pictures });\r
`;export{n as default};
