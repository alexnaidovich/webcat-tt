const Modal = document.querySelector('#modal');
const modalBack = Modal.querySelector('#modal-back');
const modalBody = Modal.querySelector('#modal-body');
const wrapr = document.querySelector('#wrapper');

const costButton = document.querySelector('#cost');

const modal = () => {
  
  let currentTop = window.pageYOffset;
  let currentBottom = currentTop + window.innerHeight;
  
  Modal.style.top = currentTop + 'px';
  Modal.style.bottom = currentBottom + 'px';
  Modal.classList.add('modal-visible');
  modalBack.classList.add('modal-back-visible');
  modalBody.classList.add('modal-body-visible');
  document.body.style.overflowY = 'hidden';
  
  let close = Modal.querySelector('#close-modal');
  
  close.addEventListener('click', e => {
    e.preventDefault();
    modalBack.classList.remove('modal-back-visible');
    modalBack.classList.add('modal-back-hidden');
    modalBody.classList.remove('modal-body-visible');
    setTimeout(() => {
      Modal.classList.remove('modal-visible');
    }, 500);
    document.body.style.overflowY = 'scroll';
  });
  
  modalBack.addEventListener('click', e => {
    e.preventDefault();
    modalBack.classList.remove('modal-back-visible');
    modalBack.classList.add('modal-back-hidden');
    modalBody.classList.remove('modal-body-visible');
    setTimeout(() => {
      Modal.classList.remove('modal-visible');
    }, 500);
    document.body.style.overflowY = 'scroll';
  });  
}

costButton.addEventListener('click', e => {
  e.preventDefault();
  modal();
});