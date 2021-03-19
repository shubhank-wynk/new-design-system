import React, { useState } from 'react';

import { UploadingOutlined, UserProfileOutlined } from '../icons';

import { Tabs, TabPane } from './index';

export default {
  component: Tabs,
  title: 'Tab',
};

export const Tab1 = () => {
  const [currentKey, setCurrentKey] = useState('0');
  const onChange = (currentKey: string) => {
    setCurrentKey(currentKey);
  };

  return (
    <div>
      <Tabs activeKey={currentKey} onChange={onChange} tabBarExtraContent={<p>cilter/selct dropdown list</p>}>
        <TabPane tabIcon={<UploadingOutlined />} tabKey="0" tabHeader="Tab1">
          Content of TabTwo 1
        </TabPane>
        <TabPane tabIcon={<UserProfileOutlined />} tabKey="1" tabHeader="Tab2">
          Content of TabTwo 2
        </TabPane>
        <TabPane tabIcon={<UserProfileOutlined />} tabKey="2" tabHeader="Tab3">
          Content of TabThree 3
        </TabPane>
        <TabPane tabIcon={<UserProfileOutlined />} tabKey="4" tabHeader="Tab4">
          Content of TabThree 3
        </TabPane>
      </Tabs>
    </div>
  );
};
