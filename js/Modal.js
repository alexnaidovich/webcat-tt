const Modal = document.querySelector('#modal');
const modalBack = Modal.querySelector('#modal-back');
const modalBody = Modal.querySelector('#modal-body');

const costButton = document.querySelector('#cost');

const modal = () => {
  Modal.classList.add('modal-visible');
  modalBack.classList.add('modal-back-visible');
  modalBody.classList.add('modal-body-visible');
  
  let close = Modal.querySelector('#close-modal');
  
  close.addEventListener('click', e => {
    e.preventDefault();
    Modal.classList.remove('modal-visible');
    modalBack.classList.remove('modal-back-visible');
    modalBody.classList.remove('modal-body-visible');
  });
  
  modalBack.addEventListener('click', e => {
    e.preventDefault();
    Modal.classList.remove('modal-visible');
    modalBack.classList.remove('modal-back-visible');
    modalBody.classList.remove('modal-body-visible');
  });  
}

costButton.addEventListener('click', e => {
  e.preventDefault();
  modal();
});