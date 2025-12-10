import PaletteNestedStyle from "./palette/palette";
import { convertManyIntoScss } from "./utils";
import { VariableNestedStyle } from "./variables/variables";

export type Style = Record<string, string>;

export type NestedStyle = {
  [key: string]: string | NestedStyle;
};

export type PrefixedNestedStyle = {
  prefix: string;
  style: NestedStyle;
};

const nestedStyles = [PaletteNestedStyle, VariableNestedStyle];

export const StaticScssVariables = convertManyIntoScss(nestedStyles);
