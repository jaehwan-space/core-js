import data from './data/data.js';
import {
  clearContents,
  getNode,
  getRandom,
  insertLast,
  addClass,
  removeClass,
} from './lib/index.js';

const submit = getNode('#submit');
const nameField = getNode('#nameField');
const resultas = getNode('#nameField');

function handleSubmit(e) {
  e.preventDefault();

  const name = nameField.value;
  const dataList = data(name);
  const ran = getRandom(dataList.length);

  if (!name || name.replace(/\s*/g, '') === '') {
    addClass('.alert-error', 'is-active');

    setTimeout(() => {
      removeClass('.alert-error', 'is-active');
    }, 2000);

    return;
  }

  clearContents(resultas);
  insertLast(resultas, dataList[ran]);
}

submit.addEventListener('click', handleSubmit);
resultas.addEventListener('click', (e) => {
  window.navigator.clipboard.writeText(e.target.innerHTML);
});
