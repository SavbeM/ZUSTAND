import React, {FC, useEffect, useState, useCallback} from "react";
import {
    BY_ALPHABET, BY_CURRENCY_RATE,
    CurrencyItem,
} from "../types/types";
import {buttonS, tableContainerS, tableS, tHeadS} from "../styles/styles";
import {mainStore} from "../state/mainState";
import CurrencyFlag from "react-currency-flags";
import {FiltrationButtonItem} from "./RenderFiltrationButton";
import {useAllCurrenciesTableFiltration} from "./AllCurrenciesTableFiltration";


export const AllCurrenciesTable: FC = () => {
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const [portion, setPortion] = useState(10);
    const searchResult = mainStore(state => state.searchResult)
    const currencies = mainStore(state => !state.searchInputIsEmpty ? state.searchResult : state.currencies);
    useAllCurrenciesTableFiltration()

    useEffect(() => {
    }, [currencies, searchResult]);


    const portionHandler = useCallback(() => {
        const availableElements = currencies.length - portion;
        if (availableElements > 10) {
            setPortion(p => p + 10);
            setButtonDisabled(false);
        } else if (availableElements > 0) {
            setPortion(p => p + availableElements);
            setButtonDisabled(true);
        } else {
            setButtonDisabled(true);
        }
    }, [currencies.length, portion]);

    const renderCurrencyPortion = useCallback(() => {
        const toRenderArray: CurrencyItem[] = currencies.slice(0, portion)

        if (toRenderArray.length >= 1) {
            return (toRenderArray.map((i) => {
                if (i) {
                    return (
                        <tr className="border-dashed border-b-2 border-b-light-blue" key={i.cc}>
                            <td className="text-white pt-2">{i.txt}</td>
                            <td className="text-white pt-2"><CurrencyFlag currency={i.cc} size='xl'/></td>
                            <td className="text-white pt-2">{i.rate}</td>
                        </tr>
                    )
                }
            }))
        }
    }, [currencies, portion]);

    return currencies.length >= 1 ? (

            <div className={tableContainerS}>
                <table
                    className={tableS}>
                    <thead className={tHeadS}>
                    <tr>
                        <th className="flex flex-row w-36 m-auto">
                            <span className="m-6 w-24 text-white">Валюта</span>
                            <FiltrationButtonItem type={BY_ALPHABET}/>
                        </th>
                        <th className="text-white w-24 m-6">Прапор</th>
                        <th className="flex flex-row w-56 m-auto">
                            <span className="m-6 w- text-white">Офиціційний курс</span>
                            <FiltrationButtonItem type={BY_CURRENCY_RATE} />
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {renderCurrencyPortion()}
                    </tbody>
                </table>
                <button type="button"
                        onClick={portionHandler}
                        disabled={buttonDisabled}
                        className={buttonS}>More...
                </button>
            </div>
        ) :
        <div className="flex justify-center pt-2.5 items-center h-full text-white">По вашему запросу не найдено ни одной
            валюты.</div>
}