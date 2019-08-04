import { call, put } from 'redux-saga/effects';

import { createLoginFailedAction } from '../actions/login-failed.action';
import { LoginRequestedAction } from '../actions/login-requested.action';
import { createLoginSucceedAction } from '../actions/login-succeed.action';
import { mockRequestLoginService } from '../services/mock-request-login.service';

/**
 * "Dependency injection".
 * I was asked to mock backend, but I wanted to deploy this demo and don't have that much time
 * to also mock a real-mock server. So I just replaced here the instance of service. In Angular app I would
 * resolve it on module DI level.
 */
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
