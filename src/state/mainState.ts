import create from 'zustand'
import {Currencies, MainStoreType} from "../types/types";



export const mainStore = create<MainStoreType>()((set) => ({
    currencies: null,
    countries: null,
    globalError: null,
    getAllCurrencies(data) {set((state) => ({...state, currencies: data}))},
    getAllCountries(data){set((state) => ({...state, countries: data}))},
    setGlobalError(error){set((state )=> ({...state, globalError: error}))}
}))

