import React, {useState} from "react";
import {AllCurrenciesPropsType, Currencies} from "../types/types";
import {buttonS, tableContainerS, tableS, tHeadS} from "../styles/styles";


export const AllCurrenciesTable = (props: AllCurrenciesPropsType) => {
    const [buttonDisabled, setButtonDisabled] = useState(false)
    const [portion, setPortion] = useState(10)
    const portionHandler = () => {
        if(portion + 10 < props.currencies.length) {
            setPortion(portion + 10)
        }
        else {
            const value = props.currencies.length - portion
            setPortion(portion + value - 1)
            setButtonDisabled(true)
        }
    }

        const renderCurrencyPortion = () => {
            let acc = 0
            const toRenderArray: Currencies = []
            while (acc < portion) {
                acc++
                toRenderArray.push(props.currencies[acc])
            }
            if (toRenderArray.length > 1) {
                return (toRenderArray.map((i) => {
                    return (<tr className="border-dashed border-b-2 border-b-light-blue" key={Math.random()}>
                            <td className="text-white">{i.txt}</td>
                            <td className="text-white">{i.rate}</td>
                        </tr>
                    )
                }))
            }
        }

    return (
            <div className={tableContainerS}>
                <table
                    className={tableS}>
                    <thead className={tHeadS}>
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
                        disabled={buttonDisabled}
                        className={buttonS}>More...
                </button>
            </div>
        )
    }

