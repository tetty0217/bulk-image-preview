import _Stack, { type StackProps } from "@mui/material/Stack";
import * as React from "react";

import { forwardRef } from "react";

export const Stack = forwardRef<HTMLDivElement, StackProps>((props, ref) => {
	return (
		<_Stack ref={ref} {...props}>
			{props.children}
		</_Stack>
	);
});
