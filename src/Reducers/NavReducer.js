import { AppNavigator } from '../Redux/modules/navigation/AppNavigation'

export default function(state, action) {
  const newState = AppNavigator.router.getStateForAction(action, state);
  return newState || state;
};
