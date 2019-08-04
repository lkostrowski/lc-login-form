import { call, put } from 'redux-saga/effects';

import { createLoginFailedAction } from '../actions/login-failed.action';
import { LoginRequestedAction } from '../actions/login-requested.action';
import { createLoginSucceedAction } from '../actions/login-succeed.action';
import { mockRequestLoginService } from '../services/request-login.service';

// "dependency injection"
const service = mockRequestLoginService;

export function* requestLoginSaga(action: LoginRequestedAction) {
    const { password, email, keepLogged } = action.payload;

    try {
        const response = yield call(
            {
                context: service,
                fn: service.requestLogin,
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
