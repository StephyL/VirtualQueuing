import SingleChartContainer from "../components/SingleChartContainer";
import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import TitleforTheChart from "../components/Title";
import { chartAnimation } from "../../../constant";
import theme from "../../../theme";

const CustomerTableBarChart = ({ customerData }) => {
  return (
    <SingleChartContainer
      variants={chartAnimation}
      initial="before"
      animate="after"
      whileHover="hover"
      containerWidth="48%"
      containerHeight="calc(100% - 30px)"
    >
      <TitleforTheChart>Customer Numbers by Table Sizes</TitleforTheChart>
      <BarChart
        width={550}
        height={330}
        data={customerData}
        margin={{
          top: 5,
          right: 0,
          left: -30,
          bottom: 10,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Small" fill={theme.colors.components.neutralButton.fontColor} />
        <Bar dataKey="Medium" fill={theme.colors.components.arrivalButton.fontColor.normal} />
        <Bar dataKey="Large" fill={theme.colors.components.positiveButton.fontColor} />
      </BarChart>
    </SingleChartContainer>
  );
};
export default CustomerTableBarChart;
