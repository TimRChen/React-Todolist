import React from 'react';
import update from 'immutability-helper';

import Input from './Input';
import List from './List';

import './App.css';

//  extends 继承React.PureComponent 所有属性和方法
export default class App extends React.PureComponent {
    constructor(props) {
        // super 子类继承父类this对象
        super(props);
        this.getTodoText = this.getTodoText.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.changeTodoState = this.changeTodoState.bind(this);
        this.state = {
            list: [],
            isAllChecked: false
        };
    }

    changeTodoState(index, isDone, isChangeAll=false) {
        // 给每个项绑定isDone属性
        if (isChangeAll) {
            let list = update(this.state.list, {$apply: item => {
                item.isDone = isDone;
                return item;
            }});
            this.setState({
                list: list,
                isAllChecked: isDone
            });
        } else {
            console.log(this.state.list);
            // let index = update(this.state, {
            //     list: extend(this.state.list, )
            // });
            // this.setState({
            //     list: this.state.list[index]
            // });
            debugger
        }
    }

    getTodoText(text) {
        this.setState(prevState => ({
            list: prevState.list.concat(text)
        }));
    }

    handleDelete(index) {
        if (typeof(index) === 'number') {
            let list = update(this.state.list, {$splice: [[index, 1]]});
            this.setState({
                list: list
            });
        } else {
            if (!this.state.isAllChecked) {
                let list = update(this.state.list, {$splice: [[0, this.state.list.length]]});
                this.setState({
                    list: list
                });
            }
        }
    }

    render() {
        return (
            <div className="panel">
                <h2 id="title">React-Todos</h2>
                <div className="container">
                    <Input
                        getTodoText={this.getTodoText}
                    />
                    <List 
                        list={this.state.list}
                        handleDelete={this.handleDelete}
                        changeTodoState={this.changeTodoState} />
                </div>
            </div>
        );
    }
}