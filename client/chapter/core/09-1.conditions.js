/* ---------------- */
/* Condition        */
/* ---------------- */

if (prompt("자바스크립트의 '공식' 이름은 무엇일까요?") == 'ECMAScript') {
  alert('정답입니다!');
} else {
  alert('모르셨나요? 정답은 ECMAScript 입니다!');
}

// 그 영화 봤니?
//     ↓
// Yes | No
//     | 영화 볼거니?
//           ↓
//       Yes | No

// 영화 봤니?
let didWatchMovie;

// 영화 볼거니?
let goingToWatchMovie;

// if 문(statement)
if (confirm('영화 봤니?') == true) {
  alert('영화봤구나');
} else if (prompt('영화볼거니?') == '네') {
  alert('영화볼거구나');
} else {
  alert('영화 안 볼거구나');
}
// else 절(clause)

// else if 복수 조건 처리

// 조건부 연산자

// 멀티 조건부 연산자 식
