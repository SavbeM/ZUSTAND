import {ConverterDropdownProps} from "../types/types";
import {useConverterStore} from "../state/converterState";
import {dropdownButtonS, dropdownSvgS} from "../styles/styles";
import React from "react";

export const ConverterDropdown = (props: ConverterDropdownProps) => {
    const setIsShown = useConverterStore(state => state.setIsShown)
    const setInputSide = useConverterStore(state => state.setInputSide)
    const firstCurrencyName = useConverterStore(state => state.firstCurrency.name)
    const secondCurrencyName = useConverterStore(state => state.secondCurrency.name)

    const switchCurrencyRender = () =>{
        switch (props.position) {
            case "left":
                return firstCurrencyName ?? "Выберите валюту"
            case "right":
                return secondCurrencyName ?? "Выьерите валюту"
            default:
                return "Выберите валюту"

        }
    }

    const dropdownHandler = (position: string) => {
        setIsShown()
        setInputSide(position)
    }


    return (
        <div>
            <button type="button"
                    onBlur={(e) =>
                    { if(e.relatedTarget?.role !== "menu"){
                        setIsShown()
                    }
                    }}
                    onClick={() => dropdownHandler(props.position)}

                    className={dropdownButtonS}
                    id="menu-button" aria-expanded="true" aria-haspopup="true">
                {switchCurrencyRender()}
                {dropdownSvgS}
            </button>
        </div>
    )
}