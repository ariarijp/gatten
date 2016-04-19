import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './counter.jsx';

var ws = new WebSocket('ws://localhost:8888/admin');
ws.onmessage = function(event){
  console.log(event);
};

ReactDOM.render(
  <Counter />,
  document.getElementById('app')
);
