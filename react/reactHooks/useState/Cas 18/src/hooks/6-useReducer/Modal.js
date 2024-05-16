import React from 'react';
import { useEffect } from 'react';

const Modal = ({ modalContent, closeModal }) => {
  useEffect(() => {
    setTimeout(() => {
      closeModal();
    }, 1200);
  });

  return (
    <div className='modal'>
      <p>{modalContent}</p>
    </div>
  );
};

export default Modal;