import create from "zustand";
import {ConverterStoreType} from "../types/types";


export const useConverterStore = create<ConverterStoreType>()((set) => ({
        isShown: false,
        inputSide: null,
        firstCurrency: {
            name: null,
            rate: null,
            value: "",
            isActive: false
        },
        secondCurrency: {
            name: null,
            rate: null,
            value: "",
            isActive: false
        },

        swapCurrencies(){
          set(state => ({...state, firstCurrency: {...state.firstCurrency, value: state.secondCurrency.value}, secondCurrency: {...state.secondCurrency, value: state.firstCurrency.value}}))
        },
        setIsShown() {
            set(state => ({...state, isShown: !state.isShown}))
        },
        setInputSide(position: string) {
            set(state => ({...state, inputSide: position}))
        },
        setCurrencyName(pos: string, curr: string, rate: number) {
            set(state => {
                switch (pos) {
                    case 'left':
                        return {...state, firstCurrency: {...state.firstCurrency, name: curr, rate: rate}}

                    case 'right':
                        return {...state, secondCurrency: {...state.secondCurrency, name: curr, rate: rate}}

                    default:
                        return state
                }
            })
        },
        setValue(value: string, pos: string) {
            set(state => {
                switch (pos) {
                    case "left":
                        return {...state, firstCurrency: {...state.firstCurrency, value: value,}}
                    case "right":
                        return {...state, secondCurrency: {...state.secondCurrency, value: value}}
                    default:
                        return state
                }
            })
        },
        convertValue() {
            set(state => {

                   if(state.firstCurrency.isActive && state.secondCurrency.rate && state.firstCurrency.value && state.firstCurrency.rate) {


                       return {
                           ...state,
                           secondCurrency: {
                               ...state.secondCurrency,
                               value: +state.firstCurrency.value * state.firstCurrency.rate / state.secondCurrency.rate
                           }
                       }
                   }else if(state.secondCurrency.isActive && state.secondCurrency.rate && state.secondCurrency.value && state.firstCurrency.rate) {

                       return {
                           ...state,
                           firstCurrency: {
                               ...state.firstCurrency,
                               value: +state.secondCurrency.value * state.secondCurrency.rate / state.firstCurrency.rate
                           }
                       }
                   }
                        else {
                        return state
                }
            })
        },
        setIsActive(pos: string ) {
            set(state => {
                switch (pos) {
                    case 'left':
                        return {...state, firstCurrency: {...state.firstCurrency, isActive: true}, secondCurrency: {...state.secondCurrency, isActive: false}}

                    case 'right':
                        return {...state, firstCurrency: {...state.firstCurrency, isActive: false}, secondCurrency: {...state.secondCurrency, isActive: true}}
                        
                    default:
                        return state
                }

            })
        }
    }
))

