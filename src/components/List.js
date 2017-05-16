import React from 'react';

export default class List extends React.PureComponent {
    constructor(props) {
        super(props);
        debugger        
        this.state = {
            value: this.props.value || ''
        };
    }

    render() {
        return (
            <div className="list">{this.state.value}</div>
        );
    }
}