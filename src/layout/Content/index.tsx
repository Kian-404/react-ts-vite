import React from 'react'
import { Layout } from 'antd';
import './index.css';
import Routes from '../../routers'
const { Content } = Layout;
const MContent = () => {
  return (
    <Content className="site-layout-background">
      <Routes/>
    </Content>
  )
}

export default MContent