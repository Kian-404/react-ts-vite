import React from 'react'
import { Layout } from 'antd';
import './index.css';
import { MainRoutes } from '../../routers'
import { fixheader } from '../../redux/models'

const { Content } = Layout;
const MContent = () => {
  const fixheaderflag = fixheader.useData();
  return (
    <Content className={`${fixheaderflag.fixheader?'fixheader':''} site-layout-background`}>
      <MainRoutes />
    </Content>
  )
}

export default MContent