import React from "react";
import Plot from "react-plotly.js";

function PlotlyChart(props) {
  return (
    <Plot
      useResizeHandler={true}
      data={[
        {
          x: [1, 2, 3],
          y: [2, 6, 3],
          type: "scatter",
          mode: "lines+markers",
          marker: { color: "red" },
        },
        {
          type: "bar",
          x: [1, 2, 3],
          y: [2, 5, 3],
          marker: { color: "darkblue" },
        },
      ]}
      layout={{
        autosize: true,
        title: "Plotly.js",
        plot_bgcolor: "GhostWhite",
      }}
    />
  );
}

export default PlotlyChart;
