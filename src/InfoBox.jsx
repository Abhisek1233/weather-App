import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

export default function InfoBox({ info }) {
  const INIT_URL =
    "https://media.istockphoto.com/id/1055906130/photo/foggy-rural-asphalt-highway-perspective-with-white-line-misty-road-road-with-traffic-and.jpg?s=612x612&w=0&k=20&c=NS_1x0gGJQkJ7RfC1J17bzu5PFj2xJGYoLA6L3BCZzg=";

  const HOT_URL =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_d5n9hBfwkXaCEGK24lxmKX_ge7kBU1EpHA&s";
  const COLD_URL =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqdw2tEmx6-q5D8SId1trkJua_m_qgTpZfjQ&s";
  const RAIN_URL =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyJQAJk2VXwMZWI0U6xfqzdcghd-Q6oA0cHw&s";

  return (
    <div className="InfoBox">
      {/* <h1>Weather Info - {info.weather}</h1> */}
      <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={
              info.humidity > 80
                ? RAIN_URL
                : info.temp > 15
                ? HOT_URL
                : COLD_URL
            }
            title="Weather Condition"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}{
              info.humidity > 80
                ? <ThunderstormIcon/>
                : info.temp > 15
                ? <WbSunnyIcon/>
                : <AcUnitIcon/>
            }
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              component={"span"}
            >
              <p>Temperture = {info.temp}&deg;C</p>
              <p>Humidity = {info.humidity}%</p>
              <p>Min Temp = {info.tempMin}&deg;C</p>
              <p>Max Temp = {info.tempMax}&deg;C</p>
              <p>
                The weather can be described <i>{info.weather}</i> and feels
                like {info.feelsLike}&deg;C
              </p>
            </Typography>
            {/* <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Temperature: {info.temp}°C
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Feels Like: {info.feelsLike}°C
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Humidity: {info.humidity}%
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Max Temp: {info.tempMax}°C, Min Temp: {info.tempMin}°C
          </Typography> */}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
