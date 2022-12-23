import React, {useEffect} from 'react';
import './App.css';
import useStore from "./state/mainState";
import {AllCurrenciesTable} from "./components/allCurrenciesTable";
;




function App() {
    const getCurrencies =useStore((state) => state.getAllCurrencies)

  useEffect(() => {
    getCurrencies()

  })

  return (
    <div className="App">
        <h1 className="text-3xl text-mint font-bold underline">Currencies</h1>
      <AllCurrenciesTable/>
    </div>
  );
}

export default App;
