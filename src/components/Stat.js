import React from 'react';

export default class Stat extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        let list = this.props.list;
        let closed = list.filter(item => item.isChecked).length || 0;
        return (
            <div className="control">
                <input
                    className="selectAll"
                    type="checkbox"
                    onChange={this.props.handleSelectAll}
                    checked={this.props.isAllChecked}
                        />  {closed} closed / {list.length}
                <button className="clear" onClick={this.props.clearDone}>清除已完成</button>
            </div>
        );
    }
}