import React, { FC } from 'react'
import LineChart from '../../components/Charts/line'
import BarChart from '../../components/Charts/bar'
import { Row, Col } from 'antd';
const Home: FC = () => {
  return (
    <div className="home-page">
      <Row align="bottom" gutter={{ xs: 24, sm: 12, md: 12, lg: 8, xl: 6 }} >
        <Col >
          <LineChart />
        </Col>
        <Col >
          <BarChart />
        </Col>
        <Col >
          123
        </Col>
        <Col >
          123
        </Col>
      </Row>

    </div>

  )
}

export default Home;