import React, { Component } from 'react'
import GeneralForm from '../components/GeneralForm'

class App extends Component {
  constructor() {
    super()

    this.state = {
      edit: true,
    }
  }

  onSubmitForms = (e) => {
    e.preventDefault()

    this.setState({
      edit: false,
    })
  }

  render() {
    const { edit } = this.state

    //return how the page should look in edit mode
    if (edit) {
      return (
        <div>
          <div className="header-container">
            <h2>Please Supply your Details</h2>
          </div>
          <div className="form-section">
            <GeneralForm header="General" />
          </div>
          <form onSubmit={this.onSubmitForms}>
            <button type="submit">Submit</button>
          </form>
        </div>
      )
      //return how the page should look once submitted
    } else {
      return <div>Currently submitted</div>
    }
  }
}

export default App
