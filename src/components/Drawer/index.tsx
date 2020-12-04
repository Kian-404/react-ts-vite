import React from 'react';
import { Drawer, Radio, Switch } from 'antd'
import { sidebartheme, fixheader, sidebar, sidebartype, tagviewsflag } from '../../redux/models';
import './index.css'

interface propsType {
  visible: boolean,
  onClose: Function
}

const SideDrawer = ({ visible, onClose }: propsType) => {
  const sidebarTheme = sidebartheme.useData();
  const Sidebar = sidebar.useData();
  const fixHeader = fixheader.useData();
  const sidebarType = sidebartype.useData();
  const tagViewsflag = tagviewsflag.useData();
  
  const DrawerTitle = "系统布局配置";
  const DrawerPlacement = "right";
  const options = [
    { label: '亮色', value: 'light' },
    { label: '暗色', value: 'dark' },
  ];
  const changeMode = (checked: boolean) => {
    sidebartype.setType(checked ? 'vertical' : 'inline');
  };
  const ChangeTheme = (e: { target: { value: string | undefined; }; }) => {
    sidebartheme.setTheme(e.target.value)
    console.log('radio4 checked', e.target.value);

  };
  const changeHeader = (checked: boolean) => {
    console.log(`switch to ${checked}`);
    fixheader.setFixHeader(checked);
  }
  const changeTabs = (checked: boolean) => {
    console.log(`switch to ${checked}`);
    tagviewsflag.setTagViewsFlag(checked)
  }
  const changeSidebar = (checked: boolean) => {
    sidebar.setSdierBar(checked);
  }
  return (
    <Drawer
      title={DrawerTitle}
      placement={DrawerPlacement}
      closable={false}
      onClose={onClose}
      visible={visible}
      className="drawer"
    >
      <div className="setting-item">
        <div className="text">Sider风格</div>
        <div className="option">
          <Radio.Group
            options={options}
            onChange={ChangeTheme}
            value={sidebarTheme.theme}
            optionType="button"
            buttonStyle="solid"
          />
        </div>
      </div>
      <div className="setting-item">
        <div className="text">Sider Mode</div>
        <div className="option">
          <Switch defaultChecked onChange={changeMode} />
        </div>
      </div>
      <div className="setting-item">
        <div className="text">固定Header</div>
        <div className="option">
          <Switch defaultChecked onChange={changeHeader} />
        </div>
      </div>
      <div className="setting-item">
        <div className="text">侧边菜单</div>
        <div className="option">
          <Switch defaultChecked onChange={changeSidebar} />
        </div>
      </div>
      <div className="setting-item">
        <div className="text">开启多Tab</div>
        <div className="option">
          <Switch onChange={changeTabs} />
        </div>
      </div>
    </Drawer>
  )
}

export default SideDrawer;