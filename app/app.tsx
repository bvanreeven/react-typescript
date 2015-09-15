/// <reference path="../typings/react/react.d.ts" />

import React = require('react');

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
  React.render(
    <Demo name="World" />,
    document.getElementById('app')
  );
}

render();
