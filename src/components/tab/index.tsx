import React from 'react';
import { UploadingOutlined, UserProfileOutlined } from '../icons';
import {Tab, TabConent, TabConentWrapper, TabHeader, TabMenu, TabMenuItem,} from './tab.styled';

   

   export const TabContents = (props:any) => {
      return(
         <TabConentWrapper>
         <TabConent data-tab={props.dataTab} className={props.className}>{props.content}</TabConent>
         </TabConentWrapper>
      )
   }


const Tabs  = () => {

   return(
      <Tab>
        <TabHeader>
          <TabMenu>
             <TabMenuItem className="active"><UploadingOutlined/> Tab1</TabMenuItem>
             <TabMenuItem><UploadingOutlined/>Tab2</TabMenuItem>
             <TabMenuItem><UserProfileOutlined/>Tab3</TabMenuItem>
         </TabMenu>
        </TabHeader>
         <TabConentWrapper>
            <TabConent className="active">tab content 1</TabConent>
            <TabConent>tab content 2</TabConent>
            <TabConent>tab content 3</TabConent>
         </TabConentWrapper>

            {/* <TabMenuItem onClick={ () => props.onChange(props.activeKey)}
             className={props.activeKey === props.currentKey ? 'active' :'' }>
                {props.tabIcon}{props.tabTitle}</TabMenuItem> */}
           
      </Tab>
   )
};

{/* <TabConentWrapper>
<TabConent />
</TabConentWrapper> */}


export {Tabs}