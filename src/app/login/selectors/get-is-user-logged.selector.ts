import { createSelector } from 'reselect';
import { getLoginModel } from './get-login-model.selector';
import { LoginState } from '../login.model';

export const getIsUserLogged = createSelector(
    getLoginModel,
    (model) => model.state === LoginState.SUCCESS,
);