import {CurrenciesKeys, CurrenciesListProps} from "../types/types";
import {useConverterStore} from "../state/converterState";
import {currenciesListContainerS, currenciesListItemS} from "../styles/styles";
import React from "react";
import useStore from "../state/mainState";


export const CurrenciesList = (props: CurrenciesListProps) => {
    const setCurrencyName: (pos: string, curr: string, rate: number) => void = useConverterStore(state => state.setCurrencyName)
    const setIsShown = useConverterStore(state => state.setIsShown)
    const countries = useStore(state => state.countries)
    const getFlag = (currItem: CurrenciesKeys) => {
       return  countries.map((i: any) => {
           let code: string | number

            switch(currItem.r030.toString().length){
                case 1:
                    code = "00" + currItem.r030
                    break
                case 2:
                    code = "0" + currItem.r030
                    break
                default:
                    code = currItem.r030
            }

            if (i.numericCode == code) {
                return <img className='w-5' src={i.flag}/>
            }
        })
    }

    return (
        <div onBlur={(e) => setIsShown()}
             className={currenciesListContainerS}
             role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex={-1}>
            <div className="py-1 max-h-24 overflow-y-auto" role="none">
                {props.currencies?.map((currItem) => <div
                    onClick={() => setCurrencyName(props.position, currItem.cc, currItem.rate)}
                    key={currItem.cc} className={currenciesListItemS}
                >
                    <div>{currItem.cc}</div>
                    {getFlag(currItem)}
                </div>)}
            </div>
        </div>

    )
}