import React from 'react';
import './home.css';
import { History } from 'history';

type Props = {
    history: History
}

const Home: React.FC<Props> = ({ history }) => {

    function handleButtonClick() {
        history.push('/table');
    }

    return (
        <div>
            <h1>Project</h1>
            <button onClick={handleButtonClick}>View Table</button>
        </div>
    )
}

export default Home;
