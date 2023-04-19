import create from "zustand";
import {FiltrationStoreType} from '../types/types'

export const useFiltrationStore = create<FiltrationStoreType>()((set) => ({
    byAlphabet: {type: "byAlphabet", isActive: true, ascending: true},
    byCurrencyRate: {type: "byCurrencyRate", isActive: false, ascending: true},
    changeFiltrationMethod(type) {
        set(state => {
            if (type === state.byAlphabet.type) {
                return ({
                    byCurrencyRate: {...state.byCurrencyRate, isActive: false},
                    byAlphabet: {
                        type: "byAlphabet",
                        isActive: true,
                        ascending: !state.byAlphabet.ascending
                    }
                })
            } else {
                return ({
                    byAlphabet: {...state.byAlphabet, isActive: false},
                    byCurrencyRate: {
                        type: "byCurrencyRate",
                        isActive: true,
                        ascending: !state.byCurrencyRate.ascending
                    }
                })
            }
        })
    }
}))