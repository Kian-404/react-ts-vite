import React, { FC } from 'react'
import Dashboard from '../../components/Dashboard'
import LineChart from '../../components/Charts/line'
import BarChart from '../../components/Charts/bar'
import PieChart from '../../components/Charts/pie'
import FunnelChart from '../../components/Charts/funnel'

import './index.css'
import { Row, Col, Card } from 'antd';
const Home: FC = () => {
  return (
    <div className="home-page">
      <Row align="bottom" gutter={{ xs: 24, sm: 12, md: 12, lg: 8, xl: 6 }} >
        <Col span={24}>
          <Dashboard />
        </Col>
        <Col xs={24} sm={24} md={24} lg={12} xl={12}>
          <Card className="card" title="数据统计" hoverable bordered={false} >
            <div className="chart-area">
              <LineChart />
            </div>
          </Card>
        </Col>
        <Col xs={24} sm={24} md={24} lg={12} xl={12}>
          <Card className="card" title="数据统计" hoverable bordered={true} >
            <div className="chart-area">
              <BarChart />
            </div>
          </Card>
        </Col>
        <Col xs={24} sm={24} md={24} lg={12} xl={12}>
          <Card className="card" title="数据统计" hoverable bordered={false} >
            <div className="chart-area">
              <PieChart />
            </div>
          </Card>
        </Col>
        <Col xs={24} sm={24} md={24} lg={12} xl={12}>
          <Card className="card" title="数据统计" hoverable bordered={false} >
            <div className="chart-area">
              <FunnelChart />
            </div>
          </Card>
        </Col>
      </Row>

    </div>

  )
}

export default Home;