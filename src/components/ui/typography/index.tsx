import _Typography, { type TypographyProps } from "@mui/material/Typography";
import * as React from "react";

import { forwardRef } from "react";

export const Typography = forwardRef<HTMLElement, TypographyProps>(
	(props, ref) => {
		return (
			<_Typography ref={ref} {...props}>
				{props.children}
			</_Typography>
		);
	},
);
