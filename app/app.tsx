/// <reference path="../typings/react/react.d.ts" />
/// <reference path="../typings/react/react-dom.d.ts" />

import React = require('react');
import ReactDOM = require('react-dom');

class DemoProps {
  public name: string;
}

class Demo extends React.Component<DemoProps, any> {
  constructor(props: DemoProps) {
    super(props);
  }
  render() {
    return (
      <div>Hello {this.props.name}!</div>
    );
  }
}

function render() {
  ReactDOM.render(
    <Demo name="World" />,
    document.getElementById('app')
  );
}

render();
