import React from 'react';
import update from 'immutability-helper';
import _ from 'lodash';

import Input from './Input';
import List from './List';
import Stat from './Stat';

import './App.css';

//  extends 继承React.PureComponent 所有属性和方法
export default class App extends React.PureComponent {
    constructor(props) {
        // super 子类继承父类this对象
        super(props);
        this.clearDone = this.clearDone.bind(this);
        this.getTodoText = this.getTodoText.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleSelectAll=this.handleSelectAll.bind(this);
        this.changeTodoState = this.changeTodoState.bind(this);
        this.state = {
            list: [],
            isAllChecked: false,
            index: ''
        };
    }

    changeTodoState(index, isChecked, isChangeAll=false) {
        if (isChangeAll) {
            let list = _.cloneDeep(this.state.list);
            list.map(item => {
                item.isChecked = isChecked;
                return item;
            });
            this.setState({
                list: list,
                isAllChecked: isChecked
            });
        } else {
            let list = _.cloneDeep(this.state.list);
            list[index].isChecked = isChecked;
            if (isChecked === false) {
                this.setState({
                    isAllChecked: false
                });
            }
            this.setState({
                list: list,
                index: index
            });
        }
    }

    getTodoText(text) {
        this.setState(prevState => ({
            list: prevState.list.concat(text)
        }));
    }

    handleSelectAll(e) {
        this.changeTodoState(null, e.target.checked, true);
    }

    handleDelete(index) {
        let list = update(this.state.list, {$splice: [[index, 1]]});
        this.setState({
            list: list
        });
    }

    clearDone() {
        let judge = _.cloneDeep(this.state.list);
        if (this.state.isAllChecked) {
            let list = update(this.state.list, {$splice: [[0, this.state.list.length]]});
            this.setState({
                list: list,
                isAllChecked: false
            });
        } else if (judge.filter(item => item.isChecked).length >= 1) {
            let list = judge.filter(item => !item.isChecked);
            this.setState({
                list: list
            });
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
                    <Stat
                        list={this.state.list}
                        isAllChecked={this.state.isAllChecked}
                        clearDone={this.clearDone}
                        handleSelectAll={this.handleSelectAll} />
                </div>
            </div>
        );
    }
}