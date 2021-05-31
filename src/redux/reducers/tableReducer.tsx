type initialState = {
    tableData: Array<string> | null;
    tableDataError: string | null;
};

type Action =
  | { type: "SET_TABLE_DATA"; data: string }
  | { type: "SET_TABLE_DATA_FAILED"; error: string };

const tableReducer = (state: initialState, action: Action) => {
    switch (action.type) {
        case 'SET_TABLE_DATA':
            return {
                ...state, 
                tableData: action.data
            };
        case 'SET_TABLE_DATA_FAILED':
            return {
                ...state, 
                tableDataError: action.error
            };
        default:
            return {
                ...state
            }
    }
};

export default tableReducer;
