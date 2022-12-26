export type CurrenciesKeys = {
    r030: number,
    txt: string,
    rate: number,
    cc: string,
    exchangedate: string
}

export type Currencies = CurrenciesKeys[] | null

export type MainStoreType = {
    currencies: Currencies | null,
    getAllCurrencies(): void
}

export type ConverterStoreType = {
    toShow: boolean,
    inputSide: string | null,
    firstCurrency: string | null,
    secondCurrency: string | null,
    firstRate: number | null,
    secondRate: number | null,
    show(): void,
    setInputSide(position: string): void,
    setCurrency(pos: string, curr: string): void
}
