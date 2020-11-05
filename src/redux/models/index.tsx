import { Model } from "@redux-model/react";

interface CollapsedData {
  collapsed: boolean;
}
interface FixHeaderData {
  fixheader: boolean;
}
interface ThemeData{
  theme: String
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
      fixheader: false
    };
  }
}
class SidebarTheme extends Model<ThemeData>{
  setTheme = this.action((state, theme: string='dark') =>{
    state.theme = theme
  })

  protected initialState():ThemeData{
    return {
      theme: 'dark'
    }
  }
}

export const collapsed = new Collapsed();
export const fixheader = new FixHeader();
export const sidebartheme = new SidebarTheme();
