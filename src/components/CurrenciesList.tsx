import {CurrenciesKeys, CurrenciesListArrayType, CurrenciesListProps} from "../types/types";
import {useConverterStore} from "../state/converterState";
import {currenciesListContainerS, currenciesListDivS, currenciesListItemS} from "../styles/styles";
import React, {useEffect, useState} from "react";
import {mainStore} from "../state/mainState";


export const CurrenciesList = (props: CurrenciesListProps) => {
    const setCurrencyName: (pos: string, curr: string, rate: number) => void = useConverterStore(state => state.setCurrencyName)
    const setIsShown = useConverterStore(state => state.setIsShown)
    const countries = mainStore(state => state.countries)
    const currencies = mainStore(state => state.currencies)
    const [currenciesList, setCurrenciesList] => useState<CurrenciesListArrayType | null>()

    const createCurrencyList = () => {
        currencies.sort((a: CurrenciesKeys, b:CurrenciesKeys): number => {
            let currA = a.cc.toLowerCase(), currB = b.cc.toLowerCase();
            if (currA < currB) {
                return -1
            } else if (currA > currB){
                return 1
            }
            else return 0
        }).map((currItem: CurrenciesKeys) => {
            setCurrenciesList([...currenciesList, {rate: currItem.rate,name: currItem.cc, flag: countries.map((country: any) =>{
                    if (country.currencies?.[0].code == currItem.cc) {
                        return country.flag
                    }
            })}])
        })
    }
    useEffect(()=>{
        createCurrencyList()
    }, [])

    return (
        <div onBlur={(e) => setIsShown()}
             className={currenciesListContainerS}
             role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex={-1}>
            <div className={currenciesListDivS} role="none">
                {currenciesList.map((currItem) =>
                    <div
                        onClick={() => setCurrencyName(props.position, currItem.name, currItem.rate)}
                        key={currItem.name} className={currenciesListItemS}>
                        <div key={Math.random()}>{currItem.name}</div>
                        <div key={Math.random()}>{currItem.flag}</div>
                    </div>)}
            </div>
        </div>

    )
}