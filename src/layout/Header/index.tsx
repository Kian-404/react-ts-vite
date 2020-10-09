import React, { FC } from 'react';
import { Layout, Badge, Menu, Dropdown, Avatar, List } from 'antd';
import { collapsed} from '../../redux/models'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  BellOutlined,
  DownOutlined,
  LogoutOutlined,
  UserOutlined
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
  console.log(collapsedflag);
  return (
    <Header className="site-layout-background header" style={{ padding: 0 }}>
      <div className="toggle-menu">
        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
          className: 'trigger',
          onClick: () =>collapsed.setCollapesd(!collapsedflag.collapsed),
        })}
      </div>
      <div className="header-content">

        <div className="option-item">
          <Dropdown overlay={menu} placement="bottomCenter" arrow>
            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
              <Avatar style={{ backgroundColor: '#ffbf00' }}>Kian</Avatar> <DownOutlined />
            </a>
          </Dropdown>
        </div>
        <div className="option-item">
          <Dropdown overlay={Message} placement="bottomCenter" arrow>
            <Badge count={5}><BellOutlined /></Badge>
          </Dropdown>
        </div>
      </div>
    </Header>
  )
}

export default MHeader;