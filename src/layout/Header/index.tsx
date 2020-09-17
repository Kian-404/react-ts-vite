import React, { ElementType } from 'react';
import { connect } from 'react-redux'
import { toggleCollapsed } from '../../redux/actions/index'
import { Layout, Badge, Menu, Dropdown, Avatar } from 'antd';
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
const MyHeader: ElementType = ({ collapsed, setCollapesd }: props) => {
  return (
    <Header className="site-layout-background header" style={{ padding: 0 }}>
      <div className="toggle-menu">
        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
          className: 'trigger',
          onClick: () => setCollapesd(!collapsed),
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
          <Badge count={5}><BellOutlined /></Badge>
        </div>
      </div>
    </Header>
  )
}

const mapStateToProps = (state: any) => {
  return {
    collapsed: state.Collapsed.collapsed
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    setCollapesd: (collapsed: Boolean) => {
      dispatch(toggleCollapsed(collapsed))
    }
  }
}


const MHeader = connect(mapStateToProps, mapDispatchToProps)(MyHeader)
export default MHeader;