import * as styledComponents from "styled-components";

const {
  default: styled,
  createGlobalStyle,
  css,
  keyframes,
  ThemeProvider
} = styledComponents as styledComponents.ThemedStyledComponentsModule<
  IThemeInterface
>;

export interface IThemeInterface {
  colors: {
    bg: string;
    fg: string;
    brand: string;
    body: string;
    link: string;
  };
  fonts: {
    body: string;
    heading: string;
  };
}

export const theme = {
  colors: {
    bg: "#fdfdff",
    fg: "#e2dadb",
    brand: "#7b7263",
    body: "#393d3f",
    link: "#7ca982"
  },
  fonts: {
    body: "'Raleway', sans-serif",
    heading: "'Bree Serif', serif"
  }
};

export default styled;
export { createGlobalStyle, css, keyframes, ThemeProvider };
