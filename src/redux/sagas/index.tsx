import { all } from 'redux-saga/effects';
import tableData from './tableSaga';

export default function* rootSaga() {
    yield all([
        tableData(),
    ]);
}