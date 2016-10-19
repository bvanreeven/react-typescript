import * as React from "react";
import * as ReactDOM from "react-dom";

const Demo = ({name} : {name: string}) => <div>Hello {name}!</div>;

ReactDOM.render(
  <Demo name="World" />,
  document.getElementById("app")
);
