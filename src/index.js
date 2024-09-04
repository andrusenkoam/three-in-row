const startEl = document.querySelector('.js-start');
const containerEl = document.querySelector('.js-container');
const textEl = document.querySelector('.js-text');

startEl.addEventListener('click', onStartClick);

function onStartClick() {
  const result = [];
  textEl.textContent = '';
  [...containerEl.children].forEach(box => (box.textContent = ''));
  [...containerEl.children].forEach((box, i) => {
    createPromise(i)
      .then(smile => {
        box.textContent = smile;
        result.push('1');
      })
      .catch(smile => (box.textContent = smile))
      .finally(() => {
        setTimeout(() => {
          if (i === containerEl.children.length - 1) {
            if (!result.length || result.length === 3) {
              textEl.textContent = 'Winner!!!';
              textEl.style.color = 'green';
            } else {
              textEl.textContent = 'Lost money!!!';
              textEl.style.color = 'red';
            }
          }
        }, 500);
      });
  });
}

function createPromise(delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const random = Math.random();

      if (random > 0.5) {
        resolve('🤠');
      } else {
        reject('👹');
      }
    }, 1000 * delay);
  });
}
