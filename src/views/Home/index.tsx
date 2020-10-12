import React, { FC } from 'react'
import Dashboard from '../../components/Dashboard'
import LineChart from '../../components/Charts/line'
import BarChart from '../../components/Charts/bar'
import PieChart from '../../components/Charts/pie'
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
            <LineChart />
          </Card>
        </Col>
        <Col xs={24} sm={24} md={24} lg={12} xl={12}>
          <Card className="card" title="数据统计" hoverable bordered={true} >
            <BarChart />
          </Card>
        </Col>
        <Col xs={24} sm={24} md={24} lg={12} xl={12}>
          <Card className="card" title="数据统计" hoverable bordered={false} >
            <PieChart />
          </Card>
        </Col>
      </Row>

    </div>

  )
}

export default Home;