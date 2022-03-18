import React, { Component } from 'react'

class App extends Component {
  constructor() {
    super()
    this.state = {
      edit: true,
    }
  }

  render() {
    const { edit } = this.state

    if (edit) {
      return <div>Currently in edit mode</div>
    } else {
      return <div>Currently submitted</div>
    }
  }
}

export default App
