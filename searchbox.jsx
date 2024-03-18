import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

export default function Searchbox({updateInfo}) {
  let API_URL = "https://api.openweathermap.org/data/2.5/weather"
  let API_KEY = "4b3710c2643937618d84ef59faf8fcb1"

  let whetherInfo = async() => {
    let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    let jsonResponse = await response.json();
    let result ={
      city:city,
      temp: jsonResponse.main.temp,
      tempMin: jsonResponse.main.temp_min,
      tempMax: jsonResponse.main.temp_max,
      humidity: jsonResponse.main.humidity,
      feelslike: jsonResponse.main.feels_like,
      weather: jsonResponse.weather[0].description,
    };
    console.log(result);
    return result;
   }

  const [city, setcity] = useState("");
  
  let handler = (e) => {
    setcity(e.target.value);
  }
  let handlersubmit = async (e) => {
    e.preventDefault();
    console.log(city)
    setcity("");
    let Info = await whetherInfo();
    updateInfo(Info);
  }
  return (
    <div>
      <form onSubmit={handlersubmit}>
      <TextField id="filled-basic" label="City Name" 
      variant="filled" value={city} onChange={handler} required/>
       <br></br>
       <br></br>
      <Button variant="contained" type='submit'>Enter</Button>
      </form>
    
    </div>
  )
}