var options = {
  chart: {
    height: 350,
    type: "line",
    stacked: !0,
    toolbar: { show: !1, autoSelected: "zoom" },
    dropShadow: {
      enabled: !0,
      top: 12,
      left: 0,
      bottom: 0,
      right: 0,
      blur: 2,
      color: "#45404a2e",
      opacity: 0.35,
    },
  },
  colors: ["#2a77f4", "#1ccab8", "#f02fc2"],
  dataLabels: { enabled: !1 },
  stroke: { curve: "straight", width: [4, 4], dashArray: [0, 3] },
  grid: { borderColor: "#45404a2e", padding: { left: 0, right: 0 } },
  markers: { size: 0, hover: { size: 0 } },
  series: [
    {
      name: "New Visits",
      data: [0, 60, 20, 90, 45, 110, 55, 130, 44, 110, 75, 200],
    },
    {
      name: "Unique Visits",
      data: [0, 45, 10, 75, 35, 94, 40, 115, 30, 105, 65, 190],
    },
  ],
  xaxis: {
    type: "datetime",
    categories: [
      "2019-09-19T00:00:00",
      "2019-09-19T01:30:00",
      "2019-09-19T02:30:00",
      "2019-09-19T03:30:00",
      "2019-09-19T04:30:00",
      "2019-09-19T05:30:00",
      "2019-09-19T06:30:00",
      "2019-09-19T07:30:00",
      "2019-09-19T08:30:00",
      "2019-09-19T09:30:00",
      "2019-09-19T10:30:00",
      "2019-09-19T11:30:00",
    ],
    axisBorder: { show: !0, color: "#45404a2e" },
    axisTicks: { show: !0, color: "#45404a2e" },
  },
  fill: {
    type: "gradient",
    gradient: { gradientToColors: ["#F55555", "#B5AC49", "#6094ea"] },
  },
  tooltip: { x: { format: "dd/MM/yy HH:mm" } },
  legend: { position: "top", horizontalAlign: "right" },
};
(chart = new ApexCharts(
  document.querySelector("#liveVisits"),
  options
)).render(),
  (options = {
    chart: {
      height: 250,
      type: "donut",
      dropShadow: {
        enabled: !0,
        top: 10,
        left: 0,
        bottom: 0,
        right: 0,
        blur: 2,
        color: "#45404a2e",
        opacity: 0.15,
      },
    },
    plotOptions: { pie: { donut: { size: "65%" } } },
    dataLabels: { enabled: !1 },
    stroke: { show: !0, width: 2, colors: ["transparent"] },
    series: [10, 65, 25],
    legend: {
      show: !0,
      position: "bottom",
      horizontalAlign: "center",
      verticalAlign: "middle",
      floating: !1,
      fontSize: "14px",
      offsetX: 0,
      offsetY: -13,
    },
    labels: ["Teller 1", "Teller 2", "Teller 3"],
    colors: ["#34bfa3", "#5d78ff", "#fd3c97"],
    responsive: [
      {
        breakpoint: 600,
        options: {
          plotOptions: { donut: { customScale: 0.2 } },
          chart: { height: 240 },
          legend: { show: !1 },
        },
      },
    ],
    tooltip: {
      y: {
        formatter: function (o) {
          return o + " %";
        },
      },
    },
  }),
  (chart = new ApexCharts(
    document.querySelector("#ana_device"),
    options
  )).render();
var chart,
  colors = ["#1ecab8", "#fd3c97", "#6d81f5", "#ffb822", "#0dc8de"];
(options = {
  chart: {
    height: 300,
    type: "bar",
    events: {
      click: function (o, e, t) {
        console.log(o, e, t);
      },
    },
    toolbar: { show: !1 },
    dropShadow: {
      enabled: !0,
      top: 0,
      left: 5,
      bottom: 5,
      right: 0,
      blur: 5,
      color: "#45404a2e",
      opacity: 0.35,
    },
  },
  colors: colors,
  plotOptions: {
    bar: {
      dataLabels: { position: "top" },
      columnWidth: "30",
      distributed: !0,
    },
  },
  dataLabels: {
    enabled: !0,
    formatter: function (o) {
      return o + "%";
    },
    offsetY: -20,
    style: { fontSize: "12px", colors: ["#8997bd"] },
  },
  series: [{ name: "satisfaction", data: [4, 10.1, 6, 8, 9.1] }],
  xaxis: {
    categories: ["Branch A", "Branch B", "Branch C", "Branch D", "Branch E"],
    position: "top",
    labels: { offsetY: -18, style: { cssClass: "apexcharts-xaxis-label" } },
    axisBorder: { show: !1 },
    axisTicks: { show: !1 },
    crosshairs: {
      fill: {
        type: "gradient",
        gradient: {
          colorFrom: "#D8E3F0",
          colorTo: "#BED1E6",
          stops: [0, 100],
          opacityFrom: 0.4,
          opacityTo: 0.5,
        },
      },
    },
    tooltip: { enabled: !0, offsetY: -37 },
  },
  fill: {
    gradient: {
      type: "gradient",
      gradientToColors: ["#FEB019", "#775DD0", "#FEB019", "#FF4560", "#775DD0"],
    },
  },
  yaxis: {
    axisBorder: { show: !1 },
    axisTicks: { show: !1 },
    labels: {
      show: !1,
      formatter: function (o) {
        return o + "%";
      },
    },
  },
}),
  (chart = new ApexCharts(
    document.querySelector("#barchart"),
    options
  )).render(),
  $("#usa").vectorMap({
    map: "us_aea_en",
    backgroundColor: "transparent",
    borderColor: "#818181",
    regionStyle: { initial: { fill: "#7474b126" } },
    series: {
      regions: [
        {
          values: {
            "US-VA": "#868ff363",
            "US-PA": "#868ff363",
            "US-TN": "#868ff363",
            "US-WY": "#868ff363",
            "US-WA": "#868ff363",
            "US-TX": "#868ff363",
          },
          attribute: "fill",
        },
      ],
    },
  });
