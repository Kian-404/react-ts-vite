import React, { useEffect, useState, FC } from 'react';
import { Table, Button } from 'antd';
import './article-list.css'
import { getArtileList } from '../../api/mock'

const columns = [
  {
    title: '文章名称',
    dataIndex: 'title',
    key: 'tilte',
    align:'center',
    ellipsis:true
  },
  {
    title: '作者',
    dataIndex: 'name',
    key: 'title',
    align:'center'
  },
  {
    title: '创建时间',
    dataIndex: 'date',
    key: 'date',
    align:'center'
  },
  {
    title: '操作',
    dataIndex: '',
    key: 'x',
    align:'center',
    render: () => {
      return (
        <div className='btn-list'>
          <Button type="primary" shape="round">详情</Button>
          <Button type="primary" shape="round">编辑</Button>
          <Button type="danger" shape="round">删除</Button>
        </div>
      )

    },
  },
];
const ArticleTable: FC = () => {
  const [dataSource, setdataSource] = useState([]);
  useEffect(() => {
    const ArtileList = () => {
      getArtileList({}).then((res: any) => {
        console.log(res.data);
        setdataSource(res.data.data)
      })
    }
    ArtileList();
  }, []);
  return (
    <Table className="article-table" dataSource={dataSource} columns={columns} />
  )
}
console.log(ArticleTable);
export default ArticleTable;