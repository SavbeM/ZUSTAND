import create from 'zustand'
import {MainStoreType} from "../types/types";
import {getAllCurrenciesRequest} from "../api/requests";



const useStore = create<MainStoreType>()((set) => ({
    currencies: null,
    getAllCurrencies: async () => {
        const response = await getAllCurrenciesRequest()
        set(() => ({currencies: response}))
    }
}))

export default useStore