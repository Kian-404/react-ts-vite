import React, { FC } from 'react'
import Dashboard from '../../components/Dashboard'
import LineChart from '../../components/Charts/line'
import BarChart from '../../components/Charts/bar'
import PieChart from '../../components/Charts/pie'
import { Row, Col } from 'antd';
const Home: FC = () => {
  return (
    <div className="home-page">
      <Row align="bottom" gutter={{ xs: 24, sm: 12, md: 12, lg: 8, xl: 6 }} >
        <Col span={24}>
          <Dashboard />
        </Col>
        <Col xs={24} sm={24} md={24} lg={12} xl={12}>
          <LineChart />
        </Col>
        <Col xs={24} sm={24} md={24} lg={12} xl={12}>
          <BarChart />
        </Col>
        <Col xs={24} sm={24} md={24} lg={12} xl={12}>
          <PieChart/>
        </Col>
      </Row>

    </div>

  )
}

export default Home;