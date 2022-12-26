import React, {useEffect} from 'react';
import './App.css';
import useStore from "./state/mainState";
import {AllCurrenciesTable} from "./components/allCurrenciesTable";
import {Converter} from "./components/Converter";
import {Currencies} from "./types/types";
;



function App() {

    const getCurrencies = useStore((state) => state.getAllCurrencies)
    const currencies: Currencies  = useStore((state) => state.currencies)
  useEffect(() => {

      if(!currencies) {
        getCurrencies()
    }
    else{
        console.log(currencies)
    }
  })

  return (
    <div className="App">
        <h1 className="text-3xl text-mint font-bold underline">Currencies</h1>
        <Converter currencies={currencies}/>
      <AllCurrenciesTable currencies={currencies}/>
    </div>
  );
}

export default App;
