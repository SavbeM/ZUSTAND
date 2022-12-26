import create from "zustand";
import {ConverterStoreType} from "../types/types";


 export const useConverterStore = create<ConverterStoreType>()((set) => ({
  toShow: false,
    inputSide: null,
    firstCurrency: null,
    secondCurrency: null,
    firstRate: null,
    secondRate: null,

  show() {set(state => ({...state, toShow: !state.toShow}))},
     setInputSide(position: string){set(state => ({...state, inputSide: position}))},
     setCurrency(pos: string, curr: string){set(state => {
         switch (pos) {
             case 'left':
            return  {...state, firstCurrency: curr}
            break
             case 'right':
               return   {...state, secondCurrency: curr}
            break
             default:
                 return {...state}
         }
     })
     }
}))

