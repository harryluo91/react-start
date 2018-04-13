import React, { Component } from 'react';

class NotHomeOne extends Component {
  render() {
    return (
        <div className="not-home">
            {
                this.props.match.params.test
            }
        </div>
    );
  }
}

export default NotHomeOne;
