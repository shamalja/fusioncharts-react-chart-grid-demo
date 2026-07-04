import FusionCharts from "fusioncharts";
import Charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";
import salesData from "../data/salesData";

ReactFusioncharts.fcRoot(FusionCharts, Charts);

const chartConfig = {
  type: "column2d",
  width: "50%",
  height: "350",
  dataFormat: "json",
  dataSource: {
    chart: {
      caption: "Sales by Product",
      xAxisName: "Product",
      yAxisName: "Sales",
      theme: "fusion"
    },
    data: salesData.map((item) => ({
      label: item.product,
      value: item.sales
    }))
  }
};

function SalesChart() {
  return <ReactFusioncharts {...chartConfig} />;
}

export default SalesChart;