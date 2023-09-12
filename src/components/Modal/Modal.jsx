import { StyledModalOverlay, StyledModal } from './Modal.styled';
import React, { Component } from 'react';
export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', e => {
      console.log(e.code);
      if (e.code === 'Escape') {
        this.props.toggleModal('');
      }
    });
  }

  render() {
    return (
      <StyledModalOverlay>
        <StyledModal>
          <img src={this.props.currentImg} alt="" />
        </StyledModal>
      </StyledModalOverlay>
    );
  }
}
