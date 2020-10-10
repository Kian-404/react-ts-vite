import { Model } from "@redux-model/react";

interface CollapsedData {
  collapsed: boolean;
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
export const sidebartheme = new SidebarTheme();
