import React from 'react';

const Modal = ({ show, handleClose, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
      <button type="button" onClick={handleClose}>
          &#10006;
      </button>
        {children}
      </section>
    </div>
  );
};

export default Modal;