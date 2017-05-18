import React from 'react';
import TodoItem from './basecomponents/TodoItem';


export default class List extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            isDone: false,
            isClosed: 0,
        };
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
                                    isDone={this.state.isDone}
                                    handleDelete={this.props.handleDelete}
                                     />;
                    })}
                </ul>
                <span className="control">
                    <input className="selectAll" type="checkbox" />  {this.state.isClosed || 0} closed / {list.length}
                    <button className="clear">清除已完成</button>
                </span>
            </div>
        );
    }
}