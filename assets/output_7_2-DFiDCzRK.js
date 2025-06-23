const n=`const shapeUrl = "human_shape.png"\r
const borderUrl = "human_border.png"\r
\r
const shape = new PICCL.Picture({url:shapeUrl});\r
const bar = new PICCL.Rect({ fill: "skyblue", height: 450,width:400})\r
    .mapValue("height", "amount");\r
\r
const border = new PICCL.Picture({url:borderUrl});\r
\r
const human1 = PICCL.intersect(shape,bar).pointSnap(shape,bar,{anchor:[0.5,0]});\r
\r
const human = PICCL.union([human1,border]).pointSnap(human1,border);\r
const label = new PICCL.Text({fontSize: 50, textAnchor: "middle"})\r
    .mapValue("content", "category")\r
const barWithLabel = PICCL.union([human, label])\r
    .pointSnap(label, human, {anchor: [0.5, 0], offset: [0, -70]})\r
\r
\r
const collection = PICCL.replicate(barWithLabel)\r
    .stackLayout("x", 30)\r
\r
\r
\r
await PICCL.show([\r
    [collection, data["data.csv"]]\r
], container, { pictures });\r
`;export{n as default};
