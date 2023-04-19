import {CurrencyItem} from "../types/types";
import {useConverterStore} from "../state/converterState";
import {currenciesListContainerS, currenciesListItemS} from "../styles/styles";
import CurrencyFlag from 'react-currency-flags';
import React, {useEffect, useState, FC} from "react";
import {mainStore} from "../state/mainState";
import {Spinner} from "./Spinner";


export type CurrenciesListProps = {
    position: string
}

export const CurrenciesList: FC<CurrenciesListProps> = (props) => {
    const {setCurrencyName, setIsShown} = useConverterStore(state => state)
    const {searchResult, currencies} = mainStore(state => state)

    const [currenciesList, setCurrenciesList] = useState<CurrencyItem[]>([])


    useEffect(() => {
        setCurrenciesList(searchResult.length >= 1 ? searchResult : currencies)
    }, [searchResult])


    return (currenciesList) ?

        <div onBlur={() => setIsShown()}
             className={currenciesListContainerS}
             role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex={-1}>
            {currenciesList.map((currItem) => {
                return (<div key={currItem.cc}
                             onClick={() => setCurrencyName(props.position, currItem.cc, currItem.rate)}
                             className={currenciesListItemS}>
                    <div>{currItem.cc}</div>
                    <CurrencyFlag currency={currItem.cc} size="lg"/>
                </div>)
            })}
        </div>
        :
        <div onBlur={(e) => setIsShown()}
             className={currenciesListContainerS}
             role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex={-1}>
            <Spinner/>
        </div>


}