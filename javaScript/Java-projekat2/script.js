'use strict';

// TASK 1: TAGOVATI SVE VARIJABLE:
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnsOpenModals = document.querySelectorAll('.show-modal');
const btncloseModal = document.querySelector('.close-modal');
// TASK 2 PROVERITI SVE VARIJABLE
console.log(modal, overlay, btnsOpenModals, btncloseModal);
// TASK 3: NAPRAVITI openModal f-ju koja ce da nam prikaze nase elemente
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
// TASK 4: NAPRAVITI closeModal f-ju koja ce da nam zatviru nase elemente
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
// TASK 5: PROCI KROZ SVA DUGMAD PREKO FOR-a I DODATI IM NASU FUNKCIJU ZA OTVARANJE MODALA:
for (let i = 0; i < btnsOpenModals.length; i++) {
  btnsOpenModals[i].addEventListener('click', openModal);
}

// TASK 6: ugasi na x
btncloseModal.addEventListener('click', closeModal);
// TASK 7: ugasi na blur:
overlay.addEventListener('click', closeModal);
// TASK 8: ugasi na 'Escape':
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    closeModal();
  }
});
