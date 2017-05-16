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
        this.props.getValue(this.refs.textInput.value);
    }

    render() {
        return (
            <div className="input-container">
                <input
                    autoFocus="true"
                    className="input"
                    placeholder="what's your task?"
                    ref="textInput" />
                <button className="submit"
                        type="submit"
                        onClick={this.handleClick.bind(this)}
                >submit</button>
            </div>
        );
    }
}