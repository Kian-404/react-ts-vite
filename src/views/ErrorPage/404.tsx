import React from 'react'
import { Link } from 'react-router-dom'
import { Result, Button } from 'antd'

const ERR_404 = () => {
  const routerHome = () => {

  }
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Button type="primary">
          <Link to="/">Back Home</Link>
        </Button>
      }
    />
  )
}

export default ERR_404