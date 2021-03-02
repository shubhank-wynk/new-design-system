export interface TabProps {
  onChange: (key: string) => void;
  activeKey: string;
  children?: any;
}

export interface TabPaneProps extends TabProps {
  tabIcon?: JSX.Element;
  tabHeader: string;
  tabKey: string;
}
