import { WiDaySunny } from "react-icons/wi";
import { WiCloud } from "react-icons/wi";
import { WiDayRain } from "react-icons/wi";
import { WiDayRainMix } from "react-icons/wi";
import { WiDayLightning } from "react-icons/wi";
import { WiDaySnow } from "react-icons/wi";
import { WiFog } from "react-icons/wi";

export const WeatherCard = ({city, temperature, condition, forecast}) =>{

    const forecastFilter = forecast && forecast.list.filter(item => item.dt_txt.includes("12:00:00")).slice(0, 5);

    const weatherIcons = (condition) => {
        switch(condition) {
            case "Clear":
                return  <WiDaySunny />
            case "Clouds":
                return <WiCloud />
            case "Rain":
                return <WiDayRain />
            case "Drizzle":
                return <WiDayRainMix />
            case "Thunderstorm":
                return <WiDayLightning />
            case "Snow":
                return <WiDaySnow />
            case "Mist":
                return <WiFog />
            default:
                return <WiDaySunny />
        }
    }


    return (
        <div id="weatherCard" className="bg-slate-800 text-white rounded-xl w-full md:w-2xl flex flex-col gap-8 justify-start p-4">
            <div id="cityTemperatureAndIcon" className="flex">
                <div id="cityTemperature" className="flex flex-col gap-1">
                    <h2 className="text-gray-100 font-semibold text-4xl">{city}</h2>
                    <p className="text-white font-bold text-5xl">{`${Math.round(temperature)}ºC`}</p>
                </div>
                <p className="border-2 border-hidden ml-auto text-9xl">{weatherIcons(condition)}
                </p>
            </div>
            <div id="condition" className="flex">
                <p className="text-gray-50 font-semibold text-lg">{condition}</p>
            </div>
            <div className="flex gap-2 justify-between items-center">
            {forecast && forecastFilter.map((item, index) => {
                const date = new Date(item.dt_txt).toLocaleDateString('es-ES', {weekday: 'short'},);
                return(
                <div key={index} className="bg-slate-700 rounded-lg p-2 flex-1 text-center">
                    <p>{date}</p>
                    <p>{`${Math.round(item.main.temp)}ºC`}</p>
                    <p className="text-3xl">{weatherIcons(item.weather[0].main)}</p>
                </div>
                )})}
            </div>
        </div>

    )
}