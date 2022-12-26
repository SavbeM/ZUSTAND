import React from "react";
import {Currencies} from "../types/types";
import {useConverterStore} from "../state/converterState";



type ConverterProps = {
    currencies: Currencies | null
}

type CurrenciesListProps = {
    currencies: Currencies | null,
    position: string
}
type ConverterDropdownProps = {
    dropdownValue: boolean,
    dropdownHandler(position: string): void,
    position: string
}

const CurrenciesList = (props: CurrenciesListProps) => {
    const setCurrency: any = useConverterStore(state => state.setCurrency)
    return (
        <div
            className="absolute z-40 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex={-1}>
            <div className="py-1 max-h-24 overflow-y-auto" role="none">
                {props.currencies?.map((e) => <div
                    onClick={() => setCurrency(props.position, e.cc)}
                    key={e.cc} className="hover:cursor-pointer hover:bg-gray-100 text-gray-700 block px-4 py-2 text-sm"
                >{e.cc}</div>)}
            </div>
        </div>

    )
}

const ConverterDropdown = (props: ConverterDropdownProps) => {
    const firstCurrency = useConverterStore(state => state.firstCurrency)
    const secondCurrency = useConverterStore(state => state.secondCurrency)
    const switchCurrencyRender = () =>{
        switch (props.position) {
            case "left":
               return firstCurrency ? firstCurrency : "Выберите валюту"
            case "right":
                return secondCurrency ? secondCurrency : "Выьерите валюту"
            default:
                return "Выберите валюту"

        }
    }
    return (

        <div>
            <button type="button"
                    onClick={() => props.dropdownHandler(props.position)}
                    className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
                    id="menu-button" aria-expanded="true" aria-haspopup="true">
                {switchCurrencyRender()}

                <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                     fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                          clipRule="evenodd"/>
                </svg>
            </button>
        </div>
    )
}

export const Converter = (props: ConverterProps) => {
    const dropdownValue = useConverterStore(state => state.toShow)
    const setDropdownValue: any = useConverterStore(state => state.show)
    const setInputSide = useConverterStore(state => state.setInputSide)
    const inputSide = useConverterStore(state => state.inputSide)
    console.log(inputSide)

    const dropDownHandler = (position: string) => {
        setDropdownValue()
        setInputSide(position)

    }

    return (
        <div className="max-w-2xl m-auto">
            <div className="flex justify-around ">
                <div>
                    <ConverterDropdown position={'left'} dropdownHandler={dropDownHandler}
                                       dropdownValue={dropdownValue}/>
                    {dropdownValue && inputSide === "left" ?
                        <CurrenciesList position={'left'} currencies={props.currencies}/>
                        : null}
                </div>
                <div>
                    <ConverterDropdown position={'right'} dropdownHandler={dropDownHandler}
                                       dropdownValue={dropdownValue}/>
                    {dropdownValue && inputSide === "right" ?
                        <CurrenciesList position={'right'} currencies={props.currencies}/>
                        : null}
                </div>
            </div>

        </div>
    )

}







