// import { useEffect, useState } from "react";

// function useCurrencyInfo(currency) {
//     // console.log(currency)
//     const [data, setData] = useState({});

//     useEffect(() => {
//         fetch(`https://api.exchangerate-api.com/v4/latest/${currency}`)
//             .then((res) => res.json())
//             .then((res) => setData(res[currency])


//         )
//         console.log(res);

//     }, [currency]);
//     return data;
// }

// export default useCurrencyInfo

// ------------------------------------------------------------------------------------------------------
import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});

    const fetchCurrencies = async () => {
        // console.log(currency)
        try {
            const res = await fetch(`https://api.exchangerate-api.com/v4/latest/${currency}`)
            // const res = await fetch(`https://api.frankfurter.app/currencies`);
            const fdata = await res.json();

            setData(fdata.rates);
            // console.log(fdata);
        } catch (error) {
            console.log("Error in fatching", error);
        }
    }

    useEffect(() => {
        fetchCurrencies();
    }, );
    // console.log(data);
    return data;
}

export default useCurrencyInfo;














// ____________________________________________________________________________________________________________________________________________