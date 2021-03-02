import React, { Children, cloneElement } from 'react';

import { Tab, TabConent, TabConentWrapper, TabHeader, TabMenu, TabMenuItem } from './tab.styled';
import { TabProps, TabPaneProps } from './tab.types';

export const TabContents = (props: any) => {
  return (
    <TabConentWrapper>
      <TabConent data-tab={props.dataTab} className={props.className}>
        {props.content}
      </TabConent>
    </TabConentWrapper>
  );
};

const TabPane = ({ tabIcon, tabKey, tabHeader, activeKey, onChange }: TabPaneProps) => {
  return (
    <TabMenuItem className={tabKey === activeKey ? 'active' : ''} onClick={() => onChange(tabKey)}>
      {tabIcon} {tabHeader}
    </TabMenuItem>
  );
};

const Tabs = ({ children, activeKey, onChange }: TabProps) => {
  return (
    <Tab>
      <TabHeader>
        <TabMenu>
          {Children.map(children, (child) => {
            return cloneElement(child, { activeKey, onChange });
          })}
        </TabMenu>
      </TabHeader>
      <TabConentWrapper>
        {Children.map(children, (child) => {
          if (child.props.tabKey === activeKey) {
            return child.props.children;
          }
        })}
      </TabConentWrapper>
    </Tab>
  );
};

export { Tabs, TabPane };
