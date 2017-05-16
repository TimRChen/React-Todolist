import React from 'react';

export default class Input extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
    }

    handleClick(e) {
        e.preventDefault();
        this.props.getValue('something...');
    }

    render() {
        return (
            <div className="input-container">
                <input className="input" placeholder="what's your task?"></input>
                <button className="submit"
                        type="submit"
                        onClick={this.handleClick.bind(this)}
                >submit</button>
            </div>
        );
    }
}