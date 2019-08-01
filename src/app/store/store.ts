import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { LoginModel, loginReducer } from '../login/login.model';
import { loginSaga } from '../login/sagas/login.saga';

export interface RootState {
    login: LoginModel;
}

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
    combineReducers<RootState>({
        login: loginReducer,
    }),
    composeWithDevTools(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(loginSaga);
