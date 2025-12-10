export function setGlobalCssVariable(name: string, value: string) {
  document.documentElement.style.setProperty(name, value);
}

export function jcn(...args: (string | undefined | null)[]) {
  return args.filter((arg) => arg).join(" ");
}
