import { call, put } from 'redux-saga/effects';

import { LoginRequestedAction } from '../actions/login-requested.action';
import { requestLoginService } from '../services/request-login.service';
import { createLoginSucceedAction } from '../actions/login-succeed.action';
import { createLoginFailedAction } from '../actions/login-failed.action';

export function* requestLoginSaga(action: LoginRequestedAction) {
    const { password, email } = action.payload;

    try {
        const response = yield call(
            requestLoginService.requestLogin,
            email,
            password,
        );

        yield put(
            createLoginSucceedAction({
                email: response.email,
                uid: response.uid,
            }),
        );
    } catch (err) {
        yield put(
            createLoginFailedAction({
                error: err,
            }),
        );
    }
}
