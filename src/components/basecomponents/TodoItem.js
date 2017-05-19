import React from 'react';

export default class TodoItem extends React.PureComponent {
    constructor(props) {
        super(props);
        this.handleMouseOver = this.handleMouseOver.bind(this);
        this.handleMouseOut = this.handleMouseOut.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
        this.state = {
            isDone: this.props.isDone,
            btnStyles: {'display': 'none'},
        };
    }

    handleMouseOver() {
        this.setState({
            btnStyles: {'display': 'inline'}
        });
    }

    handleMouseOut() {
        this.setState({
            btnStyles: {'display': 'none'}
        });
    }

    handleDelete() {
        this.props.handleDelete(this.props.index);
    }

    handleSelect() {
        let isDone = !this.state.isDone;
        this.props.changeTodoState(this.props.index, isDone);
    }

    render() {
        let textStyles = this.props.isDone ? {'textDecoration': 'line-through'} : {};
        return (
            <li onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}>
                <input
                    type="checkbox"
                    checked={this.props.isDone}
                    onChange={this.handleSelect} />
                <span style={textStyles}>  {this.props.value}</span>
                <button style={this.state.btnStyles} onClick={this.handleDelete}>delete</button>
            </li>
        );
    }
}