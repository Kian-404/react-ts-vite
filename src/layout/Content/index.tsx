import React from 'react'
import { Layout } from 'antd';
import './index.css';
import { MainRoutes } from '../../routers'
const { Content } = Layout;
const MContent = () => {
  return (
    <Content className="site-layout-background">
      <MainRoutes />
    </Content>
  )
}

export default MContent