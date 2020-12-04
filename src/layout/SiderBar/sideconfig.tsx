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
  SecurityScanOutlined,
  CodeOutlined,
  FormOutlined,
  MehOutlined,
  RobotOutlined,
  AppstoreOutlined,
  InsertRowBelowOutlined,
  TableOutlined
} from '@ant-design/icons'
export interface ItemProps {
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
    title: '扩展组件',
    url: '/main/',
    icon: <AppstoreOutlined />,
    children: [
      {
        title: '富文本编辑器',
        url: '/main/rishtext-editor',
        icon: <FormOutlined />,
      },
      {
        title: '代码编译器',
        url: '/main/code-editor',
        icon: <CodeOutlined />,
      },
      {
        title: 'Markdown编译器',
        url: '/main/markdown-editor',
        icon: <FileMarkdownOutlined />,
      }
    ]
  },
  {
    title: 'Table组件',
    url: '/table/',
    icon: <InsertRowBelowOutlined />,
    children: [
      {
        title: '基本表格',
        url: '/main/table-base',
        icon: <TableOutlined />,
      },
      {
        title: '动态表格',
        url: '/main/table-dynamic',
        icon: <TableOutlined />,
      },
      {
        title: '编辑表格',
        url: '/main/table-edit',
        icon: <TableOutlined />,
      },
      {
        title: '多数据表格',
        url: '/main/table-bigdata',
        icon: <TableOutlined />,
      }
    ]
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
    title: '权限页面',
    url: '/main/auth-page',
    icon: <MehOutlined />,
    children: [
      {
        title: '403',
        url: '/main/403',
        icon: <RobotOutlined />
      },
      {
        title: '404',
        url: '/main/404',
        icon: <RobotOutlined />
      },
      {
        title: '500',
        url: '/main/500',
        icon: <RobotOutlined />
      },
    ]

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