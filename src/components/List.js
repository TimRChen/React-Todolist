import React from 'react';
import TodoItem from './basecomponents/TodoItem';


export default class List extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="list">
                <ul>
                    <TodoItem value={this.props.value}/>
                </ul>
            </div>
        );
    }
}