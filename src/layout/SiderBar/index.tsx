import React, { ElementType } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Layout, Menu } from 'antd';
import { SiderItems } from './sideconfig';
import './index.css'
const { Sider } = Layout;
interface props {
  collapsed: boolean
}
const defaultSelectedKeys = ['1'];
const MySider: ElementType = ({ collapsed }: props) => {
  return (
    <Sider className="siderbar" trigger={null} collapsible collapsed={collapsed}>
      <div className="logo" >Hello </div>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={defaultSelectedKeys}>
        {SiderItems.map((item, index) => {
          return (
            <Menu.Item key={index} icon={item.icon}>
              <Link to={item.url}>
                {item.title}
              </Link>
            </Menu.Item>
          )
        })
        }
      </Menu>
    </Sider>
  )
}

const mapStateToProps = (state: any) => {
  return {
    collapsed: state.Collapsed.collapsed
  }
}
const ComponentSider = connect(mapStateToProps)(MySider)
const MSider = () => {
  return (
    <ComponentSider />
  )
};

export default MSider;