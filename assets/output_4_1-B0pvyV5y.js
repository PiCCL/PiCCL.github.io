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
const pic1 = new PICCL.Picture({url: "clockPlate.png"}).shadowEffect(-4, -4, 4)\r
const pic2 = new PICCL.Picture({url: "clockArms.png"}).shadowEffect(-4, -4, 4)\r
\r
const circle = new PICCL.Circle({ r: 200, innerRadius: 120 });\r
const [pieChart, arc] = PICCL.divide(circle, "angular", { sizeEncode: "duration" })\r
    arc.mapValue("fill", "type", { palette });\r
\r
const newChart = PICCL.union([pic1, pieChart,pic2]).pointSnap(pic1, pieChart).pointSnap(pic2, pieChart)\r
\r
await PICCL.show([\r
    [newChart, data["data.csv"]],\r
], container, { background: "rgb(62,152,202)", padding: 100, pictures });\r
`;export{r as default};
