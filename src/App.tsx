import './App.scss';
import './themes/common.css';
import 'github-markdown-css';
import ButtonComponent from "./components/Button";
import IconComponent from "./components/Icon";
import ModalComponent from "./components/Modal";
import AvatarComponent from "./components/Avatar";
import { useEffect, useState } from 'react';
import React from 'react';

import type { MenuProps } from 'antd';
import { Button, Layout, Menu } from 'antd';
import { Content, Header } from 'antd/es/layout/layout';
import Sider from 'antd/es/layout/Sider';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}
const items: MenuProps['items'] = [
  getItem('Icon', 'icon'),

  getItem('Button', 'button'),

  getItem('Modal', 'modal'),
  getItem('Avatar', 'avatar'),
];

function App() {
  const [theme, setTheme] = useState("dark");
  const [currentContent, setCurrentContent] = useState()
  const changeTheme = () => {
    const them = theme === "light" ? "dark" : "light";
    setTheme(them);
  }
  useEffect(() => {
    // import(`./themes/theme-${theme}.css`); // 动态导入CSS文件  
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);
  const [current, setCurrent] = useState('button');

  const onClick: MenuProps['onClick'] = (e) => {
    setCurrent(e.key);
    let currentContent;
    switch (e.key) {
      case "icon":
        currentContent = <IconComponent />;
        break;
      case "button":
        currentContent = <ButtonComponent />;
        break;
      case "modal":
        currentContent = <ModalComponent />;
        break;
      case "avatar":
        currentContent = <AvatarComponent />;
        break;
    }
    setCurrentContent(currentContent);
  };

  return (
    <Layout style={{ height: "100%" }}>
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        <div className="title" style={{ color: "#fff", fontWeight: 600, fontSize: "14px" }}>SendingMe-UI</div>
        <div className='theme' style={{ marginLeft: "auto" }}>
          <label style={{ color: "#fff", fontWeight: 600, fontSize: "14px" }}>Change Theme</label>
          <Button type="primary" style={{ marginLeft: "10px" }} onClick={changeTheme}>
            {theme}
          </Button>
        </div>
      </Header>
      <Layout style={{ height: "100%" }}>
        <Sider width={200} style={{ background: "#fff" }}>
          <Menu onClick={onClick} style={{ width: 200 }} selectedKeys={[current]} mode="inline" items={items} />
        </Sider>
        <Layout style={{ padding: '0 24px 24px', overflow: "auto" }}>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              borderRadius: 12,
            }}
          >
            {currentContent}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );

}

export default App;
