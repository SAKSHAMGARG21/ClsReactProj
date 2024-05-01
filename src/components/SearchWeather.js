// import React, { useEffect, useState } from 'react';

// const SearchWeather = () => {
//     const [search, setsearch] = useState("chandigarh");
//     const [data, setData] = useState([]);
//     const [input, setInput] = useState("");

//     useEffect(() => {

//         const fetchWeather = async () => {
//             try {
//                 const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=f13bca8529a2624c851abd328d48ffac`);
//                 const fdata=await response.json();
//                 console.log(fdata);
//                 setData(fdata);
//             } catch (error) {
//                 console.log("Error in fetching the data",error);   
//             }
//         }
//         fetchWeather();

//     }, [search]);




//     let emoji = null;
//     if (typeof data.main != "undefined") {
//         if (data.weather[0].main === "Clouds") {
//             emoji = "fa-cloud"
//         }
//         else if (data.weather[0].main === "Thunderstorm") {
//             emoji = "fa-bolt"
//         }
//         else if (data.weather[0].main === "Drizzle") {
//             emoji = "fa-cloud-rain"
//         }
//         else if (data.weather[0].main === "Rain") {
//             emoji = "fa-cloud-shower-heavy"
//         }
//         else if (data.weather[0].main === "Snow") {
//             emoji = "fa-snow-flake"
//         }

//         else {
//             emoji = "fa fa-sun"
//         }
//     }

//     else {
//         return (
//             <div>
//                 ...loading
//             </div>
//         )
//     }



//     let temp = (data.main?.temp - 273.15).toFixed(2)
//     let temp_min = (data.main?.temp_min - 273.15).toFixed(2)
//     let temp_max = (data.main?.temp_max - 273.15).toFixed(2)

//     //date
//     let d = new Date();
//     let date = d.getDate();
//     let year = d.getFullYear();
//     let month = d.toLocaleString("default", { month: 'long' });
//     let day = d.toLocaleString("default", { weekday: 'long' });

//     //time

//     let time = d.toLocaleString([], {
//         hour: '2-digit',
//         minute: '2-digit',
//         second: '2-digit'
//     });

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         setsearch(input);
//     }
//     return (
//         <div >
//             <div className="container mt-5">
//                 <div className="row justify-content-center">
//                     <div className="col-md-4">

//                         <div className="card text-white text-center border-0">
//                             <img src="https://source.unsplash.com/600x900/?nature,water" className="card-img" alt="random" />
//                             <div className="card-img-overlay">
//                                 <form onSubmit={handleSubmit}>
//                                     <div className="input-group mb-4 w-75 mx-auto">
//                                         <input type="search"
//                                             className="form-control"
//                                             placeholder="Search City"
//                                             aria-label="Search city"
//                                             aria-describedby="basic-addon2"
//                                             name="search"
//                                             value={input}
//                                             onChange={(e) => setInput(e.target.value)}
//                                             required
//                                         />
//                                         <button type="submit" className="input-group-text" id="basic-addon2">
//                                             <i className="fas fa-search"></i>
//                                         </button>
//                                     </div>
//                                 </form>
//                                 <div className="bg-dark bg-opacity-50 py-5">
//                                     <h2 className="card-title ">{data.name}</h2>
//                                     <p className="card-text lead  ">{day}, {month} {date}, {year}<br />
//                                         {time}
//                                     </p>
//                                     <hr />
//                                     <i className={`fas ${emoji} fa-4x`}></i>
//                                     <h1 className="fw-bolder mb-5">{temp}&deg;C</h1>
//                                     <p className="lead fw-bolder mb-0">{data.weather && data.weather[0].main}</p>
//                                     <p className="lead">{temp_min}&deg;C | {temp_max} &deg;C</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }


// export default SearchWeather;







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

    let emoji = null;
    if (typeof data.main != "undefined") {
        if (data.weather[0].main === "Clouds") {
            emoji = "fa-cloud"
        }
        else if (data.weather[0].main === "Thunderstorm") {
            emoji = "fa-bolt"
        }
        else if (data.weather[0].main === "Drizzle") {
            emoji = "fa-cloud-rain"
        }
        else if (data.weather[0].main === "Rain") {
            emoji = "fa-cloud-shower-heavy"
        }
        else if (data.weather[0].main === "Snow") {
            emoji = "fa-snow-flake"
        }

        else {
            emoji = "fa fa-sun"
        }
    }

    else {
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
        <div className="max-w-md mx-auto mt-10">
            <img src="https://source.unsplash.com/600x900/?nature,water " className="relative -z-10" alt="random" />
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 z-10">
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <input type="search"
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                placeholder="Search City"
                                aria-label="Search city"
                                aria-describedby="basic-addon2"
                                name="search"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                required
                            />
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <button type="submit" className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
                                <i className="fas fa-search"></i>
                            </button>
                        </div>
                    </div>
                </form>
                <div className="bg-gray-200 py-4">
                    <h2 className="text-3xl font-bold">{data.name}</h2>
                    <p className="text-lg">{day}, {month} {date}, {year}<br />
                        {time}
                    </p>
                    <hr />
                    <i className={`fas ${emoji} fa-4x`}></i>
                    <h1 className="text-5xl font-bold">{temp}&deg;C</h1>
                    <p className="text-lg">{data.weather && data.weather[0].main}</p>
                    <p className="text-lg">{temp_min}&deg;C | {temp_max} &deg;C</p>
                </div>
            </div>
        </div>
    );
}

export default SearchWeather;