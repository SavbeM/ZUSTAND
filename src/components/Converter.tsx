import React, {useEffect} from "react";
import {useConverterStore} from "../state/converterState";
import {ConverterProps} from "../types/types";
import {ConverterDropdown} from "./ConverterDropdown";
import {CurrenciesList} from "./CurrenciesList";
import {ConverterInput} from "./ConverterInput";




export const Converter = (props: ConverterProps) => {
    const dropdownValue = useConverterStore(state => state.isShown)
    const inputSide = useConverterStore(state => state.inputSide)
    const convertValue = useConverterStore(state => state.convertValue)
    const firstCurrency = useConverterStore( state => state.firstCurrency)
    const secondCurrency= useConverterStore( state => state.secondCurrency)

    useEffect(()=> {
        convertValue()
    }, [firstCurrency.value,firstCurrency.rate,firstCurrency.isActive, secondCurrency.isActive,secondCurrency.rate,secondCurrency.value])

    return (
        <div className="w-auto m-auto p-6">
            <div className="flex justify-around">
                <div >
                    <div className="flex align-middle w-full max-h-18">
                    <ConverterDropdown  position={'left'}/>
                    <ConverterInput  position="left"/>
                    </div>
                    {dropdownValue && inputSide === "left" ?
                        <CurrenciesList  position={'left'} />
                        : null}

                </div>
                <div>
                    <div  className="flex align-middle w-full max-h-18">
                    <ConverterDropdown  position={'right'}/>
                    <ConverterInput  position={"right"}/>
                    </div>
                    {dropdownValue && inputSide === "right" ?
                        <CurrenciesList position={'right'} />
                        : null}

                </div>
            </div>
        </div>
    )

}







