import React, { FC, useState } from 'react'
import { Layout } from 'antd';
import './index.css'

import MSider from './SiderBar'
import MHeader from './Header'
import MContent from './Content'
const MLayout: FC = () => {

  return (
    <Layout>
      <MSider />
      <Layout className="site-layout">
        <MHeader />
        <MContent />
      </Layout>
    </Layout>
  );
}
export default MLayout