import React from 'react';
import TodoItem from './basecomponents/TodoItem';


export default class List extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        let list = this.props.list;
        return (
            <div className="list">
                <ul>
                    {list.map((item, index) => {
                        return <TodoItem 
                                    key={index}
                                    value={item}
                                    index={index}
                                    handleDelete={this.props.handleDelete}
                                    changeTodoState={this.props.changeTodoState} />;
                    })}
                </ul>
            </div>
        );
    }
}