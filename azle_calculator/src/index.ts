import { Canister, query, update, Void, int64 } from "azle";

let answer = 0;
let remainder = 0;

export default Canister({
  getAnswer: query([], int64, () => {
    return BigInt(answer);
  }),
  getRemainder: query([], int64, () => {
    return BigInt(remainder);
  }),
  add: update([int64, int64], Void, (num1, num2) => {
    answer = Number(num1 + num2);
  }),
  subtract: update([int64, int64], Void, (num1, num2) => {
    answer = Number(num1 - num2);
  }),
  multiply: update([int64, int64], Void, (num1, num2) => {
    answer = Number(num1 * num2);
  }),
  divide: update([int64, int64], Void, (num1, num2) => {
    answer = Number(num1 / num2);
    remainder = Number(num1 % num2);
  }),
});
