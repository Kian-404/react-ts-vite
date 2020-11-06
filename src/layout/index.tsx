import React, { FC, useState } from 'react'
import { sidebar} from '../redux/models'
import { Layout } from 'antd';
import './index.css'

import MSider from './SiderBar'
import MHeader from './Header'
import MContent from './Content'
const MLayout: FC = () => {
  const Sidebar = sidebar.useData();
  return (
    <Layout>
      {
        Sidebar.siderbar?<MSider />:''
      }
      <Layout className="site-layout">
        <MHeader />
        <MContent />
      </Layout>
    </Layout>
  );
}
export default MLayout