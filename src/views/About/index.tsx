import React, { FC, useEffect } from 'react'
import { getMockData } from '../../api/mock'
import { Table, Button } from 'antd'
import CodeEditor from '../../components/Editor/CodeEditor'

const dataSource = [
  {
    key: '1',
    name: '胡彦斌',
    age: 32,
    address: '西湖区湖底公园1号',
  },
  {
    key: '2',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号',
  },
];

const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
  },
];
const About: FC = () => {
  let userinfo: any[] = [];
   getMockData({}).then(res => {
    console.log(res)
    userinfo = res.data.userinfo;
    console.log(userinfo);
  })
  console.log(Table);
  return (
    <div>About
      {/* <CodeEditor/> */}
      <ul>
        {userinfo}
        {userinfo.map((item, index) => {
          return <li>{item.name}</li>
        })}
      </ul>
    </div>

  )
}

export default About;