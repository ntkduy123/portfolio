import { CHANGE_ROUTE } from './types';

export const changeRoute = routeName => ({
  type: CHANGE_ROUTE,
  routeName
});