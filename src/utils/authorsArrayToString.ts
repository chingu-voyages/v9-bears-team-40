export default function authorsArrayToString(arr: Array<string>) {
  return arr.reduce((acc, curr, idx) => {
    return idx === arr.length - 1 ? acc + " and " + curr : acc + ", " + curr;
  }, arr.shift());
}
