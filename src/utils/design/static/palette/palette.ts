import { NestedStyle } from "../static";
import { PaletteConfig } from "./config";
import { convertIntoPalette } from "./utils";

export const Palette = convertIntoPalette(PaletteConfig);

export const PaletteNestedStyle: NestedStyle = Palette;
export default PaletteNestedStyle;
