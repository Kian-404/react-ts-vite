import React from 'react'
import { Link } from 'react-router-dom'
import { Result, Button } from 'antd';

const ERR_500 = () => {
  return (
    <Result
      status="500"
      title="500"
      subTitle="Sorry, something went wrong."
      extra={
        <Button type="primary">
          <Link to="/">Back Home</Link>
        </Button>
      }
    />
  )
}

export default ERR_500