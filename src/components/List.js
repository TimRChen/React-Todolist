import React from 'react';
import TodoItem from './basecomponents/TodoItem';


export default class List extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            isDone: false
        };
    }



    render() {
        let list = this.props.list;
        return (
            <div className="list">
                <ul>
                    {list.map(item => {
                        return <TodoItem  key={Math.random()} value={item} isDone={this.state.isDone}/>;
                    })}
                </ul>
                <span className="control">
                    <input className="selectAll" type="checkbox" />已完成/总数
                    <button className="clear">清除已完成</button>
                </span>
            </div>
        );
    }
}