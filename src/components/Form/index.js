import React, { Component } from "react";
import './style.css'

export default class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }

  }
  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }
  onSubmit = (e) => {
    e.preventDefault()
    
  }
  render() {
    return (
      <form className="" autoComplete="off" >
        <div className="form-wrapper">
          <div className="form-row">
            <fieldset className="form-column" id=''>

              <div className="input-row">
                <div className="input-wrapper">
                  <label htmlFor=""></label>
                  <input name="" type="text" id="" placeholder="" onChange={this.onChange}  />
                </div>

                <div className="input-wrapper">
                  <label htmlFor=""></label>
                  <input name="" type="text" id="" placeholder="" onChange={this.onChange}  />
                </div>
              </div>
          </div>
          <button type='submit' onClick={this.onSubmit}>Submit Bar </button>
     </div>
  </form>
    )
  }
}
