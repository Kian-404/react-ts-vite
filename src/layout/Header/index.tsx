import React, { ElementType } from 'react';
import { connect } from 'react-redux'
import { toggleCollapsed } from '../../redux/actions/index'
import { Layout } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons';
import './index.css'

const { Header, } = Layout;
interface props {
  collapsed: Boolean,
  setCollapesd: Function
}
const MyHeader:ElementType = ({ collapsed, setCollapesd }: props) => {
  return (
    <Header className="site-layout-background" style={{ padding: 0 }}>
      {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
        className: 'trigger',
        onClick: () => setCollapesd(!collapsed),
      })}
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