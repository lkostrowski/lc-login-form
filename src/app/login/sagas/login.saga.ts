import { takeEvery } from '@redux-saga/core/effects';

import { requestLoginSaga } from './request-login.saga';

/**
 * Root saga in login module, so when app grows I would put here handling password reset etc
 */
export function* loginSaga() {
    yield takeEvery('login:login-requested', requestLoginSaga);
}
