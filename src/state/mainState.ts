import create from 'zustand'
import {Currencies, MainStoreType} from "../types/types";
import {getAllCurrenciesRequest} from "../API/requests";



const useStore = create<MainStoreType>()((set) => ({
    currencies: [],
    getAllCurrencies: async () => {
        const response = await getAllCurrenciesRequest()
        set(() => ({currencies: response}))
    }
}))

export default useStore