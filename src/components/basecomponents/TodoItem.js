import React from 'react';

export default class TodoItem extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        let value = this.props.value;
        return (
            <li>
                <input type="checkbox" value={value} />{value}
            </li>
        );
    }
}