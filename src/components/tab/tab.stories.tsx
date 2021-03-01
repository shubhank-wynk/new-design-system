import React,{useState} from 'react';

import {Tabs,TabContents} from './index';
import { TabConent, TabHeader, TabMenu } from './tab.styled';

export default {
   component: Tabs,
   title: 'Tab',
}

export const Tab1 = () => {

   const [currentKey, setCurrentKey] = useState('');
   const onChange = (currentKey:string) => {
      setCurrentKey(currentKey) 
   } 
   
   return(

     <div>
        <Tabs/>
         {/* <TabHeader>
            <TabMenu>
        <Tabs tabTitle="test1" activeKey="0" currentKey={currentKey} onChange ={onChange}>
        
         </Tabs>
        <Tabs tabTitle="test1" activeKey="1" currentKey={currentKey} onChange ={onChange}>
           
           </Tabs>
        <Tabs tabTitle="test3" activeKey="2" currentKey={currentKey} onChange ={onChange}>
            
         </Tabs>
         </TabMenu>
         </TabHeader>
         <TabContents content = {<div>{contentArray[parseInt(currentKey)]}</div>}>
         </TabContents> */}


         
     </div>
   )
 };