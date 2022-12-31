import {inputS} from "../styles/styles";
import React, {useState} from "react";
import {useConverterStore} from "../state/converterState";
import {ConverterInputType} from "../types/types";






export const ConverterInput = (props: ConverterInputType) => {
    const inputValue = useConverterStore(state => props.position === "left" ? state.firstCurrency.value : state.secondCurrency.value)
    const setIsActive = useConverterStore(state => state.setIsActive)
    const setInputValue = useConverterStore(state => state.setValue)

    const inputHandler = (e: string ) => {
        if (!Number.isNaN(+e)) {
            setInputValue(e, props.position)

        }
    }


    return(
        <div>
            <input onFocus={() => {
                setIsActive(props.position)
            }} onBlur={() => {
                setIsActive("blur")
            }}  value={inputValue} onChange={e => inputHandler(e.target.value)} className={inputS}/>
        </div>
    )
}