const sizes = {
  xxs: "320px",
  xs: "375px",
  sm: "425px",
  md: "768px",
  lg: "1024px",
  xl: "1440px",
  xxl: "2560px",
};

const devices = {
  xxs: `(min-width: ${sizes.xxs})`,
  xs: `(min-width: ${sizes.xs})`,
  sm: `(min-width: ${sizes.sm})`,
  md: `(min-width: ${sizes.md})`,
  lg: `(min-width: ${sizes.lg})`,
  xl: `(min-width: ${sizes.xl})`,
  xxl: `(min-width: ${sizes.xxl})`,
};

type mediaQuery = "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl";

export const mq = (size: mediaQuery) => devices[size];
