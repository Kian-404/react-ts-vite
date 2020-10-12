import React, { FC, useState } from 'react';
import { Layout, Badge, Menu, Dropdown, Tooltip, List, Drawer, Radio, Switch } from 'antd';
import { collapsed, sidebartheme } from '../../redux/models'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  BellOutlined,
  DownOutlined,
  LogoutOutlined,
  UserOutlined,
  LayoutOutlined,
  GithubOutlined
} from '@ant-design/icons';
import './index.css'
const { Header, } = Layout;
interface props {
  collapsed: Boolean,
  setCollapesd: Function
}

const menu = (
  <Menu>
    <Menu.Item >
      <UserOutlined />
      详情
    </Menu.Item>
    <Menu.Item >
      <LogoutOutlined />
        退出
    </Menu.Item>
  </Menu>
);
const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
];
const Message = (
  <List
    bordered
    dataSource={data}
    renderItem={(item: any) => (
      <List.Item>
        {item}
      </List.Item>
    )}
  />
)
const MHeader: FC = () => {
  const collapsedflag = collapsed.useData();
  const sidebarTheme = sidebartheme.useData();
  console.log(collapsedflag);
  const DrawerTitle = "系统布局配置";
  const DrawerPlacement = "right";
  const [visible, setVisible] = useState(false);
  const options = [
    { label: '亮色', value: 'light' },
    { label: '暗色', value: 'dark' },
  ];
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  const ChangeTheme = (e: { target: { value: string | undefined; }; }) => {
    sidebartheme.setTheme(e.target.value)
    console.log('radio4 checked', e.target.value);

  };
  const changeHeader = (checked:boolean) => {
    console.log(`switch to ${checked}`);
  }
  const githubLink = () => {
    window.open('https://github.com/Kian-404/react-ts-vite')
  }
  return (
    <>
      <Header className="site-layout-background header" style={{ padding: 0 }}>
        <div className="toggle-menu">
          {React.createElement(collapsedflag.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger icon-item',
            onClick: () => collapsed.setCollapesd(!collapsedflag.collapsed),
          })}
        </div>
        <div className="header-content">

          <div className="option-item">
            <Dropdown overlay={menu} placement="bottomCenter" arrow>
              <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                Kian <DownOutlined />
              </a>
            </Dropdown>
          </div>
          <div className="option-item">
            <Dropdown overlay={Message} placement="bottomCenter" arrow>
              <Badge className="icon-item" count={5}><BellOutlined /></Badge>
            </Dropdown>
          </div>
          <div className="option-item">
            <Tooltip placement="bottom" title="布局样式">
              <LayoutOutlined className="icon-item" onClick={showDrawer} />
            </Tooltip>
          </div>
          <div className="option-item">
            <Tooltip placement="bottom" title="Github">
              <GithubOutlined className="icon-item" onClick={githubLink} />
            </Tooltip>
          </div>
        </div>
      </Header>
      <Drawer
        title={DrawerTitle}
        placement={DrawerPlacement}
        closable={false}
        onClose={onClose}
        visible={visible}
        className="drawer"
      >
        <div className="setting-item">
          <div className="text">Sider风格</div>
          <div className="option">
            <Radio.Group
              options={options}
              onChange={ChangeTheme}
              value={sidebarTheme.theme}
              optionType="button"
              buttonStyle="solid"
            />
          </div>
        </div>
        <div className="setting-item">
          <div className="text">固定header</div>
          <div className="option">
            <Switch defaultChecked onChange={changeHeader} />
          </div>
        </div>
        <div className="setting-item">
          <div className="text">固定侧边菜单</div>
          <div className="option">
            <Switch defaultChecked onChange={changeHeader} />
          </div>
        </div>
        <div className="setting-item">
          <div className="text">开启多Tab</div>
          <div className="option">
            <Switch defaultChecked onChange={changeHeader} />
          </div>
        </div>
      </Drawer>
    </>
  )
}

export default MHeader;