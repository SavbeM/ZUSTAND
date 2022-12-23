export type CurrenciesKeys = {
    r030: number,
    txt: string,
    rate: number,
    cc: string,
    exchangedate: string
}

export type Currencies = CurrenciesKeys[]

export type MainStoreType = {
    currencies: Currencies | null,
    getAllCurrencies(): void
}
