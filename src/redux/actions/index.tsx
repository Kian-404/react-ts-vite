export const toggleCollapsed = (collapsed: Boolean) => {
  return {
    type: 'SET_COLLAPSED',
    collapsed: collapsed,
  }
}