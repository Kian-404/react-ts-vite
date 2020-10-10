import React, {FC } from 'react';
import { Link } from 'react-router-dom'
import { Layout, Menu } from 'antd';
import { SiderItems } from './sideconfig';
import { collapsed, sidebartheme} from '../../redux/models'
import './index.css'
const { Sider } = Layout;

const {SubMenu, Item} = Menu
// 递归侧边栏
const SideMenu = (menus: any) => {
  return menus.map((item: { children: any; title: any; icon: any; url: any; }) => {
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
        <Item key={item.url} icon={item.icon}>
          <Link to={item.url}>
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
  return (
    <Sider className="siderbar" trigger={null} collapsible collapsed={collapsedflag.collapsed}>
      <div className="logo" >Hello </div>
      <Menu className='sidebar-menu' theme={sidebarTheme.theme} mode="inline" defaultSelectedKeys={defaultSelectedKeys}>
        {SideMenu(SiderItems)}
      </Menu>
    </Sider>
  )
}

export default MSider;