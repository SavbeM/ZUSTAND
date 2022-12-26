
import React, {useState} from "react";
import {Currencies} from "../types/types";
import {Spinner} from "./Spinner";


export type AllCurrenciesPropsType = {
    currencies: Currencies
}

export const AllCurrenciesTable = (props: AllCurrenciesPropsType): any => {

    const [portion, setPortion] = useState(10)
    const portionHandler = () => {
        setPortion(portion + 10)
    }
    if (props.currencies && props.currencies.length > 0) {

        const renderCurrencyPortion = (): any => {
            let acc = 0
            const toRenderArray: Currencies = []
            while (acc < portion) {
                acc++
                // @ts-ignore
                toRenderArray.push(props.currencies[acc])

            }
            if (toRenderArray.length > 1) {
                return (toRenderArray.map((i) => {

                    return (<tr className="border-dashed border-b-2 border-b-light-blue" key={i.cc}>
                            <td className="text-white">{i.txt}</td>
                            <td className="text-white">{i.rate}</td>
                        </tr>
                    )

                }))
            }

        }
        return (
            <div className="flex flex-col justify-center w-full">
                <table
                    className="table-auto rounded-md bg-rich-blue ring-dark-blue ring-4 drop-shadow-xl shadow-inner">
                    <thead>
                    <tr>
                        <th className="text-white m-6">Валюта</th>
                        <th className="text-white m-6">Официальный курс</th>
                    </tr>
                    </thead>
                    <tbody>
                    {renderCurrencyPortion()}
                    </tbody>
                </table>
                <button type="button"
                        onClick={portionHandler}
                        className="flex self-center align-middle ring-4 ring-dark-blue text-white bg-grey hover:bg-mint focus:ring-4 focus:ring-light-blue font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 hover:text-black">More...
                </button>
            </div>
        )
    } else {
        return (
                <Spinner/>
        )
    }
}
