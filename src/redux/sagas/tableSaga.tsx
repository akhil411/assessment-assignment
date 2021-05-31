import { put, takeLatest } from 'redux-saga/effects';
import API from './../../api';

function* getTableData() {
    try {
        const json: Array<string> = yield API.getTableData()
            .then(res => {
                if (res.data.length > 0) {
                    return res.data;
                } else {
                    throw new Error('No results');
                }
            })
            .catch(err => {
                throw err;
            });
        yield put({
            type: "SET_TABLE_DATA",
            data: json
        });
    }
    catch (error) {
        yield put({
            type: 'SET_TABLE_DATA_FAILED',
            error: error.message
        })
    }

}

export default function* tableData() {
    yield takeLatest('GET_TABLE_DATA', getTableData)
}
