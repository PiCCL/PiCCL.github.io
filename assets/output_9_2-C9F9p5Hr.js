const n=`const shapeUrl = "human_shape.png"\r
const borderUrl = "human_border.png"\r
\r
const sbar = new PICCL.Rect({ fill: "skyblue", height:450, width:270 })\r
    .mapValue("height", "amount");\r
\r
const shape = new PICCL.Picture({url:shapeUrl,height:450,})\r
\r
const border =new PICCL.Picture({url:borderUrl,height:450,})\r
\r
const ssbar = PICCL.intersect(sbar,shape)\r
\r
\r
\r
\r
const bar = PICCL.union([ssbar,border])\r
\r
\r
const label = new PICCL.Text({fontSize: 50, textAnchor: "middle"})\r
    .mapValue("content", "category")\r
const barWithLabel = PICCL.union([bar, label])\r
    .pointSnap(label, bar, {anchor: [0.5, 0], offset: [0, -70]})\r
const collection = PICCL.replicate(barWithLabel)\r
    .stackLayout("x", 30)\r
await PICCL.show([\r
    [collection, data["data.csv"]]\r
], container, { pictures });\r
`;export{n as default};
