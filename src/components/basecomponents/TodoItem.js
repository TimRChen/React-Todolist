import React from 'react';

export default class TodoItem extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li>{this.props.value}</li>
        );
    }
}