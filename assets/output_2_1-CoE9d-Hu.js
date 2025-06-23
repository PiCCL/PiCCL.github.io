const r=`const palette = [\r
    "rgb(4,20,43)",\r
    "rgb(27,71,126)",\r
    "rgb(118,188,213)",\r
    "rgb(163,174,184)",\r
    "rgb(239,208,69)",\r
    "rgb(176,63,26)",\r
];\r
\r
const clockArmUrl = "clockArms.png"\r
const clockPlateUrl = "clockPlate.png"\r
\r
const armrect = new PICCL.Picture({url: clockArmUrl, width: 700, height: 700, x: -350, y: -350}).shadowEffect()\r
const platerect = new PICCL.Picture({url: clockPlateUrl, width: 700, height: 700, x: -350, y: -350}).shadowEffect()\r
\r
const circle = new PICCL.Circle({ r: 300, innerRadius: 180 });\r
const [pieChart, arc] = PICCL.divide(circle, "angular", { sizeEncode: "duration" })\r
    arc.mapValue("fill", "type", { palette });\r
\r
const clock = PICCL.union([platerect, pieChart, armrect])\r
await PICCL.show([\r
    [pieChart, data["data.csv"]],\r
], container, { background: "rgb(62,152,202)", padding: 100, pictures });\r
`;export{r as default};
