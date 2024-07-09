import { useState } from 'react';
import './search-input.css'

type SearchInputProps={
    placeholder:string
}

export const SearchInput:React.FC<SearchInputProps> = ({placeholder}) => {
    const [searchValue,setSearchValue]=useState<string>('')
    return ( 
       <input onChange={(e)=>{setSearchValue(e.target.value)}} value={searchValue} type="text" className='search__input' placeholder={placeholder} />
     );
}
 