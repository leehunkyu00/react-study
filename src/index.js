import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Board extends React.Component {
    render() {
        return (
            <div>
                Hello world!!
            </div>
        )
    }
}

ReactDOM.render(
    <Board />,
    document.getElementById('root')
)