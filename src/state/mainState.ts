import create from 'zustand'
import {MainStoreType} from "../types/types";
import {getAllCurrenciesRequest, getCountries} from "../api/requests";



const useStore = create<MainStoreType>()((set) => ({
    currencies: null,
    countries: null,
    getAllCurrencies: async () => {
        const response = await getAllCurrenciesRequest()
        set((state) => ({...state ,currencies: response}))
    },
    getAllCountries: async () => {
        const response = await getCountries()
        set((state) => ({...state, countries: response}))
    }
}))

export default useStore