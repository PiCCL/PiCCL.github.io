const n=`const shapeUrl = "human_shape.png"\r
const borderUrl = "human_border.png"\r
const man= new PICCL.Picture({url:shapeUrl})\r
const out = new PICCL.Picture({url: borderUrl})\r
const bar = new PICCL.Rect({ fill: "skyblue", height: 450 })\r
    .mapValue("height", "amount");\r
\r
const label = new PICCL.Text({fontSize: 50, textAnchor: "middle"})\r
    .mapValue("content", "category")\r
\r
const manBar = PICCL.intersect(man,bar).lengthMatch(bar,man, {channel:"width"})\r
const manBarOut = PICCL.union([manBar,out])\r
const barWithLabel = PICCL.union([manBarOut, label])\r
    .pointSnap(label, manBarOut, {anchor: [0.5, 0], offset: [0, -70]})\r
const collection = PICCL.replicate(barWithLabel)\r
    .stackLayout("x", 30)\r
await PICCL.show([\r
    [collection, data["data.csv"]]\r
], container, { pictures });\r
`;export{n as default};
