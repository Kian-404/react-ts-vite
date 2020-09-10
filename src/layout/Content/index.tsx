import React from 'react'
import { Layout } from 'antd';
import './index.css';
import Router from '../../routers'
const { Content } = Layout;
const MContent = () => {
  return (
    <Content className="site-layout-background">
      <Router/>
    </Content>
  )
}

export default MContent