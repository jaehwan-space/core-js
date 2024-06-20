/* --------------------- */
/* Event Handling        */
/* --------------------- */

/* 이벤트 핸들링 3가지 방법 --------------------------------------------------- */

// 1. HTML 속성 : onclick="handler()"

function handler() {
  console.log('클릭 이벤트 발생!!!');
}

// 2. DOM 프로퍼티 : element.onclick = handler
const first = getNode('.first');
// first.onclick = handler;
const second = getNode('.second');

// 3. 메서드 : element.addEventListener(event, handler[, phase])

function handleClick(e) {
  console.log(e.type);
  console.log(e.target);
  console.log(e.offsetX);
}

// second 를 클릭 했을 때 제거해보자!

// const remove = bindEvent('.first','click',handleClick)

// second.addEventListener('click',remove)

// setTimeout(() => {
//   first.removeEventListener('click',handleClick)
// }, 3000);

// second.addEventListener('click',firstEventRemove)

/* 이벤트 추가/제거 --------------------------------------------------------- */

// - addEventListener
// - removeEventListener

const ground = getNode('.ground');
const ball = getNode('#ball');

function handleClickBall({ offsetX: xPos, offsetY: yPos }) {
  // const { offsetX:x, offsetY:y } = e;
  const w = ball.offsetWidth;
  const h = ball.offsetHeight;

  // let x = e.offsetX;
  // let y = e.offsetY;

  ball.style.transform = `translate(${xPos - w / 2}px,${yPos - h / 2}px)`;
}

// ground.addEventListener('click',handleClickBall)

function handleMove({ offsetX: x, offsetY: y }) {
  console.log(x, y);

  let template = /* html */ `
    <div class="emotion" style="top:${y - 16}px; left:${x - 16}px;">😍</div>
  `;
  insertLast(ground, template);
}

ground.addEventListener('mousemove', handleMove);

// throttle (수도꼭지),  debounce (공 튀김 방지)

let timeout;

function debounce(callback) {
  clearTimeout(timeout);

  timeout = setTimeout(() => {
    callback();
  }, 1000);
}

debounce(() => {
  console.log('hello');
});
