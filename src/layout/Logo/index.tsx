import React, { FC } from 'react';
import { sidebartheme, logoshow, collapsed } from '../../redux/models'
import './index.css'
const Logo: FC = () => {
  const sidebarTheme = sidebartheme.useData();
  const LogoShow = logoshow.useData();
  const collapsedFlag = collapsed.useData();
  const title = "hello react"
  return (
    <>
      {
        LogoShow.show ? <div className={`logo ${sidebarTheme.theme === 'dark' ? '' : 'light'}`}  >
          <img className="sidebar-logo" src="images/logo.png" alt="" />
          {collapsedFlag.collapsed ? '' : <h1 className='text'>{title}</h1>}
        </div> : ''
      }
    </>
  )
}

export default Logo;