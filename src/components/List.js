import React from 'react';
import TodoItem from './basecomponents/TodoItem';


export default class List extends React.PureComponent {
    constructor(props) {
        super(props);
        this.handleSelectAll = this.handleSelectAll.bind(this);
        this.state = {
            isDone: false,
        };
    }

    handleSelectAll() {
        this.setState({
            isDone: !this.state.isDone
        });
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
                                    changeTodoState={this.props.changeTodoState}
                                     />;
                    })}
                </ul>
                <span className="control">
                    <input className="selectAll" type="checkbox" onChange={this.handleSelectAll} checked={this.state.isDone} />  {this.state.isClosed || 0} closed / {list.length}
                    <button className="clear" onClick={this.props.handleDelete}>清除已完成</button>
                </span>
            </div>
        );
    }
}