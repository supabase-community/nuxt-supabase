import { defineSirocConfig } from "siroc";

export default defineSirocConfig({
  rollup: {
    output: {
      exports: "named", // Remove warnings about using both named and default exports
    },
  },
});
