import React, { FC, useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { Layout, Badge, Menu, Dropdown, Tooltip, List,Tag, Drawer, Radio, Switch } from 'antd';
import { collapsed, sidebar, tagviewsflag } from '../../redux/models'
import SideDrawer from '../../components/Drawer'
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
const MHeader = () => {
  useEffect(() => {
    console.log(window.location.pathname);
    let RouteName = window.location.pathname;
    let tempRoutes = [];
    if (routes.indexOf(RouteName) < 0) {
      tempRoutes = [...routes, RouteName]

    } else {
      tempRoutes = [...routes];
    }
    setRoutes(tempRoutes)
    console.log(routes)
    return () => {
      // cleanup
    };
  }, [window.location.pathname]);
  const collapsedflag = collapsed.useData();
  const SideBar = sidebar.useData();
  const tagViewsFlag = tagviewsflag.useData();
  console.log(collapsedflag);

  // 侧边抽屉显示隐藏
  const [visible, setVisible] = useState(false);
  const [routes, setRoutes] = useState([]);

  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  const githubLink = () => {
    window.open('https://github.com/Kian-404/react-ts-vite')
  }
  return (
    <>
      <Header className="site-layout-background header" style={{ padding: 0 }}>
        <div className="toggle-menu">
          {SideBar.siderbar ? React.createElement(collapsedflag.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger icon-item',
            onClick: () => collapsed.setCollapesd(!collapsedflag.collapsed),
          }) : ""
          }
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
      {
        tagViewsFlag.tagviewsflag ? <div className="tag-views">{
          routes.map((item, index) => {
            return (
              <Tag>
                <Link to={item} >
                  {item}
                </Link>
              </Tag>
            )
          })
        }</div> : ''
      }

      <SideDrawer visible={visible} onClose={onClose} />
    </>
  )
}

export default MHeader;