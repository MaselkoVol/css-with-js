import { convertIntoKebabCase } from "../../utils";
import { NestedStyle, PrefixedNestedStyle, Style } from "./static";

const SCSS_VARIABLE_PREFIX = "$";

// if value is string - its a varible, append it to the style object
// if value is object - its a collection of variables, put it in the stack
function processNestedStyleNode(
  prefixedNestedStyle: PrefixedNestedStyle,
  stack: PrefixedNestedStyle[],
  style: Style
) {
  for (const [name, value] of Object.entries(prefixedNestedStyle.style)) {
    if (typeof value === "object") {
      stack.push({
        prefix: prefixedNestedStyle.prefix + name + "-",
        style: value,
      });
      continue;
    }
    const key = prefixedNestedStyle.prefix + name;
    const keyKebabCase = convertIntoKebabCase(key);
    style[keyKebabCase] = value;
  }
  return style;
}

// put values of nested object in the stack until the deepest value is reached
export function convertIntoStyle(
  nestedStyle: NestedStyle,
  prefix: string = ""
) {
  const style: Style = {};
  const stack: PrefixedNestedStyle[] = [
    {
      prefix: prefix,
      style: nestedStyle,
    },
  ];
  while (stack.length > 0) {
    const nestedStyle = stack.pop();
    if (!nestedStyle) break;
    processNestedStyleNode(nestedStyle, stack, style);
  }
  return style;
}

export function convertIntoScss(nestedStyle: NestedStyle): string {
  const style = convertIntoStyle(nestedStyle, SCSS_VARIABLE_PREFIX);
  let res = "";
  for (const [name, value] of Object.entries(style)) {
    res += `${name}: ${value};\n`;
  }
  return res;
}

export function convertManyIntoScss(nestedStyles: NestedStyle[]): string {
  let res = "";
  for (const nestedStyle of nestedStyles) {
    res += convertIntoScss(nestedStyle);
  }
  return res;
}
