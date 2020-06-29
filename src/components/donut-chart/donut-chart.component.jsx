import React, { useState, useEffect } from "react";
import { Chart, Doughnut } from "react-chartjs-2";

const DoughnutChart = ({ chartData }) => {
  // const { totals, approvalStatusTotals } = chartData;

  // console.log("chartData", chartData);
  // console.log("chartData", chartData);
  const [data, setData] = useState();

  // useEffect(() => {
  //   setData(chartData);
  // }, [setData, chartData]);

  // Plugin for adding center text inside donut
  let originalDoughnutDraw = Chart.controllers.doughnut.prototype.draw;
  Chart.helpers.extend(Chart.controllers.doughnut.prototype, {
    draw: function () {
      originalDoughnutDraw.apply(this, arguments);

      let chart = this.chart.chart;
      let ctx = chart.ctx;
      let width = chart.width;
      let height = chart.height;

      let fontSize = (height / 60).toFixed(2);
      ctx.font = fontSize + "em Roboto";
      ctx.textBaseline = "middle";

      let text = chart.config.data.text,
        textX = Math.round((width - ctx.measureText(text).width) / 2),
        textY = height / 2;
      ctx.fillStyle = "black";

      ctx.fillText(text, textX, textY);
    },
  });

  useEffect(() => {
    const chart = () =>
      setData({
        datasets: [
          {
            data: chartData
              ? Object.values(chartData.approvalStatusTotals)
              : [],
            backgroundColor: ["red", "teal", "orange"],
          },
        ],

        // These labels appear in the legend and in the tooltips when hovering different arcs
        labels: chartData ? Object.keys(chartData.approvalStatusTotals) : [],
        text: chartData ? `${chartData.totals}` : "",
      });
    chart();
  }, [chartData]);

  return (
    <div>
      <Doughnut
        data={data || {}}
        options={{
          responsive: true,
          cutoutPercentage: 80,
          circumference: 2 * Math.PI,
          legend: {
            display: false,
          },
          height: 700,
          title: {
            display: true,
            text: "56",
            position: 5,
          },
        }}
      ></Doughnut>
    </div>
  );
};

export default DoughnutChart;
