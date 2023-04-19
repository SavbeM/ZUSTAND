import create from 'zustand'
import { MainStoreType} from "../types/types";



export const mainStore = create<MainStoreType>()((set) => ({
    currencies: [],
    globalError: null,
    searchResult: [],
    searchInputIsEmpty: true,
    setSearchResult(result){set((state) => ({...state, searchResult: result}))},
    setSearchInputIsEmpty(isEmpty){set((state) => ({...state, searchInputIsEmpty: isEmpty}))},
    setAllCurrencies(data) {set((state) => ({...state, currencies: data}))},
    setGlobalError(error){set((state )=> ({...state, globalError: error}))}
}))

