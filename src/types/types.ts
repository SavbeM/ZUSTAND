export type CurrencyItem = {
    r030: number,
    txt: string,
    rate: number,
    cc: string,
    exchangedate: string
}

interface FiltrationType {
    type: string;
    isActive: boolean
    ascending: boolean;
}

export const BY_ALPHABET = "byAlphabet"
export const BY_CURRENCY_RATE = "byCurrencyRate"
export type FiltrationMethodType = typeof BY_ALPHABET | typeof BY_CURRENCY_RATE

export interface FiltrationStoreType {
    byAlphabet: FiltrationType,
    byCurrencyRate: FiltrationType,
    changeFiltrationMethod(type: string): void
}


export type MainStoreType = {
    currencies: CurrencyItem[]
    searchResult: CurrencyItem[]
    globalError: any | null
    searchInputIsEmpty: boolean
    setSearchInputIsEmpty(isEmpty: boolean): void
    setSearchResult(result: CurrencyItem[]): void
    setAllCurrencies(data: CurrencyItem[]): void
    setGlobalError(error: any): void
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
        value: string | number | readonly string[] | undefined,
        rate: number | null
        isActive: boolean,
    },
    swapCurrencies(): void
    setIsShown(): void,
    setInputSide(position: string): void,
    setCurrencyName(pos: string, curr: string, rate: number): void,
    setValue(value: string, pos: string): void,
    convertValue: () => void,
    setIsActive(pos: string): void
}


