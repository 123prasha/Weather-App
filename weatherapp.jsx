import { useState } from "react"
import Searchbox from "./searchbox"
import Weather from "./whether"

export default function WeatherApp() {
const [weatherInfo, setweatherInfo] = useState({
    city:"Delhi",
    feelslike:24.78,
    temp:56.67,
    tempMin:24.34,
    tempMax:25.43,
    humidity:76,
    weather: "haze"}
)

let updateInfo = (Info) => {
  setweatherInfo(Info)
}
      return (
        <div>
          <h2>Weather App by Prashant company</h2>
            <Searchbox updateInfo={updateInfo}/>
            <br></br>
            <Weather Info={weatherInfo}I/>
        </div>
      )
}