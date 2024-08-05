import React, { useEffect, useState } from 'react';

const SearchWeather = () => {
    const [search, setSearch] = useState("chandigarh");
    const [data, setData] = useState([]);
    const [input, setInput] = useState("");

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=f13bca8529a2624c851abd328d48ffac`);
                const fdata = await response.json();
                console.log(fdata);
                setData(fdata);
            } catch (error) {
                console.log("Error in fetching the data", error);
            }
        }
        fetchWeather();
    }, [search]);


    if (typeof data.main == "undefined") {
        return (
            <div>
                ...loading
            </div>
        )
    }

    let temp = (data.main?.temp - 273.15).toFixed(2)
    let temp_min = (data.main?.temp_min - 273.15).toFixed(2)
    let temp_max = (data.main?.temp_max - 273.15).toFixed(2)

    //date
    let d = new Date();
    let date = d.getDate();
    let year = d.getFullYear();
    let month = d.toLocaleString("default", { month: 'long' });
    let day = d.toLocaleString("default", { weekday: 'long' });

    //time
    let time = d.toLocaleString([], {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        setSearch(input);
    }

    return (
        <div className="container m-auto">
            <div className="flex justify-center items-start ">
                <div className="md:w-3/2 h-3/2">
                    <div className="relative text-center border-0">
                        <img src="https://images.unsplash.com/photo-1426604966848-d7adac402bff?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="random" />
                        <div className="absolute top-10 inset-x-5 inset-y-9 flex flex-col justify-center items-center bg-black bg-opacity-50 py-10">
                            <form onSubmit={handleSubmit} className="mb-4 w-3/4">
                                <div className="flex items-center ">
                                    <input type="search"
                                        className="form-input flex-1 mr-2 rounded-l-lg p-2"
                                        placeholder="Search City"
                                        aria-label="Search city"
                                        name="search"
                                        value={input}
                                        onChange={(e) => setInput(e.target.value)}
                                        required
                                    />
                                    <button type="submit" className="bg-blue-500 text-white p-2 rounded-r-lg">
                                        <i className="fas fa-search">Search</i>
                                    </button>
                                </div>
                            </form>
                            <div className="text-white px-4">
                                <h2 className="text-3xl font-bold mb-2">{data.name}</h2>
                                <p className="text-lg mb-2">{day}, {month} {date}, {year}<br />
                                    {time}
                                </p>
                                <hr className="border-white my-2" />
                                <h1 className="text-5xl font-bold mb-2">{temp}&deg;C</h1>
                                <p className="font-bold mb-2">{data.weather && data.weather[0].main}</p>
                                <p className="text-lg">{temp_min}&deg;C | {temp_max} &deg;C</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    );
}

export default SearchWeather;
