declare module "react-spinners-css" {
  import { FC } from "react";

  type SpinnerType = FC<{ className?: string | null; size?: number; color?: string }>;
  export const Ellipsis: SpinnerType;
}
