import React from 'react';
import { connect } from 'react-redux'
import { Layout, Menu } from 'antd';
import { SiderItems } from './sideconfig';
import './index.css'
const { Sider } = Layout;
interface props {
  collapsed: boolean
}
const MySider = ({ collapsed }: props) => {
  return (
    <Sider className="siderbar" trigger={null} collapsible collapsed={collapsed}>
      <div className="logo" >Hello </div>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
        {SiderItems.map((item, index) => {
          return (
            <Menu.Item key={index} icon={item.icon}>
              {item.title}
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
const MSider = connect(mapStateToProps)(MySider);

export default MSider;