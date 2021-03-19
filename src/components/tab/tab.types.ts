export interface TabProps {
  onChange?: (key: string) => void;
  activeKey?: string;
  children?: any;
  tabBarExtraContent?:JSX.Element;
  className?: string;
  style?: object;
}

export interface TabPaneProps extends TabProps {
  tabIcon?: JSX.Element;
  tabHeader: string;
  tabKey: string;
}