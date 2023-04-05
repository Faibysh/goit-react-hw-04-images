import React from 'react';
import { createPortal } from 'react-dom';
import css from './Modal.module.css';
const modalRoot = document.getElementById('modal-root');

class Modal extends React.Component {
  onPressKey = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };
  outsideClickHandler = e => {
    if (e.target.id === 'modal-overlay') {
      this.props.onClose();
    }
  };

  componentDidMount() {
    window.addEventListener('click', this.outsideClickHandler);
    window.addEventListener('keydown', this.onPressKey);
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.outsideClickHandler);
    window.removeEventListener('keydown', this.onPressKey);
  }

  render() {
    return createPortal(
      <div id="modal-overlay" class={css.overlay}>
        <div class={css.modal}>{this.props.children}</div>
      </div>,
      modalRoot
    );
  }
}

export default Modal;
