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
  key:string,
  title: String,
  icon: any,
  children?: Array<ItemProps>,
  url?: String,

}
export const SiderItems: Array<ItemProps> = [
  {
    key:'1',
    title: '首页',
    url: '/',
    icon: <DashboardOutlined />
  },
  {
    key:'2',
    title: '文章管理',
    url: '/main/article-list',
    icon: <EditOutlined />,
    children: [
      {
        key:'2-1',
        title: '文章列表',
        url: '/main/article-list',
        icon: <OrderedListOutlined />,
      },
      {
        key:'2-2',
        title: '新建文章',
        url: '/main/article-new',
        icon: <EditOutlined />,
      }
    ]
  },
  {
    key:'3',
    title: '页面管理',
    url: '/main/page-list',
    icon: <ProfileOutlined />
  },
  {
    key:'4',
    title: '扩展组件',
    url: '/main/',
    icon: <AppstoreOutlined />,
    children: [
      {
        key:'4-1',
        title: '富文本编辑器',
        url: '/main/rishtext-editor',
        icon: <FormOutlined />,
      },
      {
        key:'4-2',
        title: '代码编译器',
        url: '/main/code-editor',
        icon: <CodeOutlined />,
      },
      {
        key:'4-3',
        title: 'Markdown编译器',
        url: '/main/markdown-editor',
        icon: <FileMarkdownOutlined />,
      }
    ]
  },
  {
    key:'5',
    title: 'Table组件',
    url: '/table/',
    icon: <InsertRowBelowOutlined />,
    children: [
      {
        key:'5-1',
        title: '基本表格',
        url: '/main/table-base',
        icon: <TableOutlined />,
      },
      {
        key:'5-2',
        title: '动态表格',
        url: '/main/table-dynamic',
        icon: <TableOutlined />,
      },
      {
        key:'5-3',
        title: '编辑表格',
        url: '/main/table-edit',
        icon: <TableOutlined />,
      },
      {
        key:'5-4',
        title: '多数据表格',
        url: '/main/table-bigdata',
        icon: <TableOutlined />,
      }
    ]
  },
  {
    key:'6',
    title: '评论管理',
    url: '/main/main/comment-list',
    icon: <MessageOutlined />
  },
  {
    key:'7',
    title: '文件管理',
    url: '/main/file-list',
    icon: <FileMarkdownOutlined />
  },
  {
    key:'8',
    title: '搜索记录',
    url: '/main/search-list',
    icon: <FileSearchOutlined />
  },
  {
    key:'9',
    title: '访问统计',
    url: '/history-list',
    icon: <LineChartOutlined />
  },
  {
    key:'10',
    title: '邮件管理',
    url: '/email-list',
    icon: <MailOutlined />
  },
  {
    key:'11',
    title: '权限页面',
    url: '/main/auth-page',
    icon: <MehOutlined />,
    children: [
      {
        key:'11-1',
        title: '403',
        url: '/main/403',
        icon: <RobotOutlined />
      },
      {
        key:'11-2',
        title: '404',
        url: '/main/404',
        icon: <RobotOutlined />
      },
      {
        key:'11-3',
        title: '500',
        url: '/main/500',
        icon: <RobotOutlined />
      },
    ]

  },
  {
    key:'12',
    title: '系统设置',
    url: '/main/system-setting',
    icon: <SettingOutlined />,
    children: [
      {
        key:'12-1',
        title: '个人中心',
        url: '/main/about',
        icon: <UserOutlined />
      },
      {
        key:'12-2',
        title: '安全设置',
        url: '/main/safesetting',
        icon: <SafetyOutlined />
      },
      {
        key:'12-3',
        title: '权限设置',
        url: '/main/securitysetting',
        icon: <SecurityScanOutlined />
      },
    ]

  },

]