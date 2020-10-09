import { Model } from "@redux-model/react";

interface Data {
  collapsed: boolean;
}

class Collapsed extends Model<Data> {
  setCollapesd = this.action((state, collapsed: boolean = true) => {
    state.collapsed = collapsed;
  });

  protected initialState(): Data {
    return {
      collapsed: false
    };
  }
}

export const collapsed = new Collapsed();
