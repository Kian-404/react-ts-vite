import React from 'react'
import {
  HomeOutlined,
  DashboardOutlined,
  EditOutlined,
  OrderedListOutlined,
  ProfileOutlined,
  MessageOutlined,
  FileMarkdownOutlined,
  FileSearchOutlined,
  LineChartOutlined,
  MailOutlined,
  SettingOutlined,
  UserOutlined
} from '@ant-design/icons'
interface ItemProps {
  title: String,
  icon: any,
  children?:Array<ItemProps> ,
  url?: String,

}
export const SiderItems: Array<ItemProps> = [
  {
    title: '首页',
    url:'/',
    icon: <DashboardOutlined />
  },
  {
    title: '文章管理',
    url:'/article-list',
    icon: <EditOutlined />,
    children:[
      {
        title: '文章列表',
        url:'/article-list',
        icon: <OrderedListOutlined />,
      },
      {
        title: '新建文章',
        url:'/article-new',
        icon: <EditOutlined />,
      }
    ]
  },
  {
    title: '页面管理',
    url:'/page-list',
    icon: <ProfileOutlined />
  },
  {
    title: '评论管理',
    url:'/comment-list',
    icon: <MessageOutlined />
  },
  {
    title: '文件管理',
    url:'/file-list',
    icon: <FileMarkdownOutlined />
  },
  {
    title: '搜索记录',
    url:'/search-list',
    icon: <FileSearchOutlined />
  },
  {
    title: '访问统计',
    url:'/history-list',
    icon: <LineChartOutlined />
  },
  {
    title: '邮件管理',
    url:'/email-list',
    icon: <MailOutlined />
  },
  {
    title: '系统设置',
    url:'/system-setting',
    icon: <SettingOutlined />
  },
  {
    title: '个人中心',
    url:'/about',
    icon: <UserOutlined />
  },
]