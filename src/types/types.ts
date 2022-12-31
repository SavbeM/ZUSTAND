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

export type ConverterStoreType = {
    isShown: boolean,
    inputSide: string | null,
    firstCurrency: {
        name: string | null,
        value: string | number | readonly string[] | undefined,
        rate: number | null,
        isActive: boolean
    },
    secondCurrency: {
        name: string | null,
        value:  string | number | readonly string[] | undefined,
        rate: number | null
        isActive: boolean,
    },
    setIsShown(): void,
    setInputSide(position: string): void,
    setCurrencyName(pos: string, curr: string, rate: number): void,
    setValue(value: string , pos: string): void,
    convertValue(): void,
    setIsActive(pos: string): void
}

export type ConverterProps = {
    currencies: Currencies
}

export type CurrenciesListProps = {
    currencies: Currencies
    position: string
}
export type ConverterDropdownProps = {
    position: string,
}
export type AllCurrenciesPropsType = {
    currencies: Currencies
}
export type ConverterInputType = {
    position: string,
}

