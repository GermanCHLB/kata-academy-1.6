import '../scss/index.scss';
import '../scss/article.scss';
import '../scss/aside.scss';
import '../scss/call.scss';
import '../scss/close-btn.scss';
import '../scss/feedback.scss';
import '../scss/footer.scss';
import '../scss/header.scss';
import '../scss/list.scss';
import '../scss/main.scss';
import '../scss/manufacturers.scss';
import '../scss/menu.scss';
import '../scss/open-btn.scss';
import '../scss/prices.scss';
import '../scss/swiper.scss';
import '../scss/title.scss';
import '../scss/types.scss';

const manufacturersList = document.querySelector('.manufacturers__list');
const manufacturersMain = document.querySelector('.manufacturers__main');

const types = document.querySelector('.types');
const typesList = types.querySelector('.types__list');
const typesMain = types.querySelector('.types__main');

const openBtn = manufacturersMain.querySelector('.open-btn');
const closeBtn = manufacturersMain.querySelector('.close-btn');

const typesOpenBtn = types.querySelector('.open-btn');
const typesCloseBtn = types.querySelector('.close-btn');

const aside = document.querySelector('.aside');
const burger = document.querySelector('.header__burger button');
const asideCloseBtn = aside.querySelector('.aside__close-btn');

const feedback = document.querySelector('.feedback');
const feedbackCloseBtn = document.querySelector('.feedback__close-btn');
const feedbackOpenBtns = document.querySelectorAll('.feedback-open-btn');

const call = document.querySelector('.call');
const callCloseBtn = document.querySelector('.call__close-btn');
const callOpenBtns = document.querySelectorAll('.call-open-btn');

closeBtn.remove();
typesCloseBtn.remove();

openBtn.onclick = function () {
  manufacturersList.classList.remove('manufacturers__list--closed');
  manufacturersList.classList.add('manufacturers__list--opened');
  openBtn.remove();
  manufacturersMain.appendChild(closeBtn);
}

closeBtn.onclick = function () {
  manufacturersList.classList.remove('manufacturers__list--opened');
  manufacturersList.classList.add('manufacturers__list--closed');
  closeBtn.remove();
  manufacturersMain.appendChild(openBtn);
}

typesOpenBtn.onclick = function () {
  typesList.classList.remove('types__list--closed');
  typesList.classList.add('types__list--opened');
  typesOpenBtn.remove();
  typesMain.appendChild(typesCloseBtn);
}

typesCloseBtn.onclick = function () {
  typesList.classList.remove('types__list--opened');
  typesList.classList.add('types__list--closed');
  typesCloseBtn.remove();
  typesMain.appendChild(typesOpenBtn);
}

burger.onclick = () => {
  aside.classList.add('aside--opened');
  aside.classList.remove('aside--closed');
}

asideCloseBtn.onclick = () => {
  aside.classList.remove('aside--opened');
  aside.classList.add('aside--closed');
}

aside.addEventListener('click', (e) => {
  if (e.target == aside) {
    aside.classList.remove('aside--opened');
    aside.classList.add('aside--closed');
  }
})

for (let btn of feedbackOpenBtns) {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    feedback.classList.remove('feedback--closed');
    feedback.classList.add('feedback--opened');
  })
}

feedbackCloseBtn.addEventListener('click', (e) => {
  e.preventDefault()
  feedback.classList.remove('feedback--opened');
  feedback.classList.add('feedback--closed');
})

feedback.addEventListener('click', (e) => {
  if (e.target == feedback) {
    feedback.classList.remove('feedback--opened');
    feedback.classList.add('feedback--closed');
  }
})

for (let btn of callOpenBtns) {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    call.classList.remove('call--closed');
    call.classList.add('call--opened');
  })
}

callCloseBtn.addEventListener('click', (e) => {
  e.preventDefault()
  call.classList.remove('call--opened');
  call.classList.add('call--closed');
})

call.addEventListener('click', (e) => {
  if (e.target == call) {
    call.classList.remove('call--opened');
    call.classList.add('call--closed');
  }
})


