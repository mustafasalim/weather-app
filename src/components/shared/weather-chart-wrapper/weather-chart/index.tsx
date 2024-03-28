import Chart from "react-apexcharts"

interface WeatherChartOptions {
  data: any[]
  value: string

  label: string
  colors: string
}

const WeatherChart = (props: WeatherChartOptions) => {
  const { data, value, label, colors } = props
  const times = ["06:00", "09:00", "12:00", "15:00", "18:00", "21:00", "00:00"]

  const weatherData = {
    options: {
      dataLabels: {
        enabled: true,
        formatter: function (val: any) {
          return val + value
        },
        offsetY: -13,
        offsetX: 0,
        style: {
          fontSize: "12px",
          colors: ["#BFBFD4"],
        },
        background: {
          enabled: false,
        },
      },
      plotOptions: {
        bar: {
          dataLabels: {
            position: "top", // top, center, bottom
          },
        },
      },
      tooltip: {
        enabled: false,
      },

      chart: {
        id: "weather-chart",
        toolbar: {
          show: false,
        },
        fontFamily: "Inter, sans-serif",
        animations: {
          enabled: true,
          dynamicAnimation: {
            enabled: false,
            speed: 350,
          },
        },
      },
      xaxis: {
        categories: times,
        labels: {
          show: true,
          style: {
            colors: "#BFBFD4",
          },
        },
      },
      yaxis: {
        labels: {
          show: false,
        },
      },
      grid: {
        show: false,
      },
      colors: [colors, "#fff"],
      fill: {
        type: "gradient",
        gradient: {
          shade: "light",
          type: "vertical",
          shadeIntensity: 0.5,
          gradientToColors: [colors],
          inverseColors: false,
          opacityFrom: 0.7,
          opacityTo: 0.9,
          stops: [0, 90, 100],
        },
      },
      markers: {
        size: 3,
        colors: ["#ffffff"],
        strokeColor: "#ffffff",
        strokeWidth: 3,
      },
    },
    series: [
      {
        name: label,
        data: data,
      },
    ],
  }

  return (
    <Chart
      options={weatherData.options}
      series={weatherData.series}
      type="area"
      height="220"
    />
  )
}

export default WeatherChart
