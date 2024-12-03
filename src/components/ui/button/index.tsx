import _Button, { type ButtonProps } from "@mui/material/Button";
import * as React from "react";

import { forwardRef } from "react";

export const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
	return (
		<_Button ref={ref} {...props}>
			{props.children}
		</_Button>
	);
});
