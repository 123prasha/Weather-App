import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function Weather({Info}){

  let Img_URL = ("https://images.unsplash.com/photo-1606141826636-eb562ddc0314?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHdoZXRoZXJ8ZW58MHx8MHx8fDA%3D")   

  return (<div className="whetherInfo">

    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={Img_URL}
      />
    <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {Info.city}
        </Typography>
        <Typography variant="body2" color="text.secondary" component="span">
          <p>Temp = {Info.temp}&deg;C</p>
          <p>Humidity = {Info.humidity}</p>
          <p>MaxTemp = {Info.tempMax}&deg;C</p>
          <p>MinTemp = {Info.tempMin}&deg;C</p>
          <p>The Weather can be described as <i>{Info.weather}</i>
            &nbsp;  and Feels like = {Info.feelslike}</p>
        </Typography>
      </CardContent>
    </Card>
  </div>)
}