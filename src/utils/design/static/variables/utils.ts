import { NestedStyle } from "../static";
import { Variable, VariableMapping, VariableName } from "./config";

export function convertIntoNestedStyle(mapping: VariableMapping) {
  const variableStyle: NestedStyle = {};
  for (const [name, mappingValue] of Object.entries(mapping)) {
    variableStyle[mappingValue] = Variable[name as VariableName];
  }
  return variableStyle as NestedStyle;
}
