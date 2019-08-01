import { createSelector } from 'reselect';
import { getLoginModel } from './get-login-model.selector';

export const getLoginError = createSelector(
    getLoginModel,
    (model) => model.error,
);
