const r=`const shapeUrl = "human_shape.png"\r
const borderUrl = "human_border.png"\r
\r
const bar = new PICCL.Rect({ fill: "skyblue", height: 450, width: 270 })\r
    .mapValue("height", "amount");\r
\r
const barshape = new PICCL.Picture({url: shapeUrl, height: 450, width: 270})\r
const barborder = new PICCL.Picture({url: borderUrl, height: 450, width: 270})\r
const shapeins = PICCL.intersect(bar, barshape)\r
const bordershape = PICCL.union([barborder, shapeins])\r
\r
const label = new PICCL.Text({fontSize: 50, textAnchor: "middle"})\r
    .mapValue("content", "category")\r
const barWithLabel = PICCL.union([bordershape, label])\r
    .pointSnap(label, bordershape, {anchor: [0.5, 0], offset: [0, -70]})\r
const collection = PICCL.replicate(barWithLabel)\r
    .stackLayout("x", 30)\r
await PICCL.show([\r
    [collection, data["data.csv"]]\r
], container, { pictures });\r
`;export{r as default};
