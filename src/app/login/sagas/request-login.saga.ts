import { call, put } from 'redux-saga/effects';

import { LoginRequestedAction } from '../actions/login-requested.action';
import { requestLoginService } from '../services/request-login.service';
import { createLoginSucceedAction } from '../actions/login-succeed.action';
import { createLoginFailedAction } from '../actions/login-failed.action';

export function* requestLoginSaga(action: LoginRequestedAction) {
    const { password, email, keepLogged } = action.payload;

    try {
        const response = yield call(
            {
                context: requestLoginService,
                fn: requestLoginService.requestLogin,
            },
            email,
            password,
        );

        if (keepLogged) {
            /**
             * Do something to keep session
             */
        }

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
