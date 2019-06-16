import * as styledComponents from "styled-components";

const {
  default: styled,
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
}

export const theme = {
  colors: {
    bg: "#e2dadb",
    fg: "#fdfdff",
    brand: "#7b7263",
    body: "#393d3f",
    link: "#7ca982"
  }
};

export default styled;
export { css, keyframes, ThemeProvider };
