import _Grid, { type Grid2Props } from "@mui/material/Grid2";
import * as React from "react";

import { forwardRef } from "react";

export const Grid = forwardRef<HTMLDivElement, Grid2Props>((props, ref) => {
	return (
		<_Grid ref={ref} {...props}>
			{props.children}
		</_Grid>
	);
});
