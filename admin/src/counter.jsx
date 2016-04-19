import React from 'react';

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    var ws = new WebSocket('ws://localhost:8888/admin')
    var self = this;
    ws.onmessage = function(event){
      self.setState({count: event.data});
    }
  }

  render() {
    return <h1 id="count">{this.state.count}</h1>
  }
}
