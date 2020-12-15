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
  TableOutlined,
  SendOutlined,
  BarChartOutlined
} from '@ant-design/icons'
import { PieChartOutlined } from '@ant-design/icons'
import { RadarChartOutlined } from '@ant-design/icons'
import { AreaChartOutlined } from '@ant-design/icons'
export interface ItemProps {
  key: string,
  title: String,
  icon: any,
  children?: Array<ItemProps>,
  url?: String,

}
export const SiderItems: Array<ItemProps> = [
  {
    key: '1',
    title: '首页',
    url: '/',
    icon: <DashboardOutlined />
  },
  {
    key: 'guide',
    title: '引导页',
    url: '/guide',
    icon: <SendOutlined rotate="-45" />
  },
  {
    key: '2',
    title: '文章管理',
    url: '/article-list',
    icon: <EditOutlined />,
    children: [
      {
        key: '2-1',
        title: '文章列表',
        url: '/article-list',
        icon: <OrderedListOutlined />,
      },
      {
        key: '2-2',
        title: '新建文章',
        url: '/article-new',
        icon: <EditOutlined />,
      }
    ]
  },
  {
    key: '3',
    title: '页面管理',
    url: '/page-list',
    icon: <ProfileOutlined />
  },
  {
    key: '4',
    title: '扩展组件',
    url: '/',
    icon: <AppstoreOutlined />,
    children: [
      {
        key: '4-1',
        title: '富文本编辑器',
        url: '/rishtext-editor',
        icon: <FormOutlined />,
      },
      {
        key: '4-2',
        title: '代码编译器',
        url: '/code-editor',
        icon: <CodeOutlined />,
      },
      {
        key: '4-3',
        title: 'Markdown编译器',
        url: '/markdown-editor',
        icon: <FileMarkdownOutlined />,
      }
    ]
  },
  {
    key: '5',
    title: 'Table组件',
    url: '/table/',
    icon: <InsertRowBelowOutlined />,
    children: [
      {
        key: '5-1',
        title: '基本表格',
        url: '/table-base',
        icon: <TableOutlined />,
      },
      {
        key: '5-2',
        title: '动态表格',
        url: '/table-dynamic',
        icon: <TableOutlined />,
      },
      {
        key: '5-3',
        title: '编辑表格',
        url: '/table-edit',
        icon: <TableOutlined />,
      },
      {
        key: '5-4',
        title: '多数据表格',
        url: '/table-bigdata',
        icon: <TableOutlined />,
      }
    ]
  },
  {
    key: 'chart',
    title: '图表组件',
    url: '/chart/',
    icon: <BarChartOutlined />,
    children: [
      {
        key: 'line-chart',
        title: '折线图',
        url: '/line-chart',
        icon: <LineChartOutlined />,
      },
      {
        key: 'pie-chart',
        title: '饼状图',
        url: '/pie-chart',
        icon: <PieChartOutlined />,
      },
      {
        key: 'radar-chart',
        title: '雷达图',
        url: '/bar-chart',
        icon: <RadarChartOutlined />,
      },
      {
        key: 'area-chart',
        title: '区域图',
        url: '/funnel-chart',
        icon: <AreaChartOutlined />,
      }
    ]
  },
  {
    key: '6',
    title: '评论管理',
    url: '/comment-list',
    icon: <MessageOutlined />
  },
  {
    key: '7',
    title: '文件管理',
    url: '/file-list',
    icon: <FileMarkdownOutlined />
  },
  {
    key: '8',
    title: '搜索记录',
    url: '/search-list',
    icon: <FileSearchOutlined />
  },
  {
    key: '9',
    title: '访问统计',
    url: '/history-list',
    icon: <LineChartOutlined />
  },
  {
    key: '10',
    title: '邮件管理',
    url: '/email-list',
    icon: <MailOutlined />
  },
  {
    key: '11',
    title: '权限页面',
    url: '/auth-page',
    icon: <MehOutlined />,
    children: [
      {
        key: '11-1',
        title: '403',
        url: '/403',
        icon: <RobotOutlined />
      },
      {
        key: '11-2',
        title: '404',
        url: '/404',
        icon: <RobotOutlined />
      },
      {
        key: '11-3',
        title: '500',
        url: '/500',
        icon: <RobotOutlined />
      },
    ]

  },
  {
    key: '12',
    title: '系统设置',
    url: '/system-setting',
    icon: <SettingOutlined />,
    children: [
      {
        key: '12-1',
        title: '个人中心',
        url: '/about',
        icon: <UserOutlined />
      },
      {
        key: '12-2',
        title: '安全设置',
        url: '/safesetting',
        icon: <SafetyOutlined />
      },
      {
        key: '12-3',
        title: '权限设置',
        url: '/securitysetting',
        icon: <SecurityScanOutlined />
      },
    ]

  },

]