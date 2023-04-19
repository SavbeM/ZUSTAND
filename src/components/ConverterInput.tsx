import {inputS} from "../styles/styles";
import React, {FC} from "react";
import {useConverterStore} from "../state/converterState";


export type ConverterInputType = {
    position: string,
}
export const ConverterInput: FC<ConverterInputType> = (props) => {
    const inputValue = useConverterStore(state => props.position === "left" ? state.firstCurrency.value : state.secondCurrency.value)
    const {setIsActive, setValue} = useConverterStore(state => state)


    const inputHandler = (e: string) => {
        if (!Number.isNaN(+e)) {
            setValue(e, props.position)
        }
    }

    return (
        <div>
            <input onFocus={() => {
                setIsActive(props.position)
            }} onBlur={() => {
                setIsActive("blur")
            }} value={inputValue} onChange={e => inputHandler(e.target.value)} className={inputS}/>
        </div>
    )
}