import {useState} from "react";


export const SearchBar = ({onCityChange}) => {

    const [city, setCity] = useState("")

    const onSubmit = (e) => {
        e.preventDefault();
        onCityChange(city);
    }

    return (
        <div id="searchBar" className="border-2 border-slate-700 rounded-sm w-2xl sm:w-xl flex bg-blue-950 items-center">
            <form onSubmit={onSubmit} className="flex w-full items-center">
            <label>
                <input type="text" placeholder="Enter a city..." id="searchInput" required className="text-white font-bold text-xl placeholder-white" onChange={(e) => setCity(e.target.value)} />
            </label>
            <button className="border-2 border-hidden text-white ml-auto" type="submit"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-label="botonDeBusqueda">
                <circle cx="11" cy="11" r="8"/>
                <line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg></button>
            </form>
        </div>
    )
}

