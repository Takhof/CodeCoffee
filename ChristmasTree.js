const christmasTree = (str, size) => {
  let string = "";
  if (typeof str !== "string") {
    return string;
  }
  if (str.length !== 1) {
    return string;
  }
  if (typeof size !== "number") {
    return string;
  }
  if (size === 0) {
    return "";
  }
  if (size > 0) {
    for (let i = 1; i <= size; i++) {
      for (let k = size - i; k > 0; k--) {
        string += ` `;
      }

      for (let j = 1; j <= i; j++) {
        string += `${str} `;
      }
      string = string.slice(0, string.length - 1);
      string += `\n`;
    }
    string = string.slice(0, string.length - 2);
    string += `${str}`;
  } else {
    return string;
  }
  console.log(string);
  return string;
};
