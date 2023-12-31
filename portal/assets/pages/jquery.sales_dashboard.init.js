!(function (a) {
  "use strict";
  a(function () {
    if (a("#bar").length) {
      var e = a("#bar").get(0).getContext("2d");
      new Chart(e, {
        type: "bar",
        data: {
          labels: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
          datasets: [
            {
              label: "Branch service per year",
              backgroundColor: "#1ccab8",
              borderColor: "transparent",
              borderWidth: 2,
              categoryPercentage: 0.5,
              hoverBackgroundColor: "#00d8c2",
              hoverBorderColor: "transparent",
              data: [30, 39, 20, 31, 41, 25, 20, 39, 20, 31, 41, 25],
            },
          ],
        },
        options: {
          responsive: !0,
          maintainAspectRatio: !0,
          legend: { display: !1, labels: { fontColor: "#50649c" } },
          tooltips: {
            enabled: !0,
            callbacks: {
              label: function (e, a) {
                return (
                  a.datasets[e.datasetIndex].label + "  " + e.yLabel + ""
                );
              },
            },
          },
          scales: {
            xAxes: [
              {
                barPercentage: 0.35,
                categoryPercentage: 0.4,
                display: !0,
                gridLines: {
                  color: "transparent",
                  borderDash: [0],
                  zeroLineColor: "transparent",
                  zeroLineBorderDash: [2],
                  zeroLineBorderDashOffset: [2],
                },
                ticks: { fontColor: "#a4abc5", beginAtZero: !0, padding: 12 },
              },
            ],
            yAxes: [
              {
                gridLines: {
                  color: "#8997bd29",
                  borderDash: [3],
                  drawBorder: !1,
                  drawTicks: !1,
                  zeroLineColor: "#8997bd29",
                  zeroLineBorderDash: [2],
                  zeroLineBorderDashOffset: [2],
                },
                ticks: {
                  fontColor: "#a4abc5",
                  beginAtZero: !0,
                  padding: 12,
                  callback: function (e) {
                    if (!(e % 10)) return "" + e + "";
                  },
                },
              },
            ],
          },
        },
      });
    }
  });
})(jQuery),
  $("#world-map-markers").vectorMap({
    map: "world_mill_en",
    scaleColors: ["#eff0f1", "#eff0f1"],
    normalizeFunction: "polynomial",
    hoverOpacity: 0.7,
    hoverColor: !1,
    regionStyle: { initial: { fill: "#7474b126" } },
    markers: [
      { latLng: [55.75, 37.62], name: "Russia" },
      { latLng: [-25.27, 133.77], name: "Australia" },
      { latLng: [20.59, 78.96], name: "India" },
      { latLng: [39.52, -87.12], name: "Brazil" },
    ],
    series: {
      regions: [
        {
          values: {
            US: "#868ff363",
            AU: "#868ff363",
            BR: "#868ff363",
            RU: "#868ff363",
          },
          attribute: "fill",
        },
      ],
    },
    markerStyle: {
      initial: { stroke: "#7474b126" },
      hover: { stroke: "rgba(112, 112, 112, 0.30)" },
    },
    backgroundColor: "transparent",
    markers: [
      {
        latLng: [37.09024, -95.712891],
        name: "USA",
        style: { fill: "#f93b7a" },
      },
      {
        latLng: [55.754093, 37.620407],
        name: "Russia",
        style: { fill: "#0aafff" },
      },
      {
        latLng: [-21.943369, 123.102198],
        name: "Australia",
        style: { fill: "#7551e9" },
      },
      {
        latLng: [-11.409874, -41.280857],
        name: "Brazil",
        style: { fill: "#ffc212" },
      },
    ],
  });
var options = {
    chart: {
      height: 330,
      type: "radar",
      toolbar: { show: !1 },
      dropShadow: { enabled: !0, blur: 1, left: 1, top: 1 },
    },
    plotOptions: {
      radar: {
        polygons: {
          strokeColors: "#E3EBF6",
          connectorColors: "#E3EBF6",
          fill: { colors: ["transparent"] },
        },
      },
    },
    series: [
      { name: "Phones", data: [80, 50, 30, 40, 100, 20] },
      { name: "Electronics", data: [20, 30, 40, 80, 20, 80] },
      { name: "Clothes", data: [44, 76, 78, 13, 43, 10] },
    ],
    title: { show: !1 },
    stroke: { width: 0, curve: "smooth" },
    fill: { opacity: 0.8, colors: ["#ffb822", "#fd3c97", "#1761fd"] },
    markers: { size: 0 },
    legend: { show: !0, offsetX: 0, offsetY: -10 },
    labels: ["2013", "2014", "2015", "2016", "2017", "2018"],
  },
  chart = new ApexCharts(document.querySelector("#sales-radar"), options);
function update() {
  function e() {
    for (var e = [], a = 0; a < 6; a++) e.push(Math.floor(100 * Math.random()));
    return e;
  }
  chart.updateSeries([
    { name: "Phones", data: e() },
    { name: "Electronics", data: e() },
    { name: "Clothes", data: e() },
  ]);
}
chart.render(),
  new Lightpick({
    field: document.getElementById("light_datepick"),
    inline: !0,
  });
