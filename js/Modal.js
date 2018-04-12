const Modal = document.querySelector('#modal');
const modalBack = Modal.querySelector('#modal-back');
const modalBody = Modal.querySelector('#modal-body');

const costButton = document.querySelector('#cost');

const modal = () => {
  
  let currentTop = window.pageYOffset;
  let currentBottom = currentTop + window.innerHeight;
  
  Modal.style.top = currentTop + 'px';
  Modal.style.bottom = currentBottom + 'px';
  Modal.classList.add('modal-visible');
  modalBack.classList.add('modal-back-visible');
  modalBody.classList.add('modal-body-visible');
  document.body.style.overflow = 'hidden';
  
  let close = Modal.querySelector('#close-modal');
  
  close.addEventListener('click', e => {
    e.preventDefault();
    Modal.classList.remove('modal-visible');
    modalBack.classList.remove('modal-back-visible');
    modalBody.classList.remove('modal-body-visible');
    document.body.style.overflow = 'scroll';
  });
  
  modalBack.addEventListener('click', e => {
    e.preventDefault();
    Modal.classList.remove('modal-visible');
    modalBack.classList.remove('modal-back-visible');
    modalBody.classList.remove('modal-body-visible');
    document.body.style.overflow = 'scroll';
  });  
}

costButton.addEventListener('click', e => {
  e.preventDefault();
  modal();
});