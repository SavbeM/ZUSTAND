import axios from "axios";
import {CurrencyItem} from "../types/types";


const instance = axios.create({
    baseURL: 'https://bank.gov.ua/NBUStatService/v1/statdirectory',
    timeout: 1000,
});

export const getAllCurrenciesRequest = async (setCurr: (curr: CurrencyItem[]) => void, setErr: (error: any) => void) => {
    try {
        const resp = await instance.get("/exchange?json").then(response => response.data)
        setCurr(resp)
    } catch (e) {
        setErr(e)
        console.log(e)
    }
}



