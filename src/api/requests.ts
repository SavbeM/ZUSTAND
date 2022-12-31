import axios from "axios";


const instance = axios.create({
    baseURL: 'https://bank.gov.ua/NBUStatService/v1/statdirectory',
    timeout: 1000,
});

export const getAllCurrenciesRequest = () => instance.get("/exchange?json").then(response => response.data)