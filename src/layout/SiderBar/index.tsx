import React, { FC } from 'react';
import { Link } from 'react-router-dom'
import { Layout, Menu } from 'antd';
import { SiderItems, ItemProps } from './sideconfig';
import { collapsed, sidebartheme, sidebartype, tagviews, currentTag } from '../../redux/models'
import './index.css'
import Logo from '../Logo'
const { Sider } = Layout;

const { SubMenu, Item } = Menu

// 递归侧边栏
const SideMenu = (menus: any) => {
  const tagViews = tagviews.useData();
  const HighlightTag = currentTag.useData();
  const showRoute = (item: ItemProps) => {
    console.log(item)
    console.log(tagViews.routes);
    let isNotArray = true;
    tagViews.routes.forEach((route: { title: String; }, index: any) => {
      if (route.title === item.title) {
        isNotArray = false;
      }
    })
    if (isNotArray) {
      tagviews.setTagViews(item);
    }
    currentTag.setCurrentTag(item);
  }
  return menus.map((item: ItemProps) => {
    if (item.children) {
      return (
        <SubMenu title={item.title} icon={item.icon} key={item.key}>
          {
            SideMenu(item.children)
          }
        </SubMenu>
      )
    } else {
      return (
        <Item key={item.key} icon={item.icon} onClick={() => showRoute(item)}>
          <Link to={item.url} >
            {item.title}
          </Link>
        </Item>
      )
    }
  })
}

const defaultSelectedKeys = ['1'];
const MSider: FC = () => {
  const collapsedflag = collapsed.useData();
  const sidebarTheme = sidebartheme.useData();
  const sidebarType = sidebartype.useData();
  const HighlightTag = currentTag.useData();
  return (
    <Sider className="siderbar" trigger={null} theme={sidebarTheme.theme} collapsible collapsed={collapsedflag.collapsed}>
      <Logo />
      <Menu className='sidebar-menu' selectedKeys={[HighlightTag.currentTag.key]} theme={sidebarTheme.theme} mode={sidebarType.sidertype} defaultSelectedKeys={defaultSelectedKeys}>
        {SideMenu(SiderItems)}
      </Menu>
    </Sider>
  )
}

export default MSider;