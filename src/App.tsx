import React, {useEffect} from 'react';
import './App.css';
import {mainStore} from "./state/mainState";
import {Converter} from "./components/Converter";
import {Spinner} from "./components/Spinner";
import {AllCurrenciesTable} from "./components/AllCurrenciesTable";
import {Search} from "./components/Search";
import {getAllCurrenciesRequest} from "./api/requests";


function App() {
    const {setAllCurrencies,setGlobalError,globalError, currencies} = mainStore(state => state)

    useEffect(() => {
        getAllCurrenciesRequest(setAllCurrencies, setGlobalError)
    }, [])

    if (currencies.length < 1) {
        return <Spinner/>
    }

    if (globalError) {
        return <div className="w-full h-full bg-dark text-center">
            <h1 className="text-3xl text-red-600 p-6 font-bold ">Error {globalError.message}!!!</h1>
        </div>
    }

    return (
        <div className="w-full h-full bg-dark text-center">
            <h1 className="text-3xl text-white p-6 font-bold ">Currency Converter</h1>
            <div>
                <Converter/>
                <Search/>
                <AllCurrenciesTable/>
            </div>
        </div>
    )
}

export default App;
