/* ---------------------- */
/* Functions → Arrow      */
/* ---------------------- */

const calculateTotal = function (moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
};

let resultX = calculateTotal(10000, 8900, 1360, 2100);
let resultY = calculateTotal(21500, 3200, 9800, 4700);
let resultZ = calculateTotal(9000, -2500, 5000, 11900);

console.log(resultX);
console.log(resultY);
console.log(resultZ);

// 함수 선언 → 화살표 함수 (표현)식
let calcAllMoney = (...args) => {
  let total = 0;

  // for 문
  // for (let i = 0; i < args.length; i++) {
  //   total += args[i];
  // }

  // for .. of 문
  // for (let key of args) {
  //   total += key;
  // }

  // forEach, arrow function
  // args.forEach(function (val) {
  //   total += val;
  // });

  // args.forEach((val) => (total += val));

  // reduce, arrow function
  // total = args.reduce(function (acc, cur) {
  //   return (acc += cur);
  // }, 0);

  // total = args.reduce((acc, cur) => (acc += cur), 0);

  return total;
};

const result = calcAllMoney(1000, 5000, 4500, 13000);

console.log(result);

// 화살표 함수와 this

// 일반 함수
// - constructor 내장 (concise method는 예외)
// - this : 나를 호출한 대상을 this
// - 객체의 메서드로 사용이 많이 됨 => this를 찾기 위해

// 화살표 함수
// - constructor 비내장
// - this : 바인딩 하지 않음 -> 상위 컨텍스트에서 찾음.
// - 메서드 안의 함수를 작성해야 할 때 // 내 상위 this를 가져오기 때문에

const user = {
  name: '박새롬',
  total: 0,
  grades: [30, 60, 80],
  totalGrades() {
    this.grades.forEach(function (item) {
      console.log(this);
    });
  },
};

/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// pow(numeric: number, powerCount: number): number;
// let pow = (numeric, powerCount) => {
//   let result = 1;

//   for (let i = 0; i < powerCount; i++) {
//     result *= numeric;
//   }
//   return result;
// };

const pow = (numeric, powerCount) =>
  Array(powerCount)
    .fill(null)
    .reduce((acc) => (acc *= numeric), 1);

// repeat(text: string, repeatCount: number): string;
// let repeat = (text, repeatCount) => {
//   let result = '';
//   for (let i = 0; i < repeatCount; i++) {
//     result += text;
//   }
//   return result;
// };

const repeat = (text, repeatCount) =>
  Array(repeatCount)
    .fill(null)
    .reduce((acc) => acc + text, '');
