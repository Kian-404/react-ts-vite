import { Model } from "@redux-model/react";
import { ItemProps } from '../../layout/SiderBar/sideconfig'

interface CollapsedData {
  collapsed: boolean;
}
interface FixHeaderData {
  fixheader: boolean;
}
interface SideBarData {
  siderbar: boolean;
}
interface TagViewsFlagData {
  tagviewsflag: boolean;
}
interface SideBarTypeData {
  sidertype: String;
}
interface ThemeData {
  theme: String
}
interface TagViewsData {
  routes: Array<ItemProps>
}

class Collapsed extends Model<CollapsedData> {
  setCollapesd = this.action((state, collapsed: boolean = true) => {
    state.collapsed = collapsed;
  });

  protected initialState(): CollapsedData {
    return {
      collapsed: false
    };
  }
}


class FixHeader extends Model<FixHeaderData> {
  setFixHeader = this.action((state, fixheader: boolean = true) => {
    state.fixheader = fixheader;
  });

  protected initialState(): FixHeaderData {
    return {
      fixheader: true
    };
  }
}

class SideBar extends Model<SideBarData> {
  setSdierBar = this.action((state, siderbar: boolean = true) => {
    state.siderbar = siderbar;
  });

  protected initialState(): SideBarData {
    return {
      siderbar: true
    };
  }
}
class TagViewsFlag extends Model<TagViewsFlagData> {
  setTagViewsFlag = this.action((state, tagviewsflag: boolean = true) => {
    state.tagviewsflag = tagviewsflag;
  });

  protected initialState(): TagViewsFlagData {
    return {
      tagviewsflag: false
    };
  }
}
class TagViews extends Model<TagViewsData> {
  setTagViews = this.action((state, route: ItemProps) => {
    state.routes.push(route);
  });

  protected initialState(): TagViewsData {
    return {
      routes: []
    };
  }
}
class SidebarType extends Model<SideBarTypeData>{
  setType = this.action((state, sidertype: string = 'dark') => {
    state.sidertype = sidertype
  })

  protected initialState(): SideBarTypeData {
    return {
      sidertype: 'inline'
    }
  }
}
class SidebarTheme extends Model<ThemeData>{
  setTheme = this.action((state, theme: string = 'dark') => {
    state.theme = theme
  })

  protected initialState(): ThemeData {
    return {
      theme: 'dark'
    }
  }
}

export const collapsed = new Collapsed();
export const fixheader = new FixHeader();
export const sidebar = new SideBar();
export const tagviewsflag = new TagViewsFlag();
export const tagviews = new TagViews();
export const sidebartype = new SidebarType();
export const sidebartheme = new SidebarTheme();
