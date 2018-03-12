import AppNavigation from '../Redux/modules/navigation/AppNavigation'

const navReducer = (state, action) => {
  const newState = AppNavigation.router.getStateForAction(action, state)
  return newState || state
}
