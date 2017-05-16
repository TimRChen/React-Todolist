import React from 'react';
import './App.css';

import Input from './Input';
import List from './List';


//  extends 继承React.PureComponent 所有属性和方法
export default class App extends React.PureComponent {
    constructor(props) {
        // super 子类继承父类this对象
        super(props);
        this.state = {
            list: []
        };
        this.getTodoText = this.getTodoText.bind(this);
    }

    getTodoText(list) {
        this.setState(prevState => ({
            list: prevState.list.concat(list)
        }));
    }

    render() {
        return (
            <div className="panel">
                <h2 id="title">React-Todos</h2>
                <div className="container">
                    <Input
                        getTodoText={this.getTodoText}
                    />
                    <List list={this.state.list}/>
                </div>
            </div>
        );
    }
}