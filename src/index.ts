import 'normalize.css';
import './assets/styles/global.scss';
import json from './assets/json/pets.json';
import App from './components/app/app';

// const screenPopup = document.querySelectorAll('.screen')[1];
// const wrapper = document.querySelector('.wrapper');
// const petsList = document.getElementById('pets-list');
// const popup = document.querySelector('.popup');
// let pageNumber = 1;
// let currentWidth: number = document.documentElement.clientWidth;
// let screenWidth: number = document.documentElement.clientWidth;

window.addEventListener('DOMContentLoaded', () => {
  const app = new App();
})

// // Слайдер

// let arr = [[], [], []];
// let arrows = document.querySelectorAll('.small-btn');
// let sliderBackward, sliderForward;
// let firstPageBtn, prevPageBtn, curPageBtn, nextPageBtn, lastPageBtn;
// if (wrapper) {
//   sliderBackward = arrows[0];
//   sliderForward = arrows[1];
//   arr = init(arr);
//   wrapper.insertAdjacentHTML('beforeend', generateSlider(arr[1]));
//   document.querySelector('.hidden-card').classList.remove('hidden-card');
//   sliderBackward.addEventListener('click', toBackward);
//   sliderForward.addEventListener('click', toForward);
//   window.addEventListener('resize', sliderResize);
// }
// function generatePageGrid(arr, screenSize) {
//   let pageCtn = [];
//   if (screenSize <= 576) pageCtn.length = 16;else if (screenSize <= 980) pageCtn.length = 8;else pageCtn.length = 6;
//   for (let i = 0, j = 0; i < pageCtn.length; i++, j += 48 / pageCtn.length) {
//     pageCtn[i] = arr.slice(j, j + 48 / pageCtn.length);
//   }
//   return pageCtn;
// }
// function generateGrid(arr) {
//   let grid = generateSlider(arr, true);
//   petsList.insertAdjacentHTML('beforeend', grid);
//   document.querySelectorAll('.pets-card').forEach(elem => elem.addEventListener('click', addPopup));
// }
// function generateSlider(arr) {
//   let isPets = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
//   try {
//     let newSlide = '';
//     if (!isPets) newSlide = '<div class="pets-small-grid hidden-card">';
//     arr.forEach(element => {
//       newSlide += `
// 			<div class="pets-card">
// 				<img src="${_pets_json__WEBPACK_IMPORTED_MODULE_2__[element.toString()].img}" alt="${_pets_json__WEBPACK_IMPORTED_MODULE_2__[element.toString()].type + ' ' + _pets_json__WEBPACK_IMPORTED_MODULE_2__[element.toString()].name}" class="pets-card-image">
// 				<span class="pets-name-text">${_pets_json__WEBPACK_IMPORTED_MODULE_2__[element.toString()].name}</span>
// 				<button class="button-secondary">
// 					learn more
// 				</button>
// 			</div>
// 			`;
//     });
//     if (!isPets) newSlide += `</div>`;
//     return newSlide;
//   } catch (e) {
//     console.log(e);
//     arr.forEach(element => {
//       console.log(element.toString(), _pets_json__WEBPACK_IMPORTED_MODULE_2__[element.toString().name], _pets_json__WEBPACK_IMPORTED_MODULE_2__[element.toString().img]);
//     });
//   }
// }
// function init(arr) {
//   arr[2] = generateArr();
//   arr[1] = arr[2].slice(0);
//   arr[2] = generateArr(arr[1]);
//   arr[0] = arr[1].slice(0);
//   arr[1] = arr[2].slice(0);
//   arr[2] = generateArr(arr[1]);
//   return [arr[0], arr[1], arr[2]];
// }
// function forward(arr) {
//   // [[до], [сейчас], [после]]
//   // [[сейчас], [после], [random]]
//   return [arr[1], arr[2], generateArr(arr[2])];
// }
// function backward(arr) {
//   // [[до], [сейчас], [после]]
//   // [[random], [до], [сейчас]]
//   return [generateArr(arr[0]), arr[0], arr[1]];
// }
// function toForward() {
//   sliderForward.removeEventListener('click', toForward);
//   sliderBackward.removeEventListener('click', toBackward);
//   changeSlider('forward');
//   setTimeout(() => {
//     sliderForward.addEventListener('click', toForward);
//     sliderBackward.addEventListener('click', toBackward);
//   }, 1000);
// }
// function toBackward() {
//   sliderForward.removeEventListener('click', toForward);
//   sliderBackward.removeEventListener('click', toBackward);
//   changeSlider('backward');
//   setTimeout(() => {
//     sliderForward.addEventListener('click', toForward);
//     sliderBackward.addEventListener('click', toBackward);
//   }, 1000);
// }
// function generateArr(arr) {
//   screenWidth = document.documentElement.clientWidth;
//   let uniqArr = [];
//   if (arr) {
//     uniqArr = arr.slice(0);
//   }
//   let i, j, k;
//   do {
//     i = getRandomInt(8);
//   } while (uniqArr.includes(i));
//   if (screenWidth <= 576) return [i];
//   do {
//     j = getRandomInt(8);
//   } while (i === j || uniqArr.includes(j));
//   if (screenWidth <= 980) return [i, j];
//   do {
//     k = getRandomInt(8);
//   } while (i === k || j === k || uniqArr.includes(k));
//   return [i, j, k];
// }
// async function asyncTimeout(elem) {
//   await new Promise(resolve => setTimeout(resolve, 500));
//   return elem.remove();
// }
// function changeSlider(direction) {
//   let insertion, sliderMove, newSliderMove;
//   const slider = document.querySelector('.pets-small-grid');
//   if (direction === 'forward') {
//     arr = forward(arr);
//     insertion = 'afterend';
//     sliderMove = 'righty-move';
//     newSliderMove = 'lefty-move';
//   } else if (direction === 'backward') {
//     arr = backward(arr);
//     insertion = 'beforebegin';
//     sliderMove = 'lefty-move';
//     newSliderMove = 'righty-move';
//   }
//   let newSlider = generateSlider(arr[1]);
//   slider.insertAdjacentHTML(insertion, newSlider);
//   document.querySelectorAll('.pets-card').forEach(elem => elem.addEventListener('click', addPopup));
//   newSlider = document.querySelector('.hidden-card');
//   slider.classList.add(sliderMove);
//   newSlider.classList.add(newSliderMove);
//   asyncTimeout(slider);
//   setTimeout(() => {
//     newSlider.classList.remove(newSliderMove);
//     newSlider.classList.remove('hidden-card');
//   }, 500);
// }
// function sliderResize() {
//   if (isResized()) {
//     document.querySelector('.pets-small-grid').remove();
//     arr = init(arr);
//     wrapper.insertAdjacentHTML('beforeend', generateSlider(arr[1]));
//     document.querySelector('.hidden-card').classList.remove('hidden-card');
//     document.querySelectorAll('.pets-card').forEach(elem => elem.addEventListener('click', addPopup));
//   }
// }

// // Пагинация
// let pageObj = [];
// let pageArr = [];
// if (petsList) {
//   pageObj = generatePetsPage();
//   console.log('Массив случайных чисел: ', pageObj);
//   pageArr = generatePageGrid(pageObj, currentWidth);
//   generateGrid(pageArr[pageNumber - 1]);
//   firstPageBtn = arrows[0];
//   prevPageBtn = arrows[1];
//   curPageBtn = arrows[2];
//   nextPageBtn = arrows[3];
//   lastPageBtn = arrows[4];
//   firstPageBtn.addEventListener('click', () => {
//     pageNumber = 1;
//     petsList.replaceChildren();
//     generateGrid(pageArr[1]);
//     curPageBtn.innerHTML = `${pageNumber}`;
//     firstPageBtn.disabled = true;
//     prevPageBtn.disabled = true;
//     nextPageBtn.disabled = false;
//     lastPageBtn.disabled = false;
//   });
//   lastPageBtn.addEventListener('click', () => {
//     pageNumber = pageArr.length;
//     petsList.replaceChildren();
//     generateGrid(pageArr[pageNumber - 1]);
//     curPageBtn.innerHTML = `${pageNumber}`;
//     lastPageBtn.disabled = true;
//     nextPageBtn.disabled = true;
//     firstPageBtn.disabled = false;
//     prevPageBtn.disabled = false;
//   });
//   prevPageBtn.addEventListener('click', () => {
//     if (pageNumber === pageArr.length) {
//       lastPageBtn.disabled = false;
//       nextPageBtn.disabled = false;
//     }
//     pageNumber--;
//     petsList.replaceChildren();
//     generateGrid(pageArr[pageNumber - 1]);
//     curPageBtn.innerHTML = `${pageNumber}`;
//     if (pageNumber === 1) {
//       firstPageBtn.disabled = true;
//       prevPageBtn.disabled = true;
//     }
//   });
//   nextPageBtn.addEventListener('click', () => {
//     if (pageNumber === 1) {
//       firstPageBtn.disabled = false;
//       prevPageBtn.disabled = false;
//     }
//     pageNumber++;
//     petsList.replaceChildren();
//     generateGrid(pageArr[pageNumber - 1]);
//     curPageBtn.innerHTML = `${pageNumber}`;
//     if (pageNumber === pageArr.length) {
//       nextPageBtn.disabled = true;
//       lastPageBtn.disabled = true;
//     }
//   });
//   window.addEventListener('resize', pageGridResize);
// }
// ;
// function generatePetsPage() {
//   let bigArr = [];
//   let arr = generateSeed(8);
//   arr = splitSeed(arr);
//   for (let i = 0; i < 6; i++) {
//     for (let j = 0; j < 3; j++) {
//       arr[j] = shuffleSubSeed(arr[j]);
//       bigArr = bigArr.concat(arr[j]);
//     }
//   }
//   return bigArr;
// }
// function generateSeed(length) {
//   let seed = new Set();
//   while (seed.size < length) {
//     seed.add(getRandomInt(8));
//   }
//   return Array.from(seed);
// }
// function splitSeed(seed) {
//   const subSeeds = [];
//   for (let i = 0; i < 8; i += 3) {
//     subSeeds.push(seed.slice(i, i + 3));
//   }
//   return subSeeds;
// }
// function shuffleSubSeed(subSeed) {
//   for (let i = subSeed.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [subSeed[i], subSeed[j]] = [subSeed[j], subSeed[i]];
//   }
//   return subSeed;
// }
// function pageGridResize() {
//   if (isResized()) {
//     pageArr = generatePageGrid(pageObj, screenWidth);
//     petsList.replaceChildren();
//     if (pageNumber > pageArr.length) {
//       pageNumber = pageArr.length;
//       curPageBtn.innerHTML = pageNumber;
//       lastPageBtn.disabled = true;
//       nextPageBtn.disabled = true;
//     } else if (pageNumber === pageArr.length) {
//       lastPageBtn.disabled = true;
//       nextPageBtn.disabled = true;
//     } else if (pageNumber < pageArr.length) {
//       lastPageBtn.disabled = false;
//       nextPageBtn.disabled = false;
//     }
//     generateGrid(pageArr[pageNumber - 1]);
//   }
// }

// // Попап

// let cards = document.querySelectorAll('.pets-card');
// screenPopup.addEventListener('click', removePopup, false);
// document.querySelector('.popup-btn').addEventListener('click', removePopup, false);
// cards.forEach(card => card.addEventListener('click', addPopup, false));
// function addPopup() {
//   for (let key in _pets_json__WEBPACK_IMPORTED_MODULE_2__) {
//     if (_pets_json__WEBPACK_IMPORTED_MODULE_2__[`${key}`].name === this.querySelector('span').innerHTML) {
//       popup.replaceChildren();
//       let newPopup = `
// 			<button class="small-btn popup-btn"></button>
// 			<div class="modal-window">
// 				<img class="modal-window-img" src="${_pets_json__WEBPACK_IMPORTED_MODULE_2__[key.toString()].img}" alt="${_pets_json__WEBPACK_IMPORTED_MODULE_2__[key.toString()].type + ' ' + _pets_json__WEBPACK_IMPORTED_MODULE_2__[key.toString()].name}">
// 				<div class="modal-window-content">
// 					<div class="headings">
// 						<h3 class="h3-heading">${_pets_json__WEBPACK_IMPORTED_MODULE_2__[key.toString()].name}</h3>
// 						<h4 class="h4-heading">${_pets_json__WEBPACK_IMPORTED_MODULE_2__[key.toString()].type} - ${_pets_json__WEBPACK_IMPORTED_MODULE_2__[key.toString()].breed}</h4>
// 					</div>
// 					<h5 class="h5-heading">${_pets_json__WEBPACK_IMPORTED_MODULE_2__[key.toString()].description}</h5>
// 					<ul class="info-list">
// 						<li><b>Age:</b> ${_pets_json__WEBPACK_IMPORTED_MODULE_2__[key.toString()].age}</li>
// 			`;
//       _pets_json__WEBPACK_IMPORTED_MODULE_2__[key.toString()].inoculations.forEach((elem, i) => {
//         if (i === 0) newPopup += `<li><b>Inoculations:</b> ${elem}`;else newPopup += `, ${elem}`;
//       });
//       newPopup += `</li>`;
//       _pets_json__WEBPACK_IMPORTED_MODULE_2__[key.toString()].diseases.forEach((elem, i) => {
//         if (i === 0) newPopup += `<li><b>Diseases:</b> ${elem}`;else newPopup += `, ${elem}`;
//       });
//       newPopup += `</li>`;
//       _pets_json__WEBPACK_IMPORTED_MODULE_2__[key.toString()].parasites.forEach((elem, i) => {
//         if (i === 0) newPopup += `<li><b>Parasites:</b> ${elem}`;else newPopup += `, ${elem}`;
//       });
//       newPopup += `</li>
// 					</ul>
// 				</div>
// 			</div>`;
//       popup.insertAdjacentHTML('beforeend', newPopup);
//     }
//   }
//   document.querySelector('.popup-btn').addEventListener('click', removePopup, false);
//   popup.classList.toggle('popup-open');
//   screenPopup.classList.toggle('screen-blacked');
//   document.body.classList.toggle('overflow');
// }
// function removePopup() {
//   popup.classList.remove('popup-open');
//   screenPopup.classList.remove('screen-blacked');
//   document.body.classList.remove('overflow');
// }

// // Конечные функции

const getRandomInt = (max: number): number => {
  return Math.floor(Math.random() * max);
}
// function isResized() {
//   screenWidth = document.documentElement.clientWidth;
//   let resizeFlag = false;
//   if (currentWidth <= 576 && screenWidth > 576 || currentWidth <= 980 && screenWidth > 980 || currentWidth > 980 && screenWidth <= 980 || currentWidth > 576 && screenWidth <= 576) {
//     resizeFlag = true;
//   }
//   currentWidth = screenWidth;
//   return resizeFlag;
// }
