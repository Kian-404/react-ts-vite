interface actionType {
  type: String,
  collapsed: Boolean
}
const defaultState = {
  collapsed: false
}
const Collapsed = (state = defaultState, action: actionType) => {
  if (!state) return {
    collapsed: false
  }
  switch (action.type) {
    case 'SET_COLLAPSED':
      return { ...state, collapsed: action.collapsed }
    default:
      return state
  }
}

export default Collapsed