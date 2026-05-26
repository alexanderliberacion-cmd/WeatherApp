import {WeatherCard} from "./Components/WeatherCard";
import {SearchBar} from "./Components/SearchBar";
import {useState} from "react";

export const App = () => {
    const [city, setCity] = useState(""); //Estado de la ciudad
    const [weatherData, setWeatherData] = useState(null);//Estado de la informacion de climatologia
    const [loading, setLoading] = useState(false); //Estado de la carga
    const [error, setError] = useState(null);
    const [forecast, setForecast] = useState(null);

    //Esto recoge los datos de la api y los envia a searchbar
    const cityCallback = (city) => {
        setCity(city);
        setLoading(true)

        async function getWeather() {
            try {
                const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_WEATHER_API_KEY}&units=metric`
                const response = await fetch(url);
                const data = await response.json();
                const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${import.meta.env.VITE_WEATHER_API_KEY}&units=metric`;
                const responseForecast = await fetch(forecastURL);
                const dataForecast = await responseForecast.json();
                if (response.ok) {
                    setWeatherData(data);
                    setError(null);
                    setLoading(false);
                    setForecast(dataForecast)
                } else {
                    setError("No se ha encontrado la ciudad");
                    console.log(response.statusText);
                    setWeatherData(null);
                }


            } catch (error) {
                console.log(error)
            }

        }
        getWeather();

    }


    //La weathercard recibe la informacion solamente si weatherData tiene datos
    return (
        <main className="bg-slate-900 h-screen flex flex-col justify-center min-w-screen min-h-screen">
            <div id="width" className="max-w-7xl mx-auto">
                <h1 className="text-3xl font-bold text-white mb-4">Weather App</h1>
                <section>
                    <SearchBar onCityChange={cityCallback}/>
                    {loading && <p>Loading...</p>}
                </section>
                <div>
                    <section id="WeatherCards">
                        {weatherData && <WeatherCard city={weatherData.name} temperature={weatherData.main.temp} condition={weatherData.weather[0].main} forecast={forecast}/>}
                        {error && <p>{error}</p>}
                    </section>
                </div>
            </div>
        </main>
    )

}
