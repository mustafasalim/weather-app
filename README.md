# Weather App

#### In this project, it shows current and forecast weather information of cities using weather api. It has a user friendly interface. Users can easily query the cities they want and view weather information.

## Demo

https://weather-app-react-project-ecru.vercel.app/

## Deployment

Run this project for deployment

```bash
 pnpm install
 pnpm dev
```

## Packages and Technologies

- phosphor-icons/react
- apexcharts
- axios
- classnames
- framer-motion
- react
- react-apexcharts
- react-dom
- react-hot-toast
- react-query
- react-router-dom
- react-tabs
- react-use
- zustand-

## Features

### Responsive Design

- Responsive designs for all screens

### Chart

- Temperature graph: Shows the change in temperature at a given time.
- Humidity graph: Shows the change in humidity at a given time.
- Wind speed graph: Shows the change in wind speed at a given time.

![Uygulama Ekran Görüntüsü](/public/images/readme-images/chart.png)

### Auto-complete

- Brings to the relevant cities according to the user's input
  ![Uygulama Ekran Görüntüsü](/public/images/readme-images/search.png)

### Geographical Location

- If the location is on, shows the current weather information for that location

![Uygulama Ekran Görüntüsü](/public/images/readme-images/search.png)

## Technical Details

### Weather Icons And Background Images

- Shows background images and icons appropriate to the current weather and time zone
  ![Uygulama Ekran Görüntüsü](/public/images/readme-images/current.png)

### Weather messages

- Informative messages appear to the user based on the current weather and time zone
  ![Uygulama Ekran Görüntüsü](/public/images/readme-images/message.png)

### Error Status

- in the event of a possible error, displaying the error to the user in an appropriate manner
  ![Uygulama Ekran Görüntüsü](/public/images/readme-images/error.png)

### ErrorBoundry

- Error Boundaries is a React component used to handle potential error conditions in a React application. These error boundaries catch an error when it occurs in a specific component tree of the application and allow you to handle the error without affecting the rest of the application.

![Uygulama Ekran Görüntüsü](/public/images/readme-images/Screenshot.png)

## API

This API is a weather information delivery system built using the Axios and React Query libraries. Axios is used to make and receive HTTP requests, while React Query is used to manage and cache these requests. The API provides an interface for users to retrieve weather information for cities of their choice. By making a request to the API, users can access up-to-date weather data for their specified city. By processing requests, the API retrieves weather data from sources, processes it and responds to the user in JSON format. This API is designed to provide access to weather data for modern web applications.

```bash
import axios from "axios"
import toast from "react-hot-toast"

//BASE_URL AND API_KEY
const BASE_URL = "https://api.openweathermap.org"
const API_KEY = "da043207154dbe698034acd833f5c026"

//create base url with axios create
const baseUrl = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  params: {
    appid: API_KEY,
  },
})

// Add a response interceptor
baseUrl.interceptors.response.use(
  function (response) {
    return response
  },
  function (error) {
    if (error) {
      setTimeout(() => {
        window.location.href = "/"
      }, 1500)

      toast.error(
        "No region with coordinates found. You have been redirected to the main page"
      )[error]
    }
    return Promise.reject(error)
  }
)

//apiOptions interface
interface apiOptions {
  method: string
  url: string
  params?: any
  data?: any
}

//general api
export const api = async (param: apiOptions) => {
  const { method, url, params, data } = param

  try {
    const response = await baseUrl({
      method,
      url,
      params,
      data,
    })

    return response
  } catch (error) {
    return Promise.reject(error)
  }
}

```
