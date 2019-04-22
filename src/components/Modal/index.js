import React, { Component } from "react";
import './style.css'

export default class Modal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false
    }

}
toggleModal = (e) => {
    this.setState({isOpen: !this.state.isOpen})
}
componentDidMount() {
  document.addEventListener('keydown', (e) => {
    if (e.keyCode === 27 && this.state.isOpen) {
      this.toggleModal()
    }
  })
}
componentWillUnmount() {
  document.removeEventListener('keydown', (e) => {
    if (e.keyCode === 27 && this.state.isOpen) {
      this.toggleModal()
    }
  })
}

  render() {
    return (
      <div className="modal-container">
        <button className='open-btn' onClick={this.toggleModal}>Open Modal</button>
        <div aria-modal='true'
            onClick={(e) => {if (this.state.isOpen && e.target.className === 'modal-backdrop') {
          this.toggleModal()
        }}}
          className={this.state.isOpen ? 'modal-backdrop' : 'closed'}>
          <section className='modal-content'>
            <span className ='close-btn' onClick={this.toggleModal}> X </span>
          </section>
        </div>
      </div>
    )
  }
}
