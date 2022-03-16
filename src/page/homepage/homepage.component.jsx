/** @format */

import React, { Profiler } from "react";
import Directory from "../../components/directory/directory.component";
import { HomPageContainer } from "./homepage.styles";

const Hompage = () => {
  return (
    <HomPageContainer>
      <Profiler
        id="Directory"
        onRender={(id, phase, actualDuration) => {
          console.log({ id, phase, actualDuration });
        }}
      >
        <Directory />
      </Profiler>
    </HomPageContainer>
  );
};

export default Hompage;
