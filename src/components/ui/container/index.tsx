import _Container, { type ContainerProps } from "@mui/material/Container";
import * as React from "react";

import { forwardRef } from "react";

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  (props, ref) => {
    return (
      <_Container ref={ref} {...props}>
        {props.children}
      </_Container>
    );
  },
);
