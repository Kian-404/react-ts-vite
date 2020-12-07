import React, { FC } from 'react';
import { Link } from 'react-router-dom'
import { Layout, Menu } from 'antd';
import { SiderItems, ItemProps } from './sideconfig';
import { collapsed, sidebartheme, sidebartype, tagviews } from '../../redux/models'
import './index.css'
const { Sider } = Layout;

const { SubMenu, Item } = Menu

// 递归侧边栏
const SideMenu = (menus: any) => {
  const tagViews = tagviews.useData();
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
  }
  return menus.map((item: ItemProps) => {
    if (item.children) {
      return (
        <SubMenu title={item.title} icon={item.icon} key={item.url}>
          {
            SideMenu(item.children)
          }
        </SubMenu>
      )
    } else {
      return (
        <Item key={item.url} icon={item.icon} onClick={() => showRoute(item)}>
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
  return (
    <Sider className="siderbar" trigger={null} theme={sidebarTheme.theme} collapsible collapsed={collapsedflag.collapsed}>
      <div className={`logo ${sidebarTheme.theme === 'dark' ? '' : 'light'}`}  >Hello </div>
      <Menu className='sidebar-menu' theme={sidebarTheme.theme} mode={sidebarType.sidertype} defaultSelectedKeys={defaultSelectedKeys}>
        {SideMenu(SiderItems)}
      </Menu>
    </Sider>
  )
}

export default MSider;