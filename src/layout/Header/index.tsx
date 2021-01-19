import React, { FC, useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { Layout, Badge, Menu, Dropdown, Tooltip, List, Tag, Drawer, Radio, Switch } from 'antd';
import { collapsed, sidebar, tagviewsflag, tagviews, currentTag } from '../../redux/models'
import SideDrawer from '../../components/Drawer';
import { ItemProps } from '../SiderBar/sideconfig';
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
import { Popover } from 'antd';
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
  '未读消息1',
  '未读消息2',
  '未读消息3',
  '未读消息4',
  '未读消息5',
];

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
  const tagViews = tagviews.useData();
  const HighlightTag = currentTag.useData();
  console.log(collapsedflag);

  // 侧边抽屉显示隐藏
  const [visible, setVisible] = useState(false);
  const [routes, setRoutes] = useState(['/']);
  const [MessageCount, setMessageCount] = useState(5);

  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  const githubLink = () => {
    window.open('https://github.com/Kian-404/react-ts-vite')
  }
  const TagStatus = (item: ItemProps) => {
    currentTag.setCurrentTag(item)
  }
  const closeTag = (item: ItemProps, index: number) => {
    console.log(item);
    console.log(index);
    let tempItem = tagViews.routes[index - 1]
    console.log(tempItem);
    currentTag.setCurrentTag(tempItem)
    tagviews.removeTagViews(index);
  }
  const readMessage = (item: any) => {
    console.log(item);
    setMessageCount(MessageCount>0?MessageCount-1:0)
  }
  const content = (
    <List
      dataSource={data}
      renderItem={(item: any) => (
        <List.Item onClick={()=>readMessage(item)}>
          {item}
        </List.Item>
      )}
    />
  )
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
            {/* <Dropdown overlay={Message} placement="bottomCenter" arrow> */}
            <Popover content={content} title="消息列表">
              <Badge className="icon-item" count={MessageCount}><BellOutlined /></Badge>
            </Popover>
            {/* </Dropdown> */}
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
          tagViews.routes.map((item: ItemProps, index: number) => {
            return (
              <Tag closable onClose={() => closeTag(item, index)} color={HighlightTag.currentTag.key == item.key ? '#87d068' : ''} onClick={() => TagStatus(item)}>
                <Link to={item.url} >
                  {item.icon}{item.title}
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