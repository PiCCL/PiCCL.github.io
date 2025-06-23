const n=`const shapeUrl = "human_shape.png"\r
const borderUrl = "human_border.png"\r
\r
const bar = new PICCL.Rect({ fill: "skyblue", height: 460, width: 300})\r
    .mapValue("height", "amount");\r
\r
\r
const human_shape = new PICCL.Picture({url: "human_shape.png", width: 300})\r
const human_border = new PICCL.Picture({url: "human_border.png", width: 300})\r
\r
const human_with_bar = PICCL.intersect(human_shape, bar).pointSnap(human_shape, bar, {sourceAnchor: [0,0], targetAnchor: [0,0]}).lengthMatch(human_shape, bar, {channel: "width"})\r
const humain_with_border = PICCL.union([human_with_bar, human_border])\r
\r
const label = new PICCL.Text({fontSize: 60, textAnchor: "middle"})\r
    .mapValue("content", "category")\r
const barWithLabel = PICCL.union([humain_with_border, label])\r
    .pointSnap(label, humain_with_border, {anchor: [0.5, 0], offset: [0, -100]})\r
const collection = PICCL.replicate(barWithLabel)\r
    .stackLayout("x", 30)\r
\r
\r
await PICCL.show([\r
    [collection, data["data.csv"]]\r
], container, { pictures });\r
`;export{n as default};
