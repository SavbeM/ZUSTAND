import axios from "axios";
import {Currencies} from "../types/types";


const instance = axios.create({
    baseURL: 'https://bank.gov.ua/NBUStatService/v1/statdirectory',
    timeout: 1000,
});

export const getAllCurrenciesRequest = async (setCurr: (data: Currencies) => void, setErr: (error: any) => void) => {
    try {
        const response: Currencies = await instance.get("/exchange?json").then(response => response.data)
        setCurr(response)
    }
    catch (e) {
        setErr(e)
        console.log(e)
    }
    }

export const getAllCountriesRequest = async (setCnt: (data: any) => void, setErr: (error: any) => void) => {
    try {
        const response = axios.get(`https://restcountries.com/v2/all`).then(response => response.data)
        setCnt(response)
    }
    catch(e){
        setErr(e)
        console.log(e)
    }
}

