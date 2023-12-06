const breakpoints = [720, 1200];
const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

const colors = {
  black: "#000000",
  white: "#FFFFFF",
  blue01: "#0094FF",
  gray00: "#EAEAEA",
  gray01: "#707070",
  gray02: "#383838",
  gray03: "#919EAB",
  purple00: "#6600FF",
  purple01: "#EBD9FF",
  purple02: "#D1B2FF",
  purple03: "#A366FF",

  // pink
  pink01: "#EF3E6E",
};

export { mq, colors };
