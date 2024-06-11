/* ------------------- */
/* Logical Operators   */
/* ------------------- */

let a = 10;
let b = '';
let value = Boolean(b);

// 논리곱(그리고) 연산자
let AandB;

// 논리합(또는) 연산자
let AorB;

// 부정 연산자
let reverseValue;

// 조건 처리

// 첫번째 Falsy를 찾는 연산 (&&)
let whichFalsy;

// 첫번째 Truthy를 찾는 연산 (||)
let whichTruthy;

let userName = prompt('누구세요?').toLowerCase();

if (userName === 'admin') {
  let password = prompt('비밀번호를 알려주세요.');

  if (password === 'admin') {
    alert('환영합니다.');
  } else if (userName == null) {
    alert('취소되었습니다.');
  } else {
    alert('잘못된 비밀번호입니다.');
  }
} else if (userName == null) {
  alert('취소되었습니다.');
} else {
  alert('너가 누군지 몰라');
}

function render(node, isActive) {
  let template = isActive ? '안녕~~!!' : '잘가~~!!';
  console.log(template);
}
