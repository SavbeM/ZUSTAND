import _ from "lodash";
import {useFiltrationStore} from "../state/useFiltrationStore";
import {useEffect} from "react";
import {mainStore} from "../state/mainState";
import {BY_ALPHABET, BY_CURRENCY_RATE, FiltrationMethodType} from "../types/types";




export const useAllCurrenciesTableFiltration = () => {
    const filtrationState = useFiltrationStore(state => state)
    const {setSearchResult, searchInputIsEmpty,searchResult,setAllCurrencies} = mainStore(state => state)
    const currencies = mainStore(state => state.searchInputIsEmpty ? state.currencies : state.searchResult)

    useEffect(()=>{
        searchInputIsEmpty ?
        setAllCurrencies(filtrate(filtrationState.byAlphabet.isActive ? BY_ALPHABET : BY_CURRENCY_RATE))
            :
            setSearchResult(filtrate(filtrationState.byAlphabet.isActive ? BY_ALPHABET : BY_CURRENCY_RATE))
    }, [filtrationState])

    const filtrate = (filtrationMethod: FiltrationMethodType) => {
        console.log("setted")
         switch (filtrationMethod) {
            case BY_ALPHABET:
                const sortedByAlphabet = _.sortBy(currencies, (o) => o.txt.toLowerCase());
                return  filtrationState.byAlphabet.ascending ? sortedByAlphabet : sortedByAlphabet.reverse()
            case BY_CURRENCY_RATE:
                const sortedByRate = _.sortBy(currencies, (o) => o.rate);

                return filtrationState.byCurrencyRate.ascending ? sortedByRate : sortedByRate.reverse();
            default:
                return currencies;
        }
    };
}