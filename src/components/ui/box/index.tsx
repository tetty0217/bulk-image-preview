import _Box, { type BoxProps } from "@mui/material/Box";
import * as React from "react";

import { forwardRef } from "react";

export const Box = forwardRef<HTMLDivElement, BoxProps>((props, ref) => {
  return (
    <_Box ref={ref} {...props}>
      {props.children}
    </_Box>
  );
});
