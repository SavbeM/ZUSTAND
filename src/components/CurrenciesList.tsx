import {CurrenciesListProps} from "../types/types";
import {useConverterStore} from "../state/converterState";
import {currenciesListContainerS, currenciesListItemS} from "../styles/styles";
import React from "react";

export const CurrenciesList = (props: CurrenciesListProps) => {
    const setCurrencyName: (pos: string, curr: string, rate: number) => void = useConverterStore(state => state.setCurrencyName)
    const setIsShown = useConverterStore(state => state.setIsShown)

    return (
        <div onBlur={(e) => setIsShown()}
            className={currenciesListContainerS}
            role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex={-1}>
            <div className="py-1 max-h-24 overflow-y-auto" role="none">
                {props.currencies?.map((e) => <div
                    onClick={() => setCurrencyName(props.position, e.cc, e.rate)}
                    key={e.cc} className={currenciesListItemS}
                >{e.cc}</div>)}
            </div>
        </div>

    )
}