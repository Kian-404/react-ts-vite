import React, { useState, useEffect } from 'react'
import { Table } from 'antd'
import { getBaseTable, } from '../../../api/mock'
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    defaultSortOrder: 'descend',
    sorter: (a: { age: number; }, b: { age: number; }) => a.age - b.age,
  },
  {
    title: 'gender',
    dataIndex: 'gender',
    filters: [
      {
        text: '男',
        value: '男',
      },
      {
        text: '女',
        value: '女',
      },
    ],
    onFilter: (value: any, record: { gender: string | any[]; }) => record.gender.indexOf(value) === 0,
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
];

function onChange(pagination: any, filters: any, sorter: any, extra: any) {
  console.log('params', pagination, filters, sorter, extra);
}
const BaseTable = () => {
  const [dataSource, setdataSource] = useState([]);
  useEffect(() => {
    const BaseTableData = () => {
      getBaseTable({}).then(res => {
        console.log(res.data)
        setdataSource(res.data.data);
      })
    }
    BaseTableData();
    return () => {

    };
  }, []);
  return (
    <>
      <Table columns={columns} dataSource={dataSource} pagination={{ defaultCurrent: 1, total: 500 }} onChange={onChange} />
    </>
  )
}

export default BaseTable;