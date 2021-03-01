import React, { JSXElementConstructor } from 'react'

 type Props = {
   onChange:(key:string) => void;
    tabTitle: String;
    tabIcon?:JSX.Element;
    activeKey:string;
    children:any;
    currentKey:string;

}
export default Props; 