import React from 'react';

export default class Input extends React.PureComponent {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            text: ''
        };
    }

    handleChange(e) {
        this.setState({
            text: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.getTodoText(this.state.text);
        this.setState({text: ''});
    }

    render() {
        return (
            <div className="input-container">
                <form onSubmit={this.handleSubmit}>
                    <input
                        value={this.state.text}
                        onChange={this.handleChange}
                        autoFocus="true"
                        className="input"
                        placeholder="what's your task?" />
                    <button className="submit" type="submit">submit</button>
                </form>
            </div>
        );
    }
}