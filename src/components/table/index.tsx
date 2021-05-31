import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { setTableData } from './../../redux/actions';
import { History } from 'history';
import './table.css';

type Result = {
    country: string;
    name: string;
    alpha_two_code: string;
    [key: string]: string;
}

type Props = {
    tableData: Result[];
    history: History;
    setTableData: typeof setTableData
}

type TableReducer = {
    tableData: Result[];
    tableDataError: string;
}

type ReduxState = {
    tableReducer: TableReducer
}

const Table: React.FC<Props> = ({ tableData, history, setTableData }) => {
    const [results, setResults] = useState<Result[]>([]);

    useEffect(() => {
        setResults(tableData);
    }, [tableData]);

    function handleValueChange(event: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;
        const key = Number(event.target.getAttribute('data-index'));
        let newResults: Result[] = [...results];
        newResults[key][name] = value;
        setTableData(newResults);
    }

    function handleButtonClick() {
        history.push('/');
    }

    return (
        <div>
            <h1>Table</h1>
            <button onClick={handleButtonClick}>Back</button>
            {results ? (
                <table className="styled-table">
                    <thead>
                        <tr>
                            <th>Country</th>
                            <th>Code</th>
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        { results.map((result: Result, index: number) => (
                            <tr key={index}>
                                <td>
                                    <input 
                                        type="text" 
                                        data-index={index} 
                                        name="country" 
                                        value={result.country} 
                                        onChange={handleValueChange}
                                    />
                                </td>
                                <td>
                                    <input 
                                        type="text" 
                                        data-index={index} 
                                        name="alpha_two_code" 
                                        value={result.alpha_two_code} 
                                        onChange={handleValueChange}
                                    />
                                </td>
                                <td>
                                    <input 
                                        type="text" 
                                        data-index={index} 
                                        name="name" 
                                        value={result.name} 
                                        onChange={handleValueChange}
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : null }
        </div>
    )
}

const mapDispatchToProps = {
    setTableData,
};

const mapStateToProps = (state: ReduxState) => ({
    tableData: state.tableReducer.tableData,
    dataError: state.tableReducer.tableDataError
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
