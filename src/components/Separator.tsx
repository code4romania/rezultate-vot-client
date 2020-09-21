import { mergeClasses } from "@code4ro/reusable-components";
import React, { ComponentProps, forwardRef } from "react";
import classes from "./Separator.module.scss";

export const Separator = forwardRef<HTMLDivElement, ComponentProps<"div">>(({ className, ...props }, ref) => (
  <div {...props} className={mergeClasses(classes.root, className)} ref={ref} />
));
