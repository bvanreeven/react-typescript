import React = require("react");
import ReactDOM = require("react-dom");

const Demo = ({name} : {name: string}) => <div>Hello {name}!</div>;

ReactDOM.render(
  <Demo name="World" />,
  document.getElementById("app")
);
