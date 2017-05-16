import React from 'react';
import styles from './App.css';

import Input from './Input';
import List from './List';


//  extends 继承React.PureComponent 所有属性和方法
export default class App extends React.PureComponent {
    constructor(props) {
        // super 子类继承父类this对象
        super(props);
        this.state = {
            value: ''
        };
    }

    getValue(value) {
        this.setState({
            value: value
        });
        console.log(value);
    }

    render() {
        return (
            <div className="panel">
                <h2 id="title">React-Todos</h2>
                <Input
                    getValue={this.getValue.bind(this)}
                />
                <List value={this.state.value}/>
            </div>
        );
    }
}