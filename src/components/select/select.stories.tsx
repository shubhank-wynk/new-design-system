import React from 'react';
import { CheckOutlined, SearchOutlined } from '../icons';
import { Select, Search, SelectItem} from './index';

export default {
  component: Select,
  title: 'select',
};



export const select1 = ( ) => {
   return(
     <div>
     <Select searchBar={<Search placeholder="search" searchIcon={<SearchOutlined/>}/>}>
       <SelectItem selectContent="filter1"/>
       <SelectItem selectContent="filter2"/>
     </Select>
     </div>
   )
 };
