import {searchS} from "../styles/styles";
import React, {FC} from "react";
import {mainStore} from "../state/mainState";
;


export const Search: FC = () => {
    const {currencies, setSearchResult, setSearchInputIsEmpty} = mainStore(state => state)


    const search = (s: string): void => {
       if(s.length !== 0) {
           setSearchInputIsEmpty(false)
       }
       const filtered = currencies.filter(i=> {
           if (i.txt.toUpperCase().indexOf(s.toUpperCase()) !== -1 ||
               i.cc.toUpperCase().indexOf(s.toUpperCase()) !== -1) return i} )
        setSearchResult(filtered)
    }

    return (
        <div className="flex flex-col justify-center w-full">
            <h1 className="text-white ">Пошук</h1>
            <input onChange={(i) => search(i.target.value)} className={searchS}/>
        </div>
    )
}