import React from 'react';

export default class TodoItem extends React.PureComponent {
    constructor(props) {
        super(props);
        this.handleMouseOver = this.handleMouseOver.bind(this);
        this.handleMouseOut = this.handleMouseOut.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.state = {
            isDone: this.props.isDone,
            textStyles: {},
            // isClosed: 0,
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

    handleSelect() {
        const textStyles = !this.state.isDone ? {'textDecoration': 'line-through'} : {};
        this.setState({
            isDone: !this.state.isDone,
            textStyles: textStyles,
        });
    }

    handleDelete() {
        this.props.handleDelete(this.props.index);
    }

    render() {

        let value = this.props.value;
        return (
            <li onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}>
                <input
                    type="checkbox"
                    checked={this.state.isDone}
                    onChange={this.handleSelect} />
                <span style={this.state.textStyles}>  {value}</span>
                <button style={this.state.btnStyles} onClick={this.handleDelete}>delete</button>
            </li>
        );
    }
}