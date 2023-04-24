
import {useConverterStore} from "../state/converterState";
import {dropdownButtonS, dropdownSvgS} from "../styles/styles";
import React, {FC} from "react";


export type ConverterDropdownProps = {
    position: string,
}

export const ConverterDropdown: FC<ConverterDropdownProps> = (props: ConverterDropdownProps) => {
    const {setIsShown, setInputSide, isShown} = useConverterStore(state => state);
    const firstCurrencyName = useConverterStore(state => state.firstCurrency.name)
    const secondCurrencyName = useConverterStore(state => state.secondCurrency.name)

    const switchCurrencyRender = () => {
        switch (props.position) {
            case "left":
                return firstCurrencyName ?? "Оберіть валюту"
            case "right":
                return secondCurrencyName ?? "Оберіть валюту"
            default:
                return "Оберіть валюту"

        }
    }

    const dropdownHandler = (position: string) => {
        setIsShown()
        setInputSide(position)
    }

    return (
        <div>
            <button type="button"
                    onBlur={(e) => {
                        if (e.relatedTarget?.role !== "menu" && isShown) {
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