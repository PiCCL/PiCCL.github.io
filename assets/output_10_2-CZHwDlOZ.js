const n=`const shapeUrl = "human_shape.png"\r
const borderUrl = "human_border.png"\r
\r
const bar = new PICCL.Rect({ fill: "skyblue", height: 450 })\r
    .mapValue("height", "amount");\r
\r
const shape = new PICCL.Picture({url: shapeUrl})\r
const border = new PICCL.Picture({url: borderUrl})\r
\r
const combine = PICCL.intersect(shape, bar)\r
    .pointSnap(bar, shape, {anchor:[0.5,0]})\r
    .lengthMatch(bar, shape, { channel: "width"})\r
const combine2 = PICCL.union([combine, border])\r
\r
const label = new PICCL.Text({fontSize: 50, textAnchor: "middle"})\r
    .mapValue("content", "category")\r
const barWithLabel = PICCL.union([combine2, label])\r
    .pointSnap(label, combine2, {anchor: [0.5, 0], offset: [0, -70]})\r
const collection = PICCL.replicate(barWithLabel)\r
    .stackLayout("x", 30)\r
await PICCL.show([\r
    [collection, data["data.csv"]]\r
], container, { pictures });\r
`;export{n as default};
