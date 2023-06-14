// JavaScript code to animate the bar graph
var bars = document.getElementsByClassName('bar');
var values = document.getElementsByClassName('value');

function Bars() {
    for (var i = 0; i < bars.length; i++) {
        var height = 0;
        var interval = setInterval(frame, 10);

        function frame() {
            if (height >= parseInt(bars[i].style.height)) {
                clearInterval(interval);
            } else {
                height++;
                bars[i].style.height = height + '%';
            }
        }
    }
}

Bars();


        // Chart data points
        const Area_dataPoints = [
            { x: 0, y: 80, value: 80 },
            { x: 1, y: 40, value: 40 },
            { x: 2, y: 60, value: 60 },
            { x: 3, y: 30, value: 30 },
            { x: 4, y: 50, value: 50 },
            { x: 5, y: 70, value: 70 },
            { x: 6, y: 90, value: 90 }
        ];

        // Chart dimensions
        const AreaWidth = 400;
        const AreaHeight = 300;

        // Calculate the scaling factor for x and y coordinates
        const xScale = AreaWidth / (Area_dataPoints.length - 1);
        const yScale = AreaHeight / 100;

        // Create a canvas context
        const canvas = document.getElementById("chart");
        const AreaCtx = canvas.getContext("2d");

        // Set canvas dimensions
        canvas.width = AreaWidth;
        canvas.height = AreaHeight;

        // Draw the area chart
        AreaCtx.beginPath();
        AreaCtx.moveTo(0, AreaHeight);

        for (let i = 0; i < Area_dataPoints.length; i++) {
            const point = Area_dataPoints[i];
            const x = point.x * xScale;
            const y = AreaHeight - point.y * yScale;

            AreaCtx.lineTo(x, y);
        }

        AreaCtx.lineTo(AreaWidth, AreaHeight);
        AreaCtx.fillStyle = "rgba(75, 192, 192, 0.3)";
        AreaCtx.fill();
        AreaCtx.strokeStyle = "rgba(75, 192, 192, 1)";
        AreaCtx.stroke();

        // Draw data point circles and labels
        for (let i = 0; i < Area_dataPoints.length; i++) {
            const point = Area_dataPoints[i];
            const x = point.x * xScale;
            const y = AreaHeight - point.y * yScale;

            // Draw data point circle
            AreaCtx.beginPath();
            AreaCtx.arc(x, y, 4, 0, 2 * Math.PI);
            AreaCtx.fillStyle = "rgba(75, 192, 192, 1)";
            AreaCtx.fill();

            // Draw data point label
            AreaCtx.font = "10px Arial";
            AreaCtx.fillStyle = "black";
            AreaCtx.textAlign = "center";
            AreaCtx.fillText(point.value, x, y - 10);
        }

 
 
 // Chart data points for polar area chart
 const polarDataPoints = [
    { label: "Point 1", value: 10, color: "#FF6384" },
    { label: "Point 2", value: 20, color: "#36A2EB" },
    { label: "Point 3", value: 15, color: "#FFCE56" },
    { label: "Point 4", value: 25, color: "#4BC0C0" },
    { label: "Point 5", value: 30, color: "#9966FF" }
];

// Chart dimensions for polar area chart
const polarWidth = 400;
const polarHeight = 400;
const polarRadius = Math.min(polarWidth, polarHeight) / 2;

// Calculate total value for polar area chart
const polarTotalValue = polarDataPoints.reduce((sum, point) => sum + point.value, 0);

// Create a canvas context for polar area chart
const polarCanvas = document.getElementById("polar-area-chart");
const polarCtx = polarCanvas.getContext("2d");

// Set canvas dimensions for polar area chart
polarCanvas.width = polarWidth;
polarCanvas.height = polarHeight;

// Set starting angle for polar area chart
let polarStartAngle = -Math.PI / 2;

// Draw each sector for polar area chart
for (let i = 0; i < polarDataPoints.length; i++) {
    const point = polarDataPoints[i];
    const polarSectorAngle = (2 * Math.PI * point.value) / polarTotalValue;

    // Draw sector for polar area chart
    polarCtx.beginPath();
    polarCtx.moveTo(polarRadius, polarRadius);
    polarCtx.arc(polarRadius, polarRadius, polarRadius, polarStartAngle, polarStartAngle + polarSectorAngle);
    polarCtx.closePath();
    polarCtx.fillStyle = point.color;
    polarCtx.fill();

    // Calculate label position for polar area chart
    const polarLabelAngle = polarStartAngle + polarSectorAngle / 2;
    const polarLabelX = polarRadius + (polarRadius / 2) * Math.cos(polarLabelAngle);
    const polarLabelY = polarRadius + (polarRadius / 2) * Math.sin(polarLabelAngle);

    // Draw data point label for polar area chart
    polarCtx.font = "12px Arial";
    polarCtx.fillStyle = "#fff";
    polarCtx.textAlign = "center";
    polarCtx.fillText(point.label + " (" + point.value + ")", polarLabelX, polarLabelY);

    // Update starting angle for next sector
    polarStartAngle += polarSectorAngle;
}

// Chart data points for pie chart
const pieDataPoints = [
    { label: "Slice 1", value: 10, color: "#FF6384" },
    { label: "Slice 2", value: 20, color: "#36A2EB" },
    { label: "Slice 3", value: 15, color: "#FFCE56" },
    { label: "Slice 4", value: 25, color: "#4BC0C0" },
    { label: "Slice 5", value: 30, color: "#9966FF" }
];

// Chart dimensions for pie chart
const pieWidth = 400;
const pieHeight = 400;
const pieRadius = Math.min(pieWidth, pieHeight) / 2;

// Calculate total value for pie chart
const pieTotalValue = pieDataPoints.reduce((sum, point) => sum + point.value, 0);

// Create a canvas context for pie chart
const pieCanvas = document.getElementById("pie-chart");
const pieCtx = pieCanvas.getContext("2d");

// Set canvas dimensions for pie chart
pieCanvas.width = pieWidth;
pieCanvas.height = pieHeight;

// Set starting angle for pie chart
let pieStartAngle = -Math.PI / 2;

// Draw each slice for pie chart
for (let i = 0; i < pieDataPoints.length; i++) {
    const point = pieDataPoints[i];
    const pieSliceAngle = (2 * Math.PI * point.value) / pieTotalValue;

    // Draw slice for pie chart
    pieCtx.beginPath();
    pieCtx.moveTo(pieRadius, pieRadius);
    pieCtx.arc(pieRadius, pieRadius, pieRadius, pieStartAngle, pieStartAngle + pieSliceAngle);
    pieCtx.closePath();
    pieCtx.fillStyle = point.color;
    pieCtx.fill();

    // Calculate label position for pie chart
    const pieLabelAngle = pieStartAngle + pieSliceAngle / 2;
    const pieLabelX = pieRadius + (pieRadius / 2) * Math.cos(pieLabelAngle);
    const pieLabelY = pieRadius + (pieRadius / 2) * Math.sin(pieLabelAngle);

    // Draw data point label for pie chart
    pieCtx.font = "12px Arial";
    pieCtx.fillStyle = "#fff";
    pieCtx.textAlign = "center";
    pieCtx.fillText(point.label + " (" + point.value + ")", pieLabelX, pieLabelY);

    // Update starting angle for next slice
    pieStartAngle += pieSliceAngle;
}

 // Chart data points for line chart
 const lineDataPoints = [
    { label: "Point 1", value: 10, color: "#FF6384" },
    { label: "Point 2", value: 20, color: "#36A2EB" },
    { label: "Point 3", value: 15, color: "#FFCE56" },
    { label: "Point 4", value: 25, color: "#4BC0C0" },
    { label: "Point 5", value: 30, color: "#9966FF" }
];

// Chart dimensions for line chart
const lineWidth = 400;
const lineHeight = 400;

// Calculate maximum value for y-axis scaling
const lineMaxValue = Math.max(...lineDataPoints.map(point => point.value));

// Create a canvas context for line chart
const lineCanvas = document.getElementById("line-chart");
const lineCtx = lineCanvas.getContext("2d");

// Set canvas dimensions for line chart
lineCanvas.width = lineWidth;
lineCanvas.height = lineHeight;

// Draw line for line chart
lineCtx.beginPath();
lineCtx.moveTo(0, lineHeight - (lineDataPoints[0].value / lineMaxValue) * lineHeight);

for (let i = 1; i < lineDataPoints.length; i++) {
    const point = lineDataPoints[i];
    const x = (lineWidth / (lineDataPoints.length - 1)) * i;
    const y = lineHeight - (point.value / lineMaxValue) * lineHeight;
    lineCtx.lineTo(x, y);
}

lineCtx.strokeStyle = "#FF6384";
lineCtx.lineWidth = 2;
lineCtx.stroke();

// Draw data point labels for line chart
for (let i = 0; i < lineDataPoints.length; i++) {
    const point = lineDataPoints[i];
    const x = (lineWidth / (lineDataPoints.length - 1)) * i;
    const y = lineHeight - (point.value / lineMaxValue) * lineHeight;

    lineCtx.fillStyle = point.color;
    lineCtx.beginPath();
    lineCtx.arc(x, y, 5, 0, Math.PI * 2);
    lineCtx.closePath();
    lineCtx.fill();

    lineCtx.font = "12px Arial";
    lineCtx.fillStyle = "#fff";
    lineCtx.textAlign = "center";
    lineCtx.fillText(point.label + " (" + point.value + ")", x, y - 10);
}

const scatterDataPoints = [
    { x: 50, y: 100, value: 5, color: "#FF6384" },
    { x: 100, y: 200, value: 10, color: "#36A2EB" },
    { x: 150, y: 150, value: 7, color: "#FFCE56" },
    { x: 200, y: 250, value: 12, color: "#4BC0C0" },
    { x: 250, y: 300, value: 9, color: "#9966FF" }
];

// Chart dimensions for scatter chart
const scatterWidth = 400;
const scatterHeight = 400;

// Create a canvas context for scatter chart
const scatterCanvas = document.getElementById("scatter-chart");
const scatterCtx = scatterCanvas.getContext("2d");

// Set canvas dimensions for scatter chart
scatterCanvas.width = scatterWidth;
scatterCanvas.height = scatterHeight;

// Draw data points for scatter chart
for (let i = 0; i < scatterDataPoints.length; i++) {
    const point = scatterDataPoints[i];

    scatterCtx.fillStyle = point.color;
    scatterCtx.beginPath();
    scatterCtx.arc(point.x, scatterHeight - point.y, point.value, 0, Math.PI * 2);
    scatterCtx.closePath();
    scatterCtx.fill();

    scatterCtx.font = "12px Arial";
    scatterCtx.fillStyle = "#000";
    scatterCtx.textAlign = "center";
    scatterCtx.fillText("(" + point.x + ", " + point.y + ") - " + point.value, point.x, scatterHeight - point.y - point.value - 10);
}

  // Chart data points
  const radar_dataPoints = [
    { label: "Point 1", value: 10, color: "#FF6384" },
    { label: "Point 2", value: 20, color: "#36A2EB" },
    { label: "Point 3", value: 15, color: "#FFCE56" },
    { label: "Point 4", value: 25, color: "#4BC0C0" },
    { label: "Point 5", value: 30, color: "#9966FF" }
];

// Chart dimensions
const radarChartWidth = 400;
const radarChartHeight = 300;
const radarChartRadius = Math.min(radarChartWidth, radarChartHeight) / 3;

// Create a canvas context
const radarCanvas = document.getElementById("radar-chart");
const radarCtx = radarCanvas.getContext("2d");

// Set radarCanvas dimensions
radarCanvas.width = radarChartWidth;
radarCanvas.height = radarChartHeight;

// Calculate total value
const totalValue = radar_dataPoints.reduce((sum, point) => sum + point.value, 0);

// Calculate angle for each data point
const angle = (2 * Math.PI) / radar_dataPoints.length;

// Draw axes
radarCtx.strokeStyle = "#ccc";
radarCtx.lineWidth = 1;

for (let i = 0; i < radar_dataPoints.length; i++) {
    const point = radar_dataPoints[i];
    const pointAngle = i * angle;

    radarCtx.beginPath();
    radarCtx.moveTo(radarChartWidth / 2, radarChartHeight / 2);
    radarCtx.lineTo((radarChartWidth / 2) + (radarChartRadius * Math.cos(pointAngle)), (radarChartHeight / 2) + (radarChartRadius * Math.sin(pointAngle)));
    radarCtx.closePath();
    radarCtx.stroke();
}

// Draw data points
for (let i = 0; i < radar_dataPoints.length; i++) {
    const point = radar_dataPoints[i];
    const pointAngle = i * angle;
    const valueRatio = point.value / totalValue;

    radarCtx.fillStyle = point.color;
    radarCtx.beginPath();
    radarCtx.moveTo(radarChartWidth / 2, radarChartHeight / 2);
    radarCtx.lineTo((radarChartWidth / 2) + (radarChartRadius * valueRatio * Math.cos(pointAngle)), (radarChartHeight / 2) + (radarChartRadius * valueRatio * Math.sin(pointAngle)));
    radarCtx.closePath();
    radarCtx.fill();

    radarCtx.font = "12px Arial";
    radarCtx.fillStyle = "#000";
    radarCtx.textAlign = "center";
    radarCtx.fillText(point.label + " (" + point.value + ")", (radarChartWidth / 2) + (radarChartRadius * 1.2 * Math.cos(pointAngle)), (radarChartHeight / 2) + (radarChartRadius * 1.2 * Math.sin(pointAngle)));
}