import { createSelector } from 'reselect';

import { LoginState } from '../login.model';

import { getLoginModel } from './get-login-model.selector';

export const getIsUserLogged = createSelector(
    getLoginModel,
    (model) => model.state === LoginState.SUCCESS,
);
