import React, {FC, useEffect} from "react";
import {useConverterStore} from "../state/converterState";
import {ConverterDropdown} from "./ConverterDropdown";
import {CurrenciesList} from "./CurrenciesList";
import {ConverterInput} from "./ConverterInput";
import {swapButtonS} from "../styles/styles";
import {ArrowPathRoundedSquareIcon} from "@heroicons/react/24/solid";



const positions = ["left", "right"]

export const Converter: FC = () => {
    const {isShown, inputSide, convertValue, firstCurrency, secondCurrency, swapCurrencies} = useConverterStore(state => state)


    useEffect(()=> {
        convertValue()
    }, [firstCurrency.value,firstCurrency.rate,firstCurrency.isActive, secondCurrency.isActive,secondCurrency.rate,secondCurrency.value])
    const swapHandler = () => {
        swapCurrencies()
    }
    return (
        <div className="w-auto m-auto p-6">
            <div className="flex justify-around">
                {positions.map((item, key) => {
                    return (
                        <div key={key + "listItemKey"}>
                            <div className="flex align-middle w-full max-h-18">
                                <ConverterDropdown  position={item}/>
                                <ConverterInput  position={item}/>
                            </div>
                            {isShown && inputSide === item ?
                                <CurrenciesList  position={item} />
                                : null}
                        </div>
                    )
                })}
            </div>
            <button onClick={swapHandler} className={swapButtonS}><ArrowPathRoundedSquareIcon className="h-6 w-6 text-white"/></button>
        </div>
    )

}







