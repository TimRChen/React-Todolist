import React from 'react';

export default class TodoItem extends React.PureComponent {
    constructor(props) {
        super(props);
        this.handleMouseOver = this.handleMouseOver.bind(this);
        this.handleMouseOut = this.handleMouseOut.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
        this.state = {
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
        let isChecked = !this.props.value.isChecked;
        this.props.changeTodoState(this.props.index, isChecked);
    }

    render() {
        let value = this.props.value;
        let textStyles = value.isChecked ? {'textDecoration': 'line-through'} : {};
        return (
            <li onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}>
                <input
                    type="checkbox"
                    checked={value.isChecked}
                    onChange={this.handleSelect} />
                <span style={textStyles}>  {value.text}</span>
                <button style={this.state.btnStyles} onClick={this.handleDelete}>delete</button>
            </li>
        );
    }
}