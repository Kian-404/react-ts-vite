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
  UserOutlined,
  SafetyOutlined,
  SecurityScanOutlined
} from '@ant-design/icons'
interface ItemProps {
  title: String,
  icon: any,
  children?: Array<ItemProps>,
  url?: String,

}
export const SiderItems: Array<ItemProps> = [
  {
    title: '首页',
    url: '/',
    icon: <DashboardOutlined />
  },
  {
    title: '文章管理',
    url: '/main/article-list',
    icon: <EditOutlined />,
    children: [
      {
        title: '文章列表',
        url: '/main/article-list',
        icon: <OrderedListOutlined />,
      },
      {
        title: '新建文章',
        url: '/main/article-new',
        icon: <EditOutlined />,
      }
    ]
  },
  {
    title: '页面管理',
    url: '/main/page-list',
    icon: <ProfileOutlined />
  },
  {
    title: '评论管理',
    url: '/main/main/comment-list',
    icon: <MessageOutlined />
  },
  {
    title: '文件管理',
    url: '/main/file-list',
    icon: <FileMarkdownOutlined />
  },
  {
    title: '搜索记录',
    url: '/main/search-list',
    icon: <FileSearchOutlined />
  },
  {
    title: '访问统计',
    url: '/history-list',
    icon: <LineChartOutlined />
  },
  {
    title: '邮件管理',
    url: '/email-list',
    icon: <MailOutlined />
  },
  {
    title: '系统设置',
    url: '/main/system-setting',
    icon: <SettingOutlined />,
    children: [
      {
        title: '个人中心',
        url: '/main/about',
        icon: <UserOutlined />
      },
      {
        title: '安全设置',
        url: '/main/safesetting',
        icon: <SafetyOutlined />
      },
      {
        title: '权限设置',
        url: '/main/securitysetting',
        icon: <SecurityScanOutlined />
      },
    ]

  },

]