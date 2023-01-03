import React, {useEffect} from 'react';
import './App.css';
import {mainStore} from "./state/mainState";
import {Converter} from "./components/Converter";
import {Spinner} from "./components/Spinner";
import {Currencies} from "./types/types";
import {AllCurrenciesTable} from "./components/AllCurrenciesTable";
import {getAllCountriesRequest, getAllCurrenciesRequest} from "./api/requests";




function App() {

    const getAllCurrencies = mainStore(state => state.getAllCurrencies)
    const getAllCountries = mainStore(state => state.getAllCountries )
    const setGlobalError = mainStore(state => state.setGlobalError)
    const globalError = mainStore(state => state.globalError)
    const currencies = mainStore((state) => state.currencies)
    const countries = mainStore(state => state.countries)

    const getCurr = async () => {
        try {
            const data: Currencies = await getAllCurrenciesRequest()
            getAllCurrencies(data)
        }
        catch (e) {
            setGlobalError(e)
            console.log(e)
        }
    }
    const getCnt = async () => {
        try {
            const data: any = await getAllCountriesRequest()
            getAllCountries(data)
        }
        catch (e) {
            setGlobalError(e)
            console.log(e)
        }
    }

    useEffect(() => {
        getCurr()
        getCnt()
    }, [])

return (!globalError) ?  (
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
    )
    :
    <div className="w-full h-full bg-dark text-center">
        <h1 className="text-3xl text-red-600 p-6 font-bold ">Error {globalError.message}!!!</h1>
    </div>



}

export default App;
