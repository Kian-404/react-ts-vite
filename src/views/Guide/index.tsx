import React from 'react';
import { Button } from 'antd';
import { QuestionOutlined } from '@ant-design/icons';
import Driver from 'driver.js';
import 'driver.js/dist/driver.min.css';
import steps from './steps'
const GuidePage = () => {
  const openGuide = () =>{
    initGuide();
  }
  const initGuide = () =>{
    const driver =  new Driver();
    driver.defineSteps(steps)
    driver.start();
  }
  return (
    <div className="guide-page">
      <Button type="primary" onClick={openGuide} icon={<QuestionOutlined />}>打开引导</Button>
    </div>
  )
}

export default GuidePage;