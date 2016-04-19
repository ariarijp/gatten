import React from 'react';

export default class GattenButton extends React.Component {
  handleClick() {
    var ws = new WebSocket('ws://localhost:8888/');
    ws.onopen = function() {
      ws.send("ガッテン！");
    };
  }

  render() {
    return (
      <button className="round-button" onClick={this.handleClick}>ガッテン</button>
    );
  }
}
