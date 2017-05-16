import React from 'react';

export default class TodoItem extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li key={Math.random()*10000}>{this.props.value}</li>
        );
    }
}