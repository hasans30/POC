import zxcvbn from "zxcvbn";

export function myconsole() {
  const str = `myconsole has been called`;
  return zxcvbn(str);
}
