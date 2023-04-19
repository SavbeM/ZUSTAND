import {BY_ALPHABET, BY_CURRENCY_RATE, FiltrationMethodType,} from "../types/types";
import {BarsArrowDownIcon} from "@heroicons/react/24/outline";
import BarsArrowUpIcon from "@heroicons/react/24/solid/BarsArrowUpIcon";
import React, {useCallback, useState} from "react";
import {useFiltrationStore} from "../state/useFiltrationStore";
import {useAllCurrenciesTableFiltration} from "./AllCurrenciesTableFiltration";


type IconsStylesType = {
    byAlphabet: string,
    byCurrencyRate: string
}

type FiltrationButtonItemProps = {
    type: FiltrationMethodType,
}

export const FiltrationButtonItem = ({type}: FiltrationButtonItemProps) => {

    const filtrationState = useFiltrationStore(state => state)

    const [iconsStyles, setIconsStyles] = useState<IconsStylesType>({
        byAlphabet: "h-6 w-6 text-gray-500 m-auto",
        byCurrencyRate: "h-6 w-6 text-gray-500 m-auto"
    });

    const filtrationButtonHandler = (filtrationMethod: FiltrationMethodType) => {
        filtrationState.changeFiltrationMethod(filtrationMethod)
    }

    const handleMouseEnter = useCallback((buttonType: typeof BY_ALPHABET | typeof BY_CURRENCY_RATE) => {
        const newIconsStyles = {...iconsStyles};
        newIconsStyles[buttonType] = "h-6 w-6 text-white m-auto cursor-pointer";
        setIconsStyles(newIconsStyles);
    }, [iconsStyles]);

    const handleMouseLeave = useCallback((buttonType: typeof BY_ALPHABET | typeof BY_CURRENCY_RATE) => {
        const newIconsStyles = {...iconsStyles};
        newIconsStyles[buttonType] = "h-6 w-6 text-gray-500 m-auto cursor-default";
        setIconsStyles(newIconsStyles);
    }, [iconsStyles]);

    return type === BY_ALPHABET ? (
            filtrationState.byAlphabet.ascending
                ? <BarsArrowDownIcon
                    onMouseEnter={() => handleMouseEnter(BY_ALPHABET)}
                    onMouseLeave={() => handleMouseLeave(BY_ALPHABET)}
                    onClick={() => filtrationButtonHandler(BY_ALPHABET)}
                    className={iconsStyles.byAlphabet}/>
                :
                <BarsArrowUpIcon
                    onMouseEnter={() => handleMouseEnter(BY_ALPHABET)}
                    onMouseLeave={() => handleMouseLeave(BY_ALPHABET)}
                    onClick={() => filtrationButtonHandler(BY_ALPHABET)}
                    className={iconsStyles.byAlphabet}/>) :

        (
            filtrationState.byCurrencyRate.ascending ?
                <BarsArrowDownIcon
                    onMouseEnter={() => handleMouseEnter(BY_CURRENCY_RATE)}
                    onMouseLeave={() => handleMouseLeave(BY_CURRENCY_RATE)}
                    onClick={() => filtrationButtonHandler(BY_CURRENCY_RATE)}
                    className={iconsStyles.byCurrencyRate}/>
                :
                <BarsArrowUpIcon
                    onMouseEnter={() => handleMouseEnter(BY_CURRENCY_RATE)}
                    onMouseLeave={() => handleMouseLeave(BY_CURRENCY_RATE)}
                    onClick={() => filtrationButtonHandler(BY_CURRENCY_RATE)}
                    className={iconsStyles.byCurrencyRate}/>)


}
