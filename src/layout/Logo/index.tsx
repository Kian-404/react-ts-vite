import React, { FC } from 'react';
import { sidebartheme, logoshow } from '../../redux/models'
const Logo: FC = () => {
  const sidebarTheme = sidebartheme.useData();
  const LogoShow = logoshow.useData();
  const title = "hello react"
  return (
    <>
      {
        LogoShow.show ? <div className={`logo ${sidebarTheme.theme === 'dark' ? '' : 'light'}`}  >
          <h1>{title}</h1>
        </div> : ''
      }
    </>
  )
}

export default Logo;