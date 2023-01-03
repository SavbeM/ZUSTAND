import {CurrenciesKeys, CurrenciesListProps} from "../types/types";
import {useConverterStore} from "../state/converterState";
import {currenciesListContainerS, currenciesListItemS} from "../styles/styles";
import React from "react";
import {mainStore} from "../state/mainState";


export const CurrenciesList = (props: CurrenciesListProps) => {
    const setCurrencyName: (pos: string, curr: string, rate: number) => void = useConverterStore(state => state.setCurrencyName)
    const setIsShown = useConverterStore(state => state.setIsShown)
    const countries = mainStore(state => state.countries)
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
                return <img key={Math.random()} className='w-8 align-middle self-center' src={i.flag}/>
            }
        })
    }

    return (
        <div onBlur={(e) => setIsShown()}
             className={currenciesListContainerS}
             role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex={-1}>
            <div className="flex flex-col py-1 max-h-24 overflow-y-auto justify-center align-middle" role="none">
                {props.currencies.map((currItem) => <div
                    onClick={() => setCurrencyName(props.position, currItem.cc, currItem.rate)}
                    key={Math.random()} className={currenciesListItemS}
                >
                    <div key={currItem.cc}>{currItem.cc}</div>
                    {getFlag(currItem)}
                </div>)}
            </div>
        </div>

    )
}