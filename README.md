# Weather App

#### In this project, it shows current and forecast weather information of cities using weather api. It has a user friendly interface. Users can easily query the cities they want and view weather information.

## Demo

https://weather-app-react-project-ecru.vercel.app/

## API

Bu API, Axios ve React Query kütüphanelerini kullanarak geliştirilmiş bir hava durumu bilgisi sağlayıcı sistemdir. Axios, HTTP istekleri yapmak ve almak için kullanılırken, React Query, bu istekleri yönetmek ve önbelleğe almak için kullanılır. API, kullanıcıların istedikleri şehirlerin hava durumu bilgilerini almak için bir arayüz sunar. Kullanıcılar, API'ye istek yaparak belirledikleri şehrin hava durumuyla ilgili güncel verilere erişebilirler. API, istekleri işleyerek hava durumu verilerini kaynaklardan alır, işler ve kullanıcıya JSON formatında yanıt verir. Bu API, modern web uygulamaları için hava durumu verilerine erişim sağlamak amacıyla tasarlanmıştır.

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

## Deployment

Run this project for deployment

```bash
 pnpm install
 pnpm dev
```

## Features

- [@octokatherine](https://www.github.com/octokatherine) tasarım ve geliştirme için.

## Ekler

Herhangi bir ek bilgi buraya gelir

## Rozetler

[shields.io](https://shields.io/) Gibi bir yerden rozetler ekleyin.

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)
[![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)

## Katkı

Katkılara her zaman açığız!

Başlamak `Contributor.md'ye bakın.

Lütfen bu projenin `davranış kurallarına` uyun.

## Ekran Görüntüleri

![Uygulama Ekran Görüntüsü](/public/images/bg-images/rain-day.png)
