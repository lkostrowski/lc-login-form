import { takeEvery } from '@redux-saga/core/effects';
import { requestLoginSaga } from './request-login.saga';

export function* loginSaga() {
    yield takeEvery('login:login-requested', requestLoginSaga);
}
