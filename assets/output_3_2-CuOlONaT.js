const r=`const shapeUrl = "human_shape.png"\r
const borderUrl = "human_border.png"\r
\r
const bar = new PICCL.Rect({ fill: "skyblue", height: 450 , width: 300})\r
    .mapValue("height", "amount");\r
\r
const label = new PICCL.Text({fontSize: 50, textAnchor: "middle"})\r
    .mapValue("content", "category")\r
const shape = new PICCL.Picture({url: shapeUrl})\r
const border = new PICCL.Picture({url: borderUrl})\r
const shapeBar = PICCL.intersect(shape, bar)\r
const shapeBorderBar = PICCL.union([shapeBar, border]).pointSnap(shapeBar, border, {anchor:[0,0.5]})\r
const barWithLabel = PICCL.union([shapeBorderBar, label])\r
    .pointSnap(label, shapeBorderBar, {anchor: [0.5, 0], offset: [0, -70]})\r
const collection = PICCL.replicate(barWithLabel)\r
    .stackLayout("x", 30)\r
await PICCL.show([\r
    [collection, data["data.csv"]]\r
], container, { pictures });\r
`;export{r as default};
