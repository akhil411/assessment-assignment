type Result = {
    country: string;
    name: string;
    alpha_two_code: string;
    [key: string]: string;
}

export const getTableData = () => ({
    type: 'GET_TABLE_DATA'
});

export const setTableData = (data: Array<Result>) => ({
    type: 'SET_TABLE_DATA',
    data: data
});