import React, { Fragment } from "react";
import ClockSlogan from "./assets/component/ClockSlogan";
import CurrentTime from "./assets/component/CurrentTime";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <Fragment>
      <center>
        <ClockSlogan />
        <CurrentTime />
      </center>
    </Fragment>
  );
};

export default App;
