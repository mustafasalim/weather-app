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
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: false,
        },

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
        },
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
    <div className="pt-12">
      <Chart
        options={weatherData.options}
        series={weatherData.series}
        type="area"
        height="220"
      />
    </div>
  )
}

export default WeatherChart
