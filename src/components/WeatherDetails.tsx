import React from "react";
import { LuEye } from "react-icons/lu";

type Props = {};

export interface WeatherDetailProps {
  visibility: string;
  humidity: string;
  windSpeed: string;
  airPressure: string;
  sunrise: string;
  sunset: string;
}

export default function WeatherDetails(props: WeatherDetailProps) {
  const {
    visibility = "25km",
    humidity = "61%",
    windSpeed = "7 km/h",
    airPressure = "1012 hPa",
    sunrise = "6:20",
    sunset = "18:48",
  } = props;

  return (
    <>
      <SingleWeatherDetail
        icon={<LuEye />}
        information="Visibility"
        value={visibility}
      />{" "}
      <SingleWeatherDetail
        icon={<LuEye />}
        information="Humidity"
        value={humidity}
      />{" "}
      <SingleWeatherDetail
        icon={<LuEye />}
        information="Wind Speed"
        value={windSpeed}
      />{" "}
      <SingleWeatherDetail
        icon={<LuEye />}
        information="Air Pressure"
        value={airPressure}
      />{" "}
      <SingleWeatherDetail
        icon={<LuEye />}
        information="Sun Rise"
        value={sunrise}
      />{" "}
      <SingleWeatherDetail
        icon={<LuEye />}
        information="Sun Set"
        value={sunset}
      />{" "}
    </>
  );
}

export interface SingleWeatherDetailProps {
  information: string;
  icon: React.ReactNode;
  value: string;
}

function SingleWeatherDetail(props: SingleWeatherDetailProps) {
  return (
    <div className="flex flex-col justify-between gap-2 items-center text-xs font-semibold text-black/80">
      <p className="whitespace-nowrap">{props.information}</p>
      <div className="text-3xl">{props.icon}</div>
      <p>{props.value}</p>
    </div>
  );
}
