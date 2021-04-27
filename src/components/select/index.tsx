import React,{Children}  from 'react';
import { SelectList, SelectSearch, SelectSearchWrap, SelectWrap } from './select.styled';

interface Search {
   onKeyUp?: (key: string) => void;
   searchIcon?: JSX.Element;
   className?: string;
   placeholder?:string;
}

interface SelectItem { 
      selectIcon ? : JSX.Element;
      selectContent ? : string;
}
interface Select {
   children? : any;
   searchBar?:JSX.Element;
}

const SelectItem = ({selectIcon,selectContent}:SelectItem ) => {
   return (
      <SelectList>{selectIcon}<span className="label">{selectContent}</span></SelectList>
   )
}
const Search = ({searchIcon,placeholder,className,onKeyUp} : Search) => {
   return(
      <>
         <SelectSearchWrap>
            {searchIcon}<SelectSearch placeholder={placeholder} onKeyUp={() => {}}/>
         </SelectSearchWrap>
      </>
   )

}

const Select  = ({ children,searchBar}:Select) => {
   return(
      <SelectWrap>
         {searchBar}
         {children}
      </SelectWrap>
   )
}


export {Select,Search,SelectItem}
