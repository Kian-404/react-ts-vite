import React from 'react'
import {
  HomeOutlined,
  EditOutlined,
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
  url?: String,
  icon: any
}
export const SiderItems: Array<ItemProps> = [
  {
    title: '首页',
    url:'/',
    icon: <HomeOutlined />
  },
  {
    title: '文章管理',
    url:'/article-list',
    icon: <EditOutlined />
  },
  {
    title: '页面管理',
    icon: <ProfileOutlined />
  },
  {
    title: '评论管理',
    icon: <MessageOutlined />
  },
  {
    title: '文件管理',
    icon: <FileMarkdownOutlined />
  },
  {
    title: '搜索记录',
    icon: <FileSearchOutlined />
  },
  {
    title: '访问统计',
    icon: <LineChartOutlined />
  },
  {
    title: '邮件管理',
    icon: <MailOutlined />
  },
  {
    title: '系统设置',
    icon: <SettingOutlined />
  },
  {
    title: '个人中心',
    icon: <UserOutlined />
  },
]