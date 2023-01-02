import React, {useEffect} from 'react';
import './App.css';
import useStore from "./state/mainState";
import {Converter} from "./components/Converter";
import {Spinner} from "./components/Spinner";
import {Currencies} from "./types/types";
import {AllCurrenciesTable} from "./components/AllCurrenciesTable";




function App() {

    const getCurrencies = useStore((state) => state.getAllCurrencies)
    const getAllCountries = useStore(state => state.getAllCountries )
    const currencies: Currencies | null = useStore((state) => state.currencies)
    const countries = useStore(state => state.countries)
    useEffect(() => {
        getCurrencies()
        getAllCountries()
    }, [])

    return (
        <div className="w-full h-full bg-dark text-center">
            <h1 className="text-3xl text-white p-6 font-bold ">Currency Converter</h1>
            {currencies && countries ?
                <div>

                    <Converter currencies={currencies}/>
                    <AllCurrenciesTable currencies={currencies}/>
                </div>
                :
                <Spinner/>
            }
        </div>
    );
}

export default App;
