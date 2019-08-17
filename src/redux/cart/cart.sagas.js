import { all, call, put, takeLatest } from 'redux-saga/effects';
import UserActionTypes from '../user/user.types';
import { emptyCart } from './cart.actions';

export function* emptyCartonSignOut() {
  yield put(emptyCart());
}

export function* onSignOutSuccess() {
  yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, emptyCartonSignOut);
}

export function* cartSagas() {
  yield all([call(onSignOutSuccess)]);
}
